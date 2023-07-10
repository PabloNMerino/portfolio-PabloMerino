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
        imgUrl: "img/bootstrap.png",
        alt: "Bootstrap",
        nombreDeTecnologia: "Bootstrap"  
    },
    {
        imgUrl: "img/sass.png",
        alt: "sass",
        nombreDeTecnologia: "SASS"  
    },
    {
        imgUrl: "img/figma.png",
        alt: "figma",
        nombreDeTecnologia: "Figma"  
    },
    {
        imgUrl: "img/js.png",
        alt: "js",
        nombreDeTecnologia: "Javascript"
    },
    {
        imgUrl: "img/react.png",
        alt: "React",
        nombreDeTecnologia: "React"  
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
        imgUrl: "img/hibernate.png",
        alt: "Hibernate",
        nombreDeTecnologia: "Hibernate"
    },
    {
        imgUrl: "img/mysql-official.svg",
        alt: "mysql",
        nombreDeTecnologia: "mySQL"
    },
    {
        imgUrl: "img/mongodb.png",
        alt: "mongoDB",
        nombreDeTecnologia: "MongoDB"
    },
    {
        imgUrl: "img/testing.png",
        alt: "testing",
        nombreDeTecnologia: "Testing"
    },
    {
        imgUrl: "img/interfaz-de-usuario.png",
        alt: "ux/ui",
        nombreDeTecnologia: "UX/UI"
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