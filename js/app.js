const btnInicio = document.getElementById('inicio')
const btnDpto = document.getElementById('departamentos')
const btnCursos = document.getElementById('cursos')

const ocultarElementos = () => {
    seccionInicio.style.display = "none"
    seccionNosotros.style.display = "none"
    seccionContacto.style.display = "none"
    seccionDepartamento.style.display = "none"
    seccionCursos.style.display = "none"
    seccionRegistros.style.display = "none"
    seccionMatriculas.style.display = "none"
}

// const recorrerBotonesActive = () => {
//     const botonesMenu = document.querySelectorAll(".menu-button")
//     botonesMenu.forEach(boton => {
//         boton.addEventListener("click", (e) => {
//             botonesMenu.forEach(boton => boton.classList.remove("active"))
//             e.currentTarget.classList.add("active");
//         })
//     }) 
// }

btnInicio.addEventListener('click', () => {
    ocultarElementos()
    seccionInicio.style.display = "grid"
    seccionNosotros.style.display = "flex"
    seccionContacto.style.display = "flex"
})

btnDpto.addEventListener('click', async() => {
    ocultarElementos()
    seccionDepartamento.style.display = 'block'
    btnInicio.classList.remove("active")
    btnDpto.classList.add("active")
    await loadDepartamentos()
    mostrarListadoDepartamentos()
})

btnCursos.addEventListener('click', async() => {
    ocultarElementos()
    seccionCursos.style.display = 'block'
    // btnInicio.classList.remove("active")
    btnDpto.classList.remove("active")
    btnCursos.classList.add("active")
    await loadCursos()
})





//         if (e.currentTarget.id === "cursos") {
//             seccionInicio.style.display = 'none'
//             seccionNosotros.style.display = 'none'
//             seccionContacto.style.display = 'none'
            
//         } else if (e.currentTarget.id === "registrar") {
//             seccionInicio.style.display = 'none'
//             seccionNosotros.style.display = 'none'
//             seccionContacto.style.display = 'none'

//         } else if (e.currentTarget.id === "matriculas") {
//             seccionInicio.style.display = 'none'
//             seccionNosotros.style.display = 'none'
//             seccionContacto.style.display = 'none'  
//         }

//     })
// }) 
