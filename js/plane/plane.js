const plane = document.getElementById("plane");

plane.addEventListener("click", () => {
    plane.classList.add("fly");

    setTimeout(() => {
        plane.classList.remove("fly");
    }, 1500);
});