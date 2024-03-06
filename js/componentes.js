const main = document.getElementById('contenido-principal')
const botonesMenu = document.querySelectorAll(".boton-menu")
const seccionInicio = document.getElementById('seccion-inicio')
const seccionNosotros = document.getElementById('seccion-nosotros')
const seccionContacto = document.getElementById('seccion-contactame')
const departamentos = document.getElementById('departamentos')

const cargarSeccionInicio = () => {
    seccionInicio.innerHTML = `

        <div class="texto-inicio">
            <h1 class="titulo">Bienvenidos</h1>
            <h3 class="texto-h3">Universidad de los Sabios </h3>
            <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
        </div>
    
    `
}

const cargarSeccionNosotros = () => {
    seccionNosotros.innerHTML = `

        <div class="contenedor-nosotros">
            <h1 class="titulo">¿Quienes somos?</h1>
            <h3 class="texto-h3">Universidad de los Sabios </h3>
            <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
        </div>
    
    `
}

const cargarSeccionContactame = () => {
    seccionContacto.innerHTML = `

    <div class="contenedor-contacto">
        <h1 class="titulo">Contactanos</h1>
        <h3 class="texto-h3">Universidad de los Sabios </h3>
        <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
    </div>

    `
}


botonesMenu.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesMenu.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id === "inicio") {
            seccionInicio.style.display = "grid"
            seccionNosotros.style.display = "flex"
            seccionContacto.style.display = "flex"

        } else if (e.currentTarget.id === "departamentos") {
            seccionInicio.style.display = 'none'
            seccionNosotros.style.display = 'none'
            seccionContacto.style.display = 'none'
        }

    })
})