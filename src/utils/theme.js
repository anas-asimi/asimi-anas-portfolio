// get system preferences theme
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
}
// get last selected theme or return system preferences
export function getTheme() {
    const theme = localStorage.getItem('theme') || getSystemTheme()
    return theme
}