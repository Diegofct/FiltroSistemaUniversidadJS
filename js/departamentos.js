const listaDepartamentos = []

const loadDepartamentos = async () => {

    try {
        listaDepartamentos.length = 0
        const respuesta = await fetch(`http://localhost:3000/departamentos`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar los departamentos. Estado: ',respuesta.status);
         }

        const departamentos = await respuesta.json();
        listaDepartamentos.push(...departamentos);
        

    } catch (error) {
        console.log("Error al cargar los departamentos", error.message)
    }
}


const mostrarListadoDepartamentos = async () => {
    await loadDepartamentos();
    let html = `
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-inner">
    `;

    listaDepartamentos.forEach((departamento, index) => {
        const activeClass = index === 0 ? 'active' : ''; // Añade la clase 'active' al primer elemento
        html += `
            <div class="carousel-item ${activeClass}">
                <img src="img/medicina.jpg" class="d-block w-100" alt="${departamento.nombre}">
                <div id="slide-${departamento.nombre.replaceAll(" ","-")}" class="carousel-caption d-none d-md-block">
                    <h5>${departamento.nombre}</h5>
                    <button class="btnSlide" id="btn-${departamento.nombre.replaceAll(" ","")}">Ver detalles</button>
                </div>
            </div>
        `;
    });

    // Agrega controles y navegación al carrusel
    html += `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

    seccionDepartamento.innerHTML = html;
};