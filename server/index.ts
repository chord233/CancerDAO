import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url"; // ✅ 添加这一行
import dotenv from 'dotenv';
dotenv.config();

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

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // 先设置 API 路由
  app.use("/api", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
    } else {
      next("route");
    }
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;

  try {
    server.listen(Number(port), "0.0.0.0", () => {
      log(`Server running on http://localhost:${port}`);
      if (app.get("env") === "development") {
        log(`  - API: http://localhost:${port}/api`);
        log(`  - Assets: http://localhost:${port}/attached_assets`);
        log(`  - Vite: http://localhost:3000`);
      }
    });
  } catch (err: any) {
    if (err.code === "EADDRINUSE") {
      log(`⚠️ Port ${port} is already in use. Trying port ${Number(port) + 1}...`);
      server.listen(Number(port) + 1, "0.0.0.0", () => {
        log(`Server running on http://localhost:${Number(port) + 1}`);
      });
    } else {
      log(`❌ Server startup error: ${err.message}`);
      process.exit(1);
    }
  }
})();
