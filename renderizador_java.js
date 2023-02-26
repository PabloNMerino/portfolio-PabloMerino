const objJava = [
    {
        titulo: "Dining Review App",
        imgUrl: "img/dinner.png",
        alt: "icono de dinning app",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Dining-App"
    },
    {
        titulo: "Almacen y productos",
        imgUrl: "img/almacen.png",
        alt: "icono de almacen y productos",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Almacen%20y%20productos%20-%20patron%20singleton%20y%20factory"
    },
    {
        titulo: "Banco, cliente y cuentas",
        imgUrl: "img/banco.png",
        alt: "icono de banco",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Banco%2C%20cliente%20y%20cuentas%20-%20herencia%20y%20polimorfismo"
    },
    {
        titulo: "Carrito de compras",
        imgUrl: "img/carrito-de-compras.png",
        alt: "carrito con compras",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Carrito%20de%20compras%20-%20patron%20state"
    },
    {
        titulo: "Cursos y programas",
        imgUrl: "img/aprender-en-linea.png",
        alt: "carreras",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Curso%20y%20programas%20-%20patron%20singleton%2C%20factory%20y%20composite"
    },
    {
        titulo: "Empleados y Afiliados",
        imgUrl: "img/employee.png",
        alt: "Empleados y afiliados",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Empleados%20y%20afiliados"
    },
    {
        titulo: "Diputados, Ministros y Presidente",
        imgUrl: "img/mayor.png",
        alt: "Diputados, Ministros y Presidente",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Diputados%2C%20ministros%20y%20presidente"
    },
    {
        titulo: "Control de Calidad de Productos",
        imgUrl: "img/quality-control.png",
        alt: "Cadena de produccion",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Control%20de%20Calidad"
    },
    {
        titulo: "Lista de Reproduccion",
        imgUrl: "img/playlist.png",
        alt: "Playlist",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Lista%20de%20Reproduccion"
    },
    {
        titulo: "Servicio de Turismo",
        imgUrl: "img/destino.png",
        alt: "Telefono y viajes",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Servicio%20de%20turismo"
    },
    {
        titulo: "Turno para Vacunarse",
        imgUrl: "img/vaccination.png",
        alt: "Mujer vacunandose",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Turno%20para%20Vacunacion"
    },
    {
        titulo: "Leon y Tigre (Log4j)",
        imgUrl: "img/lion.png",
        alt: "Leon",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Leon%20y%20tigre%20(Log4j)"
    },
    {
        titulo: "Drive Storage",
        imgUrl: "img/cloud-storage.png",
        alt: "nube y clientes",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Servicio%20Drive"
    },
    {
        titulo: "Juego robots",
        imgUrl: "img/robot.png",
        alt: "robot",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Juego%20robots%20-%20herencia%20y%20polimorfismo"
    },
    {
        titulo: "Personaje con habilidades y puntaje",
        imgUrl: "img/personaje.png",
        alt: "personaje",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Personaje%20con%20habilidades%20y%20puntaje%20-%20patron%20singleton%2C%20factory%20y%20composite"
    },
    {
        titulo: "Propiedades - Examen final DH",
        imgUrl: "img/justa.png",
        alt: "  Edificios",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Propiedades%20-%20Examen%20final%20DH%20-%20patron%20singleton%2C%20factory%20y%20composite"
    },
    {
        titulo: "Cajero Automatico",
        imgUrl: "img/efectivo.png",
        alt: "cajero automatico",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Cajero%20automatico%20Facade"
    },
    {
        titulo: "Calculador de Promedios (Log4j)",
        imgUrl: "img/average.png",
        alt: "Promedio",
        url: "https://github.com/PabloNMerino/JAVA/tree/main/Calculador%20de%20promedios%20(Log4j)"
    },
    {
        titulo: "Trenes y vagones",
        imgUrl: "img/entrenar.png",
        alt: "tren y vagon",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/Trenes%20y%20vagones%20-%20patron%20composite"
    },
    {
        titulo: "Contenedores y sus puertos",
        imgUrl: "img/barco-mercante.png",
        alt: "barco con contenedores",
        url: "https://github.com/PabloNMerino/Ejercicios-JAVA/tree/main/contenedores%20y%20sus%20origenes%20-%20ordenado%20y%20desordenado"
    }
]

const renderizarJava = arrJava => {
    const proyectos = document.querySelector(".proyJava");
    arrJava.forEach(element => {
        proyectos.innerHTML += `
        <a href="${element.url}" class="caja proyecto" target=blank>
            <p>${element.titulo}</p>
            <img src="${element.imgUrl}" alt="${element.alt}">
        </a>
        `
    });
}

renderizarJava (objJava)