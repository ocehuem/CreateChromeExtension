chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleDarkMode") {
      document.body.classList.toggle("dark-mode");
    } else if (message.action === "toggleHighContrast") {
      document.body.classList.toggle("high-contrast");
    } else if (message.action === "toggleReverseColors") {
      document.body.classList.toggle("reverse-colors");
    } else if (message.action === "toggleCustomTheme") {
      document.body.classList.toggle("custom-theme");
    }
  });
  