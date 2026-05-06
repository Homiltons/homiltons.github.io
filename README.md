# Hongming Wang — Personal Homepage

Live site: [https://homiltons.github.io/](https://homiltons.github.io/)

Static GitHub Pages site (single-page layout in `index.html`). Originally adapted from [Dr. Boyuan Chen’s homepage](https://www.boyuan.space/); thanks for the template.

---

## 想改主页时，主要改哪里？

### 1. 页面主体：`index.html`（最重要）

几乎所有可见内容都在这里，按滚动区块大致对应：

| 区域 | 在文件里怎么找 | 说明 |
|------|----------------|------|
| **站点标题、SEO、社交预览** | `<head>` 里 `<title>`、`meta keywords/description`、`og:*` | 浏览器标签、搜索结果摘要 |
| **结构化数据（Google 等）** | `<head>` 里 `<script type="application/ld+json">` | Person / 机构信息，可按需校对 |
| **Favicon** | `<link href="data/海.ico" …>` | 换图标时改路径或替换 `data/` 下文件 |
| **首页大标题 / 轮播词** | `id="home"` 的 `<section>` | 名字、副标题、`cd-words-wrapper` 里轮换的关键词 |
| **关于我 + News** | `id="about"` 的 `<section>` | 简介、学校/导师链接、News、底部社交图标（Scholar / X / GitHub / LinkedIn / 邮箱） |
| **论文 / 研究** | `id="research"` 的 `<section>` | 论文卡片、链接；筛选按钮与脚本逻辑在同文件靠后的 `<script>` |
| **Misc（旅行、网球等）** | `id="portfolio"` 的 `<section>` | 过滤器文案、图片路径、说明文字 |
| **页脚** | `<footer id="footer">` | 版权、访客地图脚本等 |
| **导航栏** | `<nav id="navbar">` | 菜单文字与 `data-scroll-nav` 序号（需与各 section 的 `data-scroll-index` 一致） |

**注意：** 若「About」在浏览器里看不到，检查 `id="about"` 的 `<section>` 是否带有 `style="display: none"`；要去掉隐藏时删除该属性即可。

#### 论文列表与共一标注

- 每条论文在 `id="research"` 下的 `div.pub-card` 里维护：标题、作者行、会议/期刊行、`Paper | Bibtex` 等。
- **共一作者**：在姓名后加 `<sup>*</sup>`（右上角星号），并在作者行下方用一行小字说明，例如：`<sup>*</sup> Equal contribution (co-first authors).`
- **BibTeX**：在 `@inproceedings` / `@article` 中可增加 `note={...}`，方便他人复制引用时看到同等贡献说明。

### 2. 图片与静态资源

| 路径 | 用途 |
|------|------|
| `images/me.jpg` | 关于页头像 |
| `images/background/` | 首页横幅等背景图 |
| `data/海.ico`、`data/海.png` | 网站图标 |
| `data/projects/<项目名>/` | 研究区项目缩略图 |
| `data/images/travel/…` | Misc 里旅行照片 |
| `data/images/tennis/…` | Misc 里网球相关图 |
| `files/` | 可下载文件（如 `Hongming_Wang_CV.pdf`） |

换图时：把文件放进对应目录，并在 `index.html` 里改 `src="…"`。

### 3. 全局样式

- `css/style.css` — 主样式  
- `css/bootstrap.css` — 框架样式（一般少改）  

### 4. 博客子页（若使用）

- `blogs-page.html` — 独立博客列表页；与首页的 Blog 导航是否入口，在 `index.html` 导航里控制（当前可能被注释掉）。

### 5. 分析与其他脚本

- Google Analytics 等统计：在 `index.html` 底部附近搜索 `G-` 或 `gtag` / `google-analytics` 按需修改 ID。  
- 邮箱展示：页面中有通过脚本写入的 `<span id="email">`，在同文件脚本里改域名/逻辑。

---

## 本地预览

直接用浏览器打开 `index.html`，或在项目根目录起一个静态服务器，例如：

```bash
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000` 即可（避免部分路径在 `file://` 下异常）。

---

## 发布到 GitHub Pages

1. 将本仓库推送到 GitHub（用户页仓库名一般为 `用户名.github.io`）。  
2. 在仓库 **Settings → Pages** 中，Source 选择对应分支与根目录 `/`。  
3. 推送更新后等待一两分钟再访问线上地址。

---

## 仓库结构（简要）

```
index.html          # 主页（主编辑文件）
blogs-page.html     # 博客页
css/                # 样式
js/                 # 脚本（若存在独立文件）
images/             # 通用图片
data/               # favicon、项目图、旅行/网球等资源
files/              # CV 等下载文件
```

修改完成后提交并 `git push`，GitHub Pages 会自动更新（视配置而定）。
