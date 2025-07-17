import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from attached_assets directory
app.use('/attached_assets', express.static(path.resolve(process.cwd(), 'attached_assets')));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
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

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;

  // Windows兼容的服务器启动方式
  try {
    server.listen(port,'0.0.0.0',() => {
      log(`Server running on http://localhost:${port}`);
      if (app.get("env") === "development") {
        log(`  - API: http://localhost:${port}/api`);
        log(`  - Assets: http://localhost:${port}/attached_assets`);
        log(`  - Vite: http://localhost:3000`);
      }
    });
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      log(`⚠️ Port ${port} is already in use. Trying port ${Number(port)+1}...`);
      server.listen(Number(port)+1, () => {
        log(`Server running on http://localhost:${Number(port)+1}`);
      });
    } else {
      log(`❌ Server startup error: ${err.message}`);
      process.exit(1);
    }
  }
})();