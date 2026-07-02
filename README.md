<h1 align="center">Card Forge 🃏</h1>

<p align="center">
  一款功能丰富的在线卡牌设计工具，所见即所得，无需注册即可使用。
  <br />
  <strong>在线体验 ·</strong>
  <a href="https://github.com/kinguang3/Card-Forge"><strong>GitHub 仓库 »</strong></a>
</p>

---

## 📖 项目介绍

**Card Forge** 是一款基于 Web 的可视化卡牌设计工具。你可以自由设计卡牌的外观、布局和样式，实时预览效果，并一键导出为高清 PNG 图片。

无论是桌游卡牌、集换式卡牌（TCG）、还是自定义角色卡，Card Forge 都能帮你快速完成设计，无需任何设计工具使用经验。

---

## ✨ 功能特性

- **🎨 可视化编辑器** — 所见即所得，所有修改实时预览
- **🖱️ 自由拖拽布局** — 标题、副标题、描述、数值可拖拽到任意位置
- **🎭 丰富样式系统** — 5 套预设模板 + 自定义颜色 + 11 种中英文字体
- **📸 高清导出** — 基于 html2canvas，3 倍渲染输出 PNG 图片，可直接下载
- **💾 自动保存** — 数据自动持久化到 localStorage，刷新页面不丢失
- **🔐 用户系统** — 登录注册 + 个人仪表盘（mock 实现，可对接真实 API）
- **🌗 明暗主题** — 支持深色/浅色模式一键切换
- **📱 响应式设计** — 桌面端与移动端均可流畅使用

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | React 18 |
| **语言** | TypeScript |
| **构建工具** | Vite 6 + SWC |
| **样式** | Tailwind CSS 3 |
| **路由** | react-router-dom v7 |
| **状态管理** | Zustand |
| **图标** | lucide-react |
| **导出** | html2canvas |
| **工具库** | clsx + tailwind-merge |

---

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/kinguang3/Card-Forge.git
cd Card-Forge

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 📂 项目结构

```
src/
├── main.tsx                          # 入口文件
├── App.tsx                           # 路由配置
├── index.css                         # 全局样式
├── components/
│   ├── Header/                       # 顶部导航栏
│   ├── HeroSection/                  # 首屏 Hero 区域
│   ├── FeaturesSection/              # 功能特性展示
│   ├── EditorSection/                # 编辑器布局
│   ├── CardPreview/                  # 卡牌实时预览 + 拖拽
│   ├── PropertyPanel/                # 属性编辑面板
│   ├── StylePanel/                   # 样式编辑面板
│   └── Footer/                       # 页脚
├── pages/
│   ├── Home.tsx                      # 首页（编辑 + 展示）
│   ├── LoginPage.tsx                 # 登录页
│   ├── RegisterPage.tsx              # 注册页
│   └── DashboardPage.tsx             # 用户仪表盘
├── hooks/
│   ├── useCardData.ts                # 卡牌数据管理
│   └── useTheme.ts                   # 主题切换
├── stores/
│   └── authStore.ts                  # 认证状态管理
├── types/
│   └── card.ts                       # 类型定义 & 常量
├── utils/
│   └── exportUtils.ts                # 导出工具
└── lib/
    └── utils.ts                      # 通用工具函数
```

---

## 🎮 使用指南

1. **编辑属性** — 在左侧面板修改卡牌标题、副标题、描述、图片、数值等
2. **调整样式** — 选择预设模板或自定义颜色、字体、大小等
3. **拖拽布局** — 直接拖拽卡牌上的元素到任意位置
4. **导出图片** — 点击右上角导出按钮，一键下载高清 PNG
5. **重置数据** — 点击重置按钮恢复默认设置

---

<!--
## 🖼️ 截图

_(欢迎补充截图)_
-->

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

---

## 📄 许可

本项目仅供学习参考。
