//Datos para filtrar//

//Primer filtro: Nuestros autos//

const dwemiA = [

//Nuestros autos//

{id: 1, name:"Calidad", image: "img/Captura de pantalla 2026-10-28 075438.png", genero: "Nuestros-autos", description: "Nuestros autos son de la más alta calidad del mercado."},
{id: 2, name:" Confiables", image: "img/Gemini_Generated_Image_fmszp9fmszp9fmsz.jpg", genero: "Nuestros-autos", description: "Nuestros autos son los más confiables y seguros del mercado."},
{id: 3, name:"Trato único", image: "img/Captura de pantalla 2026-10-28 082451.png", genero: "Nuestros-autos", description: "Dejate consentir con nuestro trato único y seguro."},
{id: 4, name:"Precios justos", image: "img/Captura de pantalla 2026-10-28 082810.png", genero: "Nuestros-autos", description: "Nosotros tenemos los mejores precios y las mejores ofertas."},

//vende tu auto//

{id: 5, name:"Contratos claros", image: "img/Captura de pantalla 2026-10-29 072813.png", genero: "Vende-tu-auto", description: "Compramos tu auto sin letras chiquitas ni trucos."},
{id: 6, name:"Servicio de pickup sin molestias", image: "img/Captura de pantalla 2026-10-29 073305.png", genero: "Vende-tu-auto", description: "Nostros recogemos tu auto para que no tengas que esforzarte por traerlo."},
{id: 7, name:"Valuación justa", image: "img/Captura de pantalla 2026-10-29 073641.png", genero: "Vende-tu-auto", description: "Te damos lo que vale tu carro realmente y no lo que queremos."},
{id: 7, name:"Asesoría", image: "img/Captura de pantalla 2026-10-29 073845.png", genero: "Vende-tu-auto", description: "Te ayudamos ayudamos a saber cuál es el valor de tu auto."},
]

// Obtener los contenedores y botones del DOM
const dwemiAContainer = document.getElementById("Autos-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    const dwemiAToRender = genero === "all"
        ? dwemiA
        : dwemiA.filter(dw => dw.genero === genero);

    // Limpia ambos contenedores porque el HTML actual repite el mismo id.
    document.querySelectorAll("#Autos-container").forEach(container => {
        container.innerHTML = "";
    });

    if (dwemiAToRender.length === 0) {
        dwemiAContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas
    dwemiAToRender.forEach(dw => {
        const cardHtml = `
            <figure class="Nuestros-autos-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt=" Aurea automobiles vende, nombre: ${dw.name}">
                <figcaption>
                ${dw.name}
            </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;
        dwemiAContainer.insertAdjacentHTML("beforeend", cardHtml);
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
}



 

