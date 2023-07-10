const proyectosReact = [
    {
        titulo: "DentaLink proyecto Integrador",
        imgUrl: "img/dentista_react.png",
        url: "https://github.com/PabloNMerino/Proyecto-Integrador-FE3",
        descripcion: "Api de dentistas"
    }
]

const renderizarProyectosReact = arrProyectos => {
    let proyectos = document.querySelector(".proy-react");
    arrProyectos.forEach(element => {
        proyectos.innerHTML += `
        <a href="${element.url}" class="caja proyecto" target=blank>
            <p>${element.titulo}</p>
            <img src="${element.imgUrl}" alt="${element.descripcion}">
        </a>
        `
    });
}

renderizarProyectosReact(proyectosReact);