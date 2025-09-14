# 💕 情侣纪念网站

一个用于记录情侣甜蜜时光的响应式网站，支持纪念日计算、时光轴记录、相册展示和留言功能。

## ✨ 功能特性

- 💖 实时爱情计时器
- 📅 重要时刻时光轴
- 📸 甜蜜相册展示
- 💌 爱的留言板
- 🎨 浪漫动画效果
- 📱 响应式设计

## 🚀 Cloudflare Pages 部署步骤

### 方法一：GitHub 连接部署（推荐）

1. **上传代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "初始化情侣网站"
   git branch -M main
   git remote add origin https://github.com/你的用户名/love-website.git
   git push -u origin main
   ```

2. **连接 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 Pages 页面
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择你的仓库
   - 配置构建设置：
     - Framework preset: `None`
     - Build command: 留空
     - Build output directory: `/`
   - 点击 "Save and Deploy"

### 方法二：直接上传部署

1. **打包文件**
   - 将所有文件（index.html, style.css, script.js）打包成 zip

2. **上传到 Cloudflare Pages**
   - 登录 Cloudflare Dashboard
   - 进入 Pages 页面
   - 点击 "Upload assets"
   - 上传 zip 文件
   - 设置项目名称
   - 点击 "Deploy site"

## 🛠️ 自定义配置

### 修改恋爱开始时间
编辑 `script.js` 文件第5行：
```javascript
const LOVE_START_DATE = new Date('2024-01-26T00:00:00');
```

### 🎂 生日特殊模式

网站具有智能生日检测功能，在佳怡生日当天（农历七月二十四）会自动切换为特殊的生日主页：

**生日模式特色：**
- 🎉 大标题"佳怡生日快乐"
- 🎂 动态生日蛋糕和烟花效果  
- 👑 生日女王特殊标识
- 💖 温馨生日祝福卡片
- 🎈 飘浮的彩色气球动画
- ✨ 生日专属心形特效
- 🎆 绚丽的背景动画
- 🎵 **生日歌音乐播放**（Web Audio API合成）

**测试生日模式：**
1. 访问 `test-birthday.html` 查看生日页面效果
2. 或者在 `script.js` 中取消注释 `return true;` 行（约第235行）

**自动切换逻辑：**
- 生日当天：显示生日专属页面
- 平时：显示正常的纪念日倒计时页面
- 自动计算年龄和生日日期

### 修改情侣信息
编辑 `index.html` 文件中的姓名和头像：
```html
<div class="person">
    <div class="avatar">👨‍💻</div>
    <h3>你的名字</h3>
</div>
```

### 添加重要时刻
在 `index.html` 的时光轴部分添加更多 `timeline-item`：
```html
<div class="timeline-item">
    <div class="timeline-date">2024-XX-XX</div>
    <div class="timeline-content">
        <h3>💕 事件标题</h3>
        <p>事件描述...</p>
    </div>
</div>
```

## 🌍 国内访问优化

### CDN 加速建议
1. **自定义域名**：绑定已备案的国内域名
2. **DNS 优化**：使用 DNSPod 或阿里云 DNS
3. **CDN 服务**：考虑使用七牛云、又拍云等国内 CDN

### 网络测试
部署后可以使用以下工具测试国内访问速度：
- [17CE](https://www.17ce.com/) - 全国网站测速
- [奇云测](https://ce.cloud.360.cn/) - 360网站测速
- [阿里云拨测](https://boce.aliyun.com/) - 阿里云网站拨测

## 📂 文件结构

```
love/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── _headers            # HTTP头部配置
└── README.md           # 说明文档
```

## 💡 使用提示

- 留言功能使用 localStorage 存储，数据保存在浏览器本地
- 所有动画都经过优化，支持移动端
- 支持键盘快捷键：ESC关闭弹窗，Ctrl+Enter发送留言
- 页面会自动适配不同屏幕尺寸

## 🔒 隐私说明

- 本网站不收集任何个人信息
- 留言数据仅存储在用户浏览器本地
- 没有第三方跟踪或分析代码

---

❤️ 愿你们的爱情像代码一样优雅，像星空一样永恒！