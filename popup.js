document.getElementById("darkMode").addEventListener("click", () => {
    sendMessage("toggleDarkMode");
});

document.getElementById("highContrast").addEventListener("click", () => {
    sendMessage("toggleHighContrast");
});

document.getElementById("reverseColors").addEventListener("click", () => {
    sendMessage("toggleReverseColors");
});

document.getElementById("customTheme").addEventListener("click", () => {
    sendMessage("toggleCustomTheme");
});

document.getElementById("fontSelector").addEventListener("change", (event) => {
    sendMessage("changeFont", event.target.value);
});
document.getElementById("increaseTextSize").addEventListener("click", () => {
    sendMessage("adjustTextSize", "increase");
});

document.getElementById("decreaseTextSize").addEventListener("click", () => {
    sendMessage("adjustTextSize", "decrease");
});

function sendMessage(action, value = null) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0 || tabs[0].url.startsWith("chrome://")) {
            alert("⚠️ This extension does not work on Chrome system pages.");
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: applyStyle,
            args: [action, value]
        }).catch((error) => {
            console.error("Error applying style:", error);
            alert("⚠️ Cannot modify this page due to Chrome's security restrictions.");
        });
    });
}

function applyStyle(action, value) {
    switch (action) {
        case "toggleDarkMode":
            document.body.classList.toggle("dark-mode");
            break;
        case "toggleHighContrast":
            document.body.classList.toggle("high-contrast");
            break;
        case "toggleReverseColors":
            document.body.classList.toggle("reverse-colors");
            break;
        case "toggleCustomTheme":
            document.body.classList.toggle("custom-theme");
            break;
        case "changeFont":
            document.body.style.fontFamily = value;
            break;
        case "adjustTextSize":
            let body = document.body;
            let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue("font-size"));
            let newSize = value === "increase" ? currentSize * 1.1 : currentSize * 0.9;
            body.style.fontSize = `${newSize}px`;                break;
    }
}
