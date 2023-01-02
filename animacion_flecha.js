const botonFlecha = document.querySelector(".up")

window.addEventListener("scroll", () => {
    botonFlecha.classList.add("boton-visible");
    botonFlecha.classList.remove("boton-invisible");
    setTimeout(() => {
        botonFlecha.classList.add("boton-invisible");
        botonFlecha.classList.remove("boton-visible")

    }, 4000);
})