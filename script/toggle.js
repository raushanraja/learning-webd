function toggle(e) {
    if (getComputedStyle(document.getElementById('t')).display === "none") {
        e.style.display = "block"
    } else {
        e.style.display = "none"
    }
}