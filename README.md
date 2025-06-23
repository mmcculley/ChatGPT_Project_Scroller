# ChatGPT Project Scroller Fixer

A lightweight Chrome extension to fix scrolling behavior in ChatGPT's "Project Conversations" sidebar—ensuring a smoother UX when navigating large lists of conversation threads.

---

## 💎 Features

- Automatically detects when you're inside a ChatGPT project (`/g/` path).
- Adjusts the height and overflow of the conversation list container.
- Prevents scroll lock and nested scrollbars on long project lists.
- Clean, minimal injection—no page breakage.

---

## 📦 Installation

1. Clone or download this repo:

```bash
git clone https://github.com/mmcculley/ChatGPT_Project_Scroller.git
```

2. Visit `chrome://extensions/` in Chrome.

3. Enable **Developer Mode**.

4. Click **“Load unpacked”** and select the project folder.

---

## 💠 Tech

- JavaScript DOM injection via `inject.js`
- Manifest V3 Chrome extension
- Custom icon set and `favicon.ico` for clear visual identification

---

## 🔍 How It Works

The extension runs on ChatGPT pages with URLs containing `/g/`, finds the anchor for the current conversation, moves 3 `div` parents up, and applies a fixed height and `overflow-y: auto` to ensure proper scrolling.

You can customize this logic in `inject.js` if needed.

---

## 🧪 Status

✅ Tested in Chrome  
� May cause minor double-scroll artifacts outside of `/g/` paths (currently constrained)

---

## ✍️ Author

Michael McCulley  
[github.com/mmcculley](https://github.com/mmcculley)

---

## 📄 License

MIT License
