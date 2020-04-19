var shiftWindow = function() { scrollBy(0, -95) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);