import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url"; // ✅ 添加这一行
import dotenv from 'dotenv';
dotenv.config();

/**
 * CancerDAO 服务端入口文件
 * ---------------------------------
 * 主要职责：
 * - 初始化 Express 应用与通用中间件（JSON、URL 编码）
 * - 在 `/attached_assets` 路径下提供静态资源
 * - 通过 `registerRoutes(app)` 注册所有 API 路由
 * - 为 `/api` 命名空间提供简洁的请求日志
 * - 开发环境集成 Vite，生产环境提供构建产物
 * - 统一错误处理与端口监听（包含端口占用的兜底处理）
 */

// ✅ 构造 __dirname 替代
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ 使用 __dirname，避免 import.meta.dirname 报错
app.use(
    "/attached_assets",
    express.static(path.resolve(__dirname, "..", "attached_assets"))
);

/**
 * 轻量级 API 请求日志中间件
 * - 记录单次请求的端到端耗时
 * - 输出方法、路径、状态码、耗时与（截断后的）JSON 响应体
 * - 仅对以 `/api` 开头的请求生效，避免控制台噪音
 */
app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  /**
   * 统一错误处理中间件
   * - 规范化错误响应（状态码 + 信息）
   * - 响应后抛出错误：
   *   - 开发环境可直观看到未处理错误
   *   - 生产环境便于进程管理器捕获
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // 先设置 API 路由：确保仅 /api 命名空间继续走下一个中间件/路由
  app.use("/api", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
    } else {
      next("route");
    }
  });

  // 开发环境 vs 生产环境的资源提供策略
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;

  // 端口监听封装：若端口占用则自动递增重试
  const startListening = (p: number) => {
    const onListening = () => {
      log(`Server running on http://localhost:${p}`);
      if (app.get("env") === "development") {
        log(`  - API: http://localhost:${p}/api`);
        log(`  - Assets: http://localhost:${p}/attached_assets`);
        log(`  - Vite: http://localhost:3000`);
      }
    };

    server.on('error', (err: any) => {
      if (err && err.code === 'EADDRINUSE') {
        log(`⚠️ Port ${p} is already in use. Trying port ${p + 1}...`);
        // 移除当前 error 监听，避免递归过程中重复触发
        server.removeAllListeners('error');
        startListening(p + 1);
      } else {
        log(`❌ Server startup error: ${err?.message || err}`);
        process.exit(1);
      }
    });

    server.listen(p, "0.0.0.0", onListening);
  };

  startListening(Number(port));
})();

