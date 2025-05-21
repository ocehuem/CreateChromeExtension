# 🌐 Web Customizer Chrome Extension

A simple and powerful Chrome extension that enhances your browsing experience by allowing you to customize how any website looks. Easily adjust fonts, toggle dark mode, increase contrast, tweak brightness, and more — all from your browser!

## ✨ Features

- 🎨 **Font Changer** – Select your preferred font for better readability.
- 🌙 **Dark Mode** – Enable a dark theme on all websites to reduce eye strain.
- 🖍️ **High Contrast Mode** – Improve text visibility with high contrast settings.
- 💡 **Brightness Control** – Adjust website brightness for comfortable viewing.
- 🆎 **Font Style Selector** – Choose from various font styles like serif, sans-serif, monospace, etc.

## 📦 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/web-customizer-extension.git
   ```

2. Open Chrome and go to:
   ```
   chrome://extensions/
   ```

3. Enable **Developer Mode** (top-right corner).

4. Click **Load Unpacked** and select the project folder.

5. The extension should now appear in your browser toolbar!

## 🛠 Usage

- Click the extension icon in the toolbar.
- Use the popup to toggle features (dark mode, font change, etc.).
- Your settings are applied instantly to the active tab.

## 📁 Project Structure

```
web-customizer-extension/
│
├── manifest.json         # Extension metadata
├── popup.html            # UI for extension popup
├── popup.js              # Logic for popup interactions
├── content.js            # Script injected into web pages
├── styles.css            # Custom styles for UI and web content
└── icons/                # Extension icons
```

## 🧩 Permissions

This extension may require the following permissions:
- `activeTab` – to inject customization into the current tab
- `storage` – to save your preferences

## 🙌 Contributing

Pull requests are welcome! If you have feature suggestions or bug fixes, feel free to contribute.
---

### 📌 Note
This extension does not collect any user data and works fully offline.
