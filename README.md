# Web Client (Next.js + MUI)

面向前端开发者的 Web Client 模板项目，基于 **Next.js App Router**、**React 19** 与 **MUI v7**，用于快速搭建 SaaS/营销站点。默认品牌为 `HOUJI`，主要由可复用的页面区块（blocks）和页面视图（views）组合而成。

## 技术栈
- Next.js 16 (App Router)
- React 19
- Material UI (MUI) v7 + Emotion
- Framer Motion
- ESLint + Prettier

## 快速开始
```bash
# 1) 安装依赖（Yarn 4，若本机未启用 corepack 请先启用）
corepack enable
yarn install

# 2) 配置环境变量
cp .env.example .env

# 3) 启动开发服务器
yarn dev
```

访问 `http://localhost:3000` 查看默认首页。

## 常用脚本
```bash
yarn dev        # 本地开发
yarn build      # 生产构建
yarn start      # 启动生产服务器
yarn lint       # 代码检查
yarn lint:fix   # 自动修复部分 lint 问题
yarn prettier   # 格式化
```

## 环境变量
环境变量集中在 `.env` / `.env.example`。

| 变量名 | 作用 |
| --- | --- |
| `NEXT_PUBLIC_VERSION` | 页面底部版本号展示（页脚） |
| `NEXT_PUBLIC_PATH` | 对外公开路径（可选） |
| `NEXT_PUBLIC_BASE_NAME` | 站点基路径（Logo/导航链接基准） |
| `NEXT_PUBLIC_METADATA_BASE` | SEO metadataBase（默认 `http://localhost:3000`） |
| `NEXT_PUBLIC_ANALYTICS_ID` | Google Analytics ID（可选） |
| `MAILERLITE_*` | MailerLite 订阅集成（可选，当前注释） |

## 目录结构
```
src/
  app/                 # Next.js App Router 路由
    (default)/         # 默认站点页面（首页、联系、隐私、条款等）
  blocks/              # 页面区块（hero/feature/pricing/...）
  components/          # 通用组件（按钮、表单、导航、logo 等）
  contexts/            # React Context
  data/                # 静态数据
  hooks/               # 自定义 hooks
  icons/               # SVG 图标
  images/              # 图片组件与资源封装
  styles/              # 全局样式
  utils/               # 工具函数
  views/               # 页面组合（landing 视图）
  branding.json        # 品牌名称/Logo/社交链接
  config.js            # 主题配置、字体等
```

## 页面入口与路由
- 首页入口：`src/app/(default)/page.jsx`
- 页面组合：`src/views/landings/default/index.jsx`
- 页面区块：`src/blocks/*`

你可以在 `views` 中组合多个 blocks，或者在 `app` 路由中切换不同页面。

## 主题与品牌
- 主题切换：`src/config.js` 中的 `currentTheme`
- 品牌信息：`src/branding.json`
- 全局样式：`src/app/globals.css`

## 其他说明
- CSP 已在 `next.config.mjs` 中配置，如需接入新的第三方资源，请同步更新 `Content-Security-Policy`。
- 路径别名：`@/*` 指向 `src/*`（见 `jsconfig.json`）。

## 开发建议
- 复用 `blocks` 作为页面骨架，`components` 作为基础构件。
- 大区块建议使用 `LazySection` 做懒加载（见 `src/components/LazySection`）。

---

如需扩展主题、增加区块或新页面，优先在 `views` 中组合，减少对路由层的侵入。
