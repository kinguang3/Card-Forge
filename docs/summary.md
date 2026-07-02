# Card Forge 开发总结

## 项目简介

基于 **React 18 + TypeScript + Vite + Tailwind CSS** 的卡牌编辑器 Web 应用，支持卡牌设计、实时预览和 PNG 导出。

---

## 变更记录

### 1. 左右面板高度对齐

- **问题**：左侧属性/样式面板与右侧卡牌预览面板高度不一致
- **方案**：利用 CSS Grid 行高对齐 + `flex flex-col` + `flex-1 overflow-y-auto`
- `src/pages/Home.tsx` — sticky 容器加 `h-full`，backdrop 容器加 `flex flex-col`，内容区加 `flex-1 overflow-y-auto`

### 2. Hero 区装饰卡牌立体化

- **问题**：四张侧边卡牌（3/4/5 of Clubs, Ace of Spades）样式平淡，大小一致
- **方案**：增加 3D 透视变换（`perspective(900px)` + `rotateY/rotateX`），差异化尺寸和阴影
- 越靠近中心的卡牌尺寸越小（左上 175px → 右上 140px → 右下 155px → 左下 120px）
- 每张卡牌角度各异（12°~24°），悬停时归正放大
- `src/components/HeroSection/HeroSection.tsx`

### 3. 页面重构 + 认证路由

- **拆分组件**：将原有 600 行 `Home.tsx` 拆分为 4 个独立组件
  - `HeroSection` — Hero 区、装饰卡牌、CTA
  - `FeaturesSection` — 功能介绍四宫格
  - `EditorSection` — 属性/样式面板 + 卡牌预览
  - `Footer` — 页脚
- **新增页面**
  - `/login` — 登录页（`LoginPage.tsx`）
  - `/register` — 注册页（`RegisterPage.tsx`）
  - `/dashboard` — 用户面板（`DashboardPage.tsx`），未登录自动拦截
- **状态管理**：新增 `stores/authStore.ts`（zustand），管理 `user/token/isAuthenticated`，当前为 mock 实现，标注 `TODO` 便于后续对接后端
- **路由**：`App.tsx` 使用 `BrowserRouter` + `Routes`

### 4. 移除 Header 皇冠闪烁点

- **问题**：Header 皇冠图标右上角有个 `animate-pulse` 的闪烁圆点
- **方案**：移除该元素
- `src/components/Header/Header.tsx`

### 5. 文字元素自由拖拽

- **问题**：只有数值（Stats）可拖拽定位，标题/副标题/描述位置固定
- **方案**：
  - `types/card.ts` — 新增 `titlePosition`、`subtitlePosition`、`descriptionPosition` 字段
  - `CardPreview.tsx` — 重构拖拽系统为统一机制，四个元素共享 `handleMouseDown` + `useEffect`
  - 每个元素使用百分比坐标定位，拖拽时显示 `cursor-grab/grabbing` + 移动指示图标
  - 反转文字（右下角）保持只读

### 6. 字体大小控制

- **问题**：文字大小硬编码（副标题 20px、标题 14px、描述 12px），用户无法调整
- **方案**：
  - `types/card.ts` — 新增 `subtitleFontSize`（14-36px）、`titleFontSize`（10-24px）、`descriptionFontSize`（8-20px）
  - `StylePanel.tsx` — 增加三个滑块控件，实时显示当前 px 值
  - `CardPreview.tsx` — 硬编码 `fontSize` 改为引用上述字段

### 7. 修复副标题字号不生效

- **问题**：副标题字号滑块调整后预览无变化
- **原因**：编辑时因不可见字符差异未匹配到主副标题的 `fontSize`，仅替换了翻转文字处
- **修复**：重新匹配替换 `CardPreview.tsx:159` 的硬编码 `'20px'`

### 8. 移除花色 + 图片比例调节

- **问题**：卡牌外观包含花色符号，上传图片无法调整比例
- **方案**：
  - 移除模板中的花色符号，改为纯字母展示
  - `types/card.ts` — 新增 `imageScaleType` 字段（`contain`/`cover`/`fill`）和 `IMAGE_SCALE_OPTIONS`
  - `CardPreview.tsx` — 图片使用 `objectFit` 属性实现不同缩放模式
  - `StylePanel.tsx` — 添加图片比例选择按钮组

### 9. 扑克牌反转改为右下角文字

- **问题**：卡牌反转是整体旋转，用户期望控制右下角反转文字的显示
- **方案**：
  - `types/card.ts` — 将 `showCardFlip` 改为控制右下角文字显示
  - `CardPreview.tsx` — 右下角文字单独渲染并旋转180度，而非整张卡牌旋转
  - `StylePanel.tsx` — 开关标签改为"右下角文字"

### 10. 数值位置自由拖拽

- **问题**：攻击/防御数值位置固定，用户无法自定义
- **方案**：
  - `types/card.ts` — 新增 `statsPosition: { x: number; y: number }` 字段
  - `CardPreview.tsx` — 实现完整拖拽逻辑，使用百分比坐标定位，带边界限制
  - 拖拽时显示移动图标提示

### 11. 字体支持优化

- **问题**：描述文字字体不随选择变化，缺少中文字体
- **方案**：
  - `CardPreview.tsx` — 移除 Tailwind `text-sm`/`text-xs` 类，改为内联 `fontSize`，避免样式覆盖
  - `types/card.ts` — 添加中文字体选项（宋体、微软雅黑、楷体、仿宋）

### 12. Hero 区卡牌布局优化

- **问题**：四张角牌距离太近，被容器裁剪
- **方案**：
  - `Home.tsx` — 移除容器 `overflow-hidden` 属性
  - 角牌位置改为超出容器边界（`top-[-30px] right-[-30px]` 等），四角分散布局

### 13. 左右面板高度统一

- **问题**：左侧属性/样式面板与右侧卡牌预览面板高度不一致
- **方案**：
  - `Home.tsx` — 左侧面板 `min-h-[500px]` + `h-full`，右侧预览区固定 `h-[500px]`

---

## 项目结构

```
src/
├── stores/
│   └── authStore.ts          ← zustand 认证状态（mock，待对接后端）
├── components/
│   ├── Header/Header.tsx     ← 顶部导航栏
│   ├── HeroSection/          ← Hero 区域
│   ├── FeaturesSection/      ← 功能介绍
│   ├── EditorSection/        ← 编辑器（属性/样式面板 + 预览）
│   ├── Footer/               ← 页脚
│   ├── CardPreview/          ← 卡牌实时预览（含拖拽）
│   ├── PropertyPanel/        ← 属性编辑面板
│   └── StylePanel/           ← 样式编辑面板（含字体大小）
├── pages/
│   ├── Home.tsx              ← 首页（编排子组件）
│   ├── LoginPage.tsx         ← 登录页
│   ├── RegisterPage.tsx      ← 注册页
│   └── DashboardPage.tsx     ← 用户面板
├── hooks/
│   ├── useCardData.ts        ← 卡牌数据状态 + localStorage 持久化
│   └── useTheme.ts           ← 主题切换
├── types/card.ts             ← 核心类型定义
├── utils/exportUtils.ts      ← html2canvas 导出
├── lib/utils.ts              ← cn() 工具函数
├── App.tsx                   ← 路由入口
└── main.tsx                  ← 应用挂载
```

## 后续建议

- **对接后端**：替换 `authStore.ts` 中的 mock 实现为真实 API 调用
- **卡牌数据同步**：当前用 `localStorage` 持久化，后续可同步到后端
- **用户卡牌库**：`DashboardPage` 的收集管理功能待实现
- **社区浏览**：`HeroSection` 和 `Header` 中的"浏览社区"按钮功能待实现
