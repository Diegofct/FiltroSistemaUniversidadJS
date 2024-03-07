const main = document.getElementById('contenido-principal')
const seccionInicio = document.getElementById('seccion-inicio')
const seccionNosotros = document.getElementById('seccion-nosotros')
const seccionContacto = document.getElementById('seccion-contactame')
const seccionDepartamento = document.getElementById('seccion-departamentos')
const seccionCursos = document.getElementById('seccion-cursos')
const seccionRegistros = document.getElementById('seccion-registrar')
const seccionMatriculas = document.getElementById('seccion-matriculas')

const cargarSeccionInicio = () => {
    seccionInicio.innerHTML = `

        <div class="texto-inicio">
            <h1 class="titulo">Bienvenidos</h1>
            <h3 class="texto-h3">Universidad de los Sabios </h3>
            <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
        </div>
    
    `
    main.appendChild(seccionInicio)
}

cargarSeccionInicio()

const cargarSeccionNosotros = () => {
    seccionNosotros.innerHTML = `

        <div class="contenedor-nosotros">
            <h1 class="titulo">¿Quienes somos?</h1>
            <h3 class="texto-h3">Universidad de los Sabios </h3>
            <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
        </div>
    
    `
    main.appendChild(seccionNosotros)
}

cargarSeccionNosotros()

const cargarSeccionContactame = () => {
    seccionContacto.innerHTML = `

    <div class="contenedor-contacto">
        <h1 class="titulo">Contactanos</h1>
        <h3 class="texto-h3">Universidad de los Sabios </h3>
        <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
    </div>

    `
    main.appendChild(seccionContacto)
}

cargarSeccionContactame()




