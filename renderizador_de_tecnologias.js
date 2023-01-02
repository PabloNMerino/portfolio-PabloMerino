const tarjetasTecnologias = [
    {
        imgUrl: "img/html-5.png",
        alt: "html 5",
        nombreDeTecnologia: "HTML"
    },
    {
        imgUrl: "img/css-3.png",
        alt: "css 3",
        nombreDeTecnologia: "CSS"  
    },
    {
        imgUrl: "img/sass.png",
        alt: "sass",
        nombreDeTecnologia: "SASS"  
    },
    {
        imgUrl: "img/js.png",
        alt: "js",
        nombreDeTecnologia: "Javascript"
    },
    {
        imgUrl: "img/java.png",
        alt: "java",
        nombreDeTecnologia: "Java"
    },
    {
        imgUrl: "img/spring-boot-logo.png",
        alt: "spring boot",
        nombreDeTecnologia: "Spring boot"
    },
    {
        imgUrl: "img/mysql-official.svg",
        alt: "mysql",
        nombreDeTecnologia: "mySQL"
    },
    {
        imgUrl: "img/testing.png",
        alt: "testing",
        nombreDeTecnologia: "Testing"
    },
    {
        imgUrl: "img/agil.png",
        alt: "metodologias agiles",
        nombreDeTecnologia: "Metodologias Agiles"
    }
]

const renderizadorDeTecnologias = tarjetasTec => {

    let tarjeta = document.querySelector (".tecnologias")

    tarjetasTec.forEach(element => {
        tarjeta.innerHTML += `
        <div class="caja">
            <p>${element.nombreDeTecnologia}</p>
            <img src="${element.imgUrl}" alt="${element.alt}">
        </div>`
    });
} 

renderizadorDeTecnologias (tarjetasTecnologias);