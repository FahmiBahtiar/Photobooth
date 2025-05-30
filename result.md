# KacaKacaBooth - 免费在线照相亭应用

## 项目概览

KacaKacaBooth 是一个基于 Next.js 开发的在线照相亭应用，允许用户使用网络摄像头拍摄照片或上传照片，应用滤镜和边框效果，添加贴纸装饰，并将最终的照片条下载保存。

## 技术栈

- **前端框架**: Next.js 15.3.1
- **UI 库**: React 19.0.0
- **样式**: Tailwind CSS 4
- **拍照功能**: react-webcam 7.2.0
- **图像处理**: html-to-image 1.11.13
- **图标**: react-icons 5.5.0
- **语言**: TypeScript

## 核心功能

### 1. 照片捕获与上传
- 支持通过网络摄像头拍摄照片
- 支持上传本地照片
- 每次可创建4张照片组成的照片条

### 2. 实时滤镜预览
- 提供多种滤镜效果:
  - 默认(无滤镜)
  - 黑白
  - 复古
  - 老照片效果
  - 琥珀色
  - 夜景模式

### 3. 照片自定义功能
- 框架颜色选择（16种颜色选项，包括彩虹渐变）
- 贴纸添加功能（18种贴纸选项）
- 贴纸可拖动自定义位置

### 4. 导出与分享
- 将照片条导出为PNG图片
- 一键下载功能

## 项目结构

```
/
├── public/               # 静态资源
├── src/                  # 源代码
│   ├── app/              # 应用代码
│   │   ├── components/   # 共享组件
│   │   │   └── Layout.tsx # 页面布局组件
│   │   ├── context/      # React 上下文
│   │   │   └── PhotoContext.tsx # 照片数据管理上下文
│   │   ├── photo/        # 拍照页面
│   │   │   └── page.tsx  # 拍照功能实现
│   │   ├── result/       # 结果页面
│   │   │   └── page.tsx  # 照片编辑与导出
│   │   ├── globals.css   # 全局样式
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 首页
└── package.json          # 项目依赖
```

## 应用流程

1. **首页**: 用户可以了解应用功能并导航到照相亭页面
2. **照相亭页面**: 
   - 用户可以选择使用摄像头或上传照片
   - 若使用摄像头，可以选择滤镜效果
   - 拍摄/上传完成后，显示4张照片预览
3. **结果页面**:
   - 显示照片条的预览
   - 提供边框颜色选择
   - 允许添加和定位贴纸
   - 提供下载功能将最终效果保存为图片

## 核心技术实现

### 状态管理
使用 React Context API (PhotoContext) 管理照片数据在不同页面间的传递和共享。

### 照片捕获
使用 react-webcam 库实现网络摄像头访问和照片捕获功能，包括倒计时效果。

### 图像处理
- 实时滤镜预览通过 CSS 滤镜属性实现
- 使用 html-to-image 库将 DOM 元素转换为可下载的图像

### 用户界面
- 响应式设计，适配不同屏幕尺寸
- 直观的选项卡界面（摄像头/上传）
- 预览与编辑区域清晰分离

## 项目特点

1. **无需注册**：用户可以直接使用所有功能，无需创建账户
2. **完全免费**：没有隐藏费用或水印
3. **即时使用**：所有处理在客户端完成，无需等待上传或服务器处理
4. **隐私保护**：照片不会上传到服务器，确保用户隐私

## 总结

KacaKacaBooth 是一个功能丰富的在线照相亭应用，提供了拍摄、上传、编辑和下载照片条的完整流程。项目使用现代前端技术栈构建，具有良好的用户体验和丰富的自定义选项。应用的特点是简单易用，无需注册，所有功能完全免费，同时保护用户隐私。 