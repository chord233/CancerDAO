# CancerDAO 平台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue.svg)](https://www.typescriptlang.org/)

## 🌟 项目概述

CancerDAO 平台是一个革命性的全栈 Web 应用程序，致力于通过前沿技术推进癌症预防和治疗。平台采用现代化的 React 前端和 Node.js 后端构建，结合了 AI 驱动的癌症预防、基于区块链的医疗数据管理和社区驱动的医疗解决方案。

### 🎯 核心特性

- **🤖 AI 驱动的健康解决方案**：9 个专业 AI 智能体提供全面癌症护理
- **🔗 区块链数据管理**：安全、去中心化的医疗数据存储
- **🌍 双语支持**：完整的中英文国际化支持
- **👥 社区驱动**：患者支持和研究协作
- **📱 响应式设计**：移动优先的现代化 UI

## 🏗️ 系统架构

### 前端技术栈
- **框架**: React 18 + TypeScript
- **构建工具**: Vite 快速开发和优化构建
- **UI 库**: Tailwind CSS + shadcn/ui 组件
- **状态管理**: TanStack Query 服务器状态管理
- **路由**: React Router 客户端导航
- **图表**: Recharts 数据可视化
- **表单**: React Hook Form + Zod 验证

### 后端技术栈
- **运行时**: Node.js + Express.js
- **数据库**: PostgreSQL + Drizzle ORM
- **会话**: PostgreSQL 支持的会话管理
- **邮件**: Nodemailer 通知服务
- **安全**: Helmet、CORS、速率限制

### 开发工具
- **语言**: TypeScript 严格配置
- **数据库**: Drizzle Kit 迁移工具
- **样式**: PostCSS + Tailwind CSS
- **包管理器**: pnpm（推荐）

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm（推荐）或 npm
- PostgreSQL 数据库（开发环境可选）

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/chord233/CancerDAO.git
   cd CancerDAO
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **环境配置**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件配置您的环境变量
   ```

4. **数据库设置**（可选）
   ```bash
   pnpm db:push
   ```

5. **启动开发服务器**
   ```bash
   pnpm dev
   ```

   应用程序将在 `http://localhost:5000` 可用

### 可用脚本

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 生产环境构建
pnpm start    # 启动生产服务器
pnpm check    # 类型检查
pnpm db:push  # 推送数据库架构
```

## 📁 项目结构

```
CancerDAO/
├── client/                 # 前端 React 应用
│   ├── src/
│   │   ├── components/     # 可复用 UI 组件
│   │   ├── pages/         # 页面组件
│   │   ├── contexts/      # React 上下文
│   │   ├── hooks/         # 自定义 hooks
│   │   └── lib/           # 工具函数
│   └── public/            # 静态资源
├── server/                # 后端 Express 应用
│   ├── handlers/          # 路由处理器
│   ├── utils/             # 服务器工具
│   └── index.ts           # 服务器入口
├── shared/                # 共享类型和架构
└── Figma/                 # 设计资源
```

## 🎨 设计系统

### 色彩方案
平台使用严格的色彩调色板：
- **主紫色**: `#e7d1ff`, `#c9a4ff`
- **强调黄色**: `#fad000`
- **强调红色**: `#fc593d`
- **基础色**: 黑色和白色

### 组件
- 基于 Radix UI 原语构建，确保可访问性
- 所有组件使用一致的设计令牌
- 移动优先的响应式设计

## 🤖 AI 智能体矩阵

平台提供 9 个专业 AI 智能体：

1. **Report Bot** - 医疗报告分析
2. **Trial Bot** - 临床试验匹配
3. **Clinical Bot** - 临床决策支持
4. **Content Bot** - 教育内容生成
5. **Longevity Bot** - 长寿与预防
6. **Health Bot** - 一般健康指导
7. **AMA Bot** - 问答支持
8. **Research Bot** - 研究辅助
9. **Support Bot** - 患者支持

## 🌐 国际化

平台支持完整的双语操作：
- **语言**: 简体中文和英文
- **覆盖范围**: 所有 UI 文本、内容和文档
- **实现方式**: 基于 React 的自定义语言上下文

## 🔧 配置

### 环境变量

```env
NODE_ENV=development
DATABASE_URL=your_postgresql_url
SESSION_SECRET=your_session_secret
EMAIL_HOST=your_email_host
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
```

### 数据库架构

应用程序使用 Drizzle ORM 和 PostgreSQL：
- **Subscribers**: 新闻通讯邮件管理
- **Contact Messages**: 用户咨询和合作伙伴关系
- **Sessions**: 用户会话管理

## 🚀 部署

### 生产构建

```bash
pnpm build
pnpm start
```

### Docker 部署

```dockerfile
# Dockerfile 示例
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解详情。

### 开发工作流

1. Fork 仓库
2. 创建功能分支
3. 进行更改
4. 如适用，添加测试
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 👥 团队

- **Michael Yang** - 创始人兼 CEO
- **YoSean Wang** - 联合创始人兼 CTO
- **Zhiwei Bao** - 联合创始人兼研究主管

## 📞 联系方式

- **网站**: [https://cancerdao.org](https://cancerdao.org)
- **邮箱**: chord244@gmail.com
- **Twitter**: [@chord244](https://twitter.com/chord244)
- **GitHub**: [https://github.com/chord233](https://github.com/chord233)
- **LinkedIn**: [https://linkedin.com/in/chord233](https://linkedin.com/in/chord233)

## 🔗 相关链接

- [Telegram 社区](https://web.telegram.org/a/#-1002393239074_1)
- [Discord 服务器](https://discord.gg/cancerdao)
- [项目文档](https://docs.cancerdao.org)

---

**为全球癌症预防社区用 ❤️ 构建**