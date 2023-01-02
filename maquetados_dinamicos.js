const proyectosJs = [
    {
        titulo: "Portfolio",
        imgUrl: "img/online-resume.png",
        url: "https://github.com/PabloNMerino/portfolio-PabloMerino",
        descripcion: "logo portfolio Pablo Merino"
    },
    {
        titulo: "To Do App",
        imgUrl: "img/list.png",
        url: "https://github.com/PabloNMerino/Front-end-2---JS/tree/main/To%20Do%20app",
        descripcion: "app lista de tareas"
    },
    {
        titulo: "SpotiFront",
        imgUrl: "img/music.png",
        url: "https://github.com/PabloNMerino/Front-end-2---JS/tree/main/Spotifront",
        descripcion: "logo spotifront"
    },
    {
        titulo: "Formulario Registro",
        imgUrl: "img/sign-in.png",
        url: "https://github.com/PabloNMerino/Front-end-2---JS/tree/main/Form%20Registro",
        descripcion: "logo registro"
    },
    {
        titulo: "Formulario Registro Hogwarts",
        imgUrl: "img/spellbook.png",
        url: "https://github.com/PabloNMerino/Front-end-2---JS/tree/main/Formulario%20Inscripcion%20a%20Hogwarts",
        descripcion: "logo formulario registro"
    }
]

const renderizar = objJs => {
    const proyectos = document.querySelector(".proy-js");
    objJs.forEach(element => {
        proyectos.innerHTML += `
        <a href="${element.url}" class="caja proyecto" target=blank>
            <p>${element.titulo}</p>
            <img src="${element.imgUrl}" alt="${element.descripcion}">
        </a>
        `
    });
}

renderizar (proyectosJs)
