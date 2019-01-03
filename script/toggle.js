function toggle(e) {
    let element = document.getElementById(e);
    if (getComputedStyle(element).display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}