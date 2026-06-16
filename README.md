# 雨夜车站 · Rain Night Station

一个沉浸式互动心理故事网页。用户在雨夜车站经历四幕故事，通过直觉性的选择探索当下的内心状态。

## 快速启动

```bash
npm install
npm run dev
```

然后在浏览器打开 http://localhost:5173

## 项目结构

```
rain-night-station/
├── public/
│   └── audio/              # 音频文件目录（见 audio/README.md）
├── src/
│   ├── components/
│   │   ├── Intro.jsx        # 首屏：标题 + 进入按钮
│   │   ├── Intro.css
│   │   ├── StoryScene.jsx   # 故事幕：场景文字 + 选择卡
│   │   ├── StoryScene.css
│   │   ├── ChoiceCard.jsx   # 单个选择卡片
│   │   ├── ChoiceCard.css
│   │   ├── Result.jsx       # 结局页
│   │   └── Result.css
│   ├── data/
│   │   └── story.js         # 故事数据：4幕内容 + 4种结局 + 评分逻辑
│   ├── hooks/
│   │   └── useAudio.js      # 音频系统（真实文件 + 程序化 fallback）
│   ├── App.jsx              # 主入口：场景管理 + 雨滴动画 + 广播
│   ├── styles.css           # 全局样式：雨夜场景 + 站台灯 + 动画
│   └── main.jsx             # React 挂载点
├── index.html
├── vite.config.js
└── package.json
```

## 故事结构

| 幕次 | 场景 | 心理维度 |
|------|------|----------|
| 第一幕 | 雨夜车站，选择走向哪班列车 | 当下的趋近方向 |
| 第二幕 | 进入车厢，选择坐在哪里 | 空间与他人的关系 |
| 第三幕 | 列车员递来一封信，选择如何处理 | 对情绪/信息的反应 |
| 第四幕 | 终点站到了，选择如何下车 | 过渡与行动的方式 |

## 结局类型

- **rest** — 休息修复型
- **release** — 情绪释放型
- **connection** — 关系支持型
- **direction** — 方向重建型

## 音频文件

见 `public/audio/README.md`。如果音频文件不存在，页面自动使用 Web Audio API 程序化声音，不会崩溃。

## 技术说明

- React 19 + Vite 6
- 原生 CSS（无 CSS-in-JS）
- localStorage 保存最后一次结果
- 音频：优先加载真实 mp3，fallback 为程序化 Web Audio
- 移动端优先，`user-scalable=no` 防止误触缩放
