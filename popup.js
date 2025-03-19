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
function sendMessage(action) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0 || tabs[0].url.startsWith("chrome://")) {
            alert("⚠️ This extension does not work on Chrome system pages.");
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: applyStyle,
            args: [action]
        }).catch((error) => {
            console.error("Error applying style:", error);
            alert("⚠️ Cannot modify this page due to Chrome's security restrictions.");
        });
    });
}

function applyStyle(action) {
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
    }
}
