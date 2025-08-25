import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";  // ✅ 添加这一行

// ✅ 构造 __dirname 替代
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteLogger = createLogger();

/**
 * 简易日志函数
 * - 统一格式：时间 + 来源 + 消息
 * - 默认来源为 "express"
 */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * 在开发环境下将 Vite 以中间件模式挂载到 Express
 * ---------------------------------
 * - middlewareMode: true 以中间件形式运行 Vite（非独立 dev server）
 * - hmr.server: 复用 Node http.Server，实现 HMR
 * - customLogger.error: 自定义 Vite 日志，若报错则退出进程
 * - 兜底路由：将所有请求返回经 Vite 处理的 index.html（注入随机查询参数绕缓存）
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
          __dirname,
          "..",
          "client",
          "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * 在生产环境下提供打包后的静态文件
 * ---------------------------------
 * - dist/public 为构建产物目录
 * - 若目录不存在，抛出明确错误，提示先执行构建
 * - 兜底路由返回 dist/public/index.html，支持前端路由刷新
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");  // ✅ 改成 __dirname

  if (!fs.existsSync(distPath)) {
    throw new Error(
        `❌ Could not find the build directory: ${distPath}, make sure to run 'npm run build' first.`,
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

