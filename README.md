# ChatGPT Project Conversation Scroll Fixer 🪄

A lightweight Chrome extension that fixes the scrollbar issue within the **Project Conversation List** in ChatGPT. Ensures the conversation list scrolls properly without creating double-scrollbars in regular chats.

---

## ✨ Features

- 📜 **Smooth scrolling** for long conversation lists in project views
- 🚫 **Avoids double-scrollbar glitches** in standard chat views
- ⚙️ **Auto-injection** on domains `chat.openai.com` and `chatgpt.com`
- 🧱 **Minimal footprint** — small JS + CSS, no dependencies

---

## ⚙️ Installation (Unpacked)

1. Download or clone this repo.
2. Go to `chrome://extensions/`, enable **Developer Mode**.
3. Click **“Load unpacked”** → select this repository's folder.
4. Navigate to a **ChatGPT project view** (URL contains `/g/…`).
5. The scroll fix is injected automatically.

---

## 🧪 Usage

- Works on both `chat.openai.com` and `chatgpt.com`
- Conversation container is detected dynamically — no manual intervention needed
- No console spam — fully silent in production

---

## 🧩 Customization & Future Enhancements

Want more features? Consider adding:

- A **toolbar button** to toggle the scroll fix
- Votes or UI enhancements to project and conversation lists
- A **CSV export** for conversation titles
- Icon updates and publishing to the Chrome Web Store

Feel free to fork and submit PRs!

---

## 🔨 Development

- **manifest.json**: defines auto-injection scripts and permissions
- **inject.js**: main logic — URL detection, DOM queries, and CSS patching
- **.gitignore**: excludes system files (`desktop.ini`, `.DS_Store`) and common artifacts

---

## 🧾 License

[MIT License](LICENSE) — free to use and modify. Attribution appreciated!

---

## 👨‍💻 About

Created by Mike McCulley ([@mmcculley](https://github.com/mmcculley)).  
Open source & actively maintained — thanks for your support!

