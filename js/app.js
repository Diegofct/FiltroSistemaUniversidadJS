const btnInicio = document.getElementById('inicio')
const btnDpto = document.getElementById('departamentos')
const btnCursos = document.getElementById('cursos')
const btnRegistrar = document.getElementById('registrar')
const btnMatriculas = document.getElementById('matriculas')


const ocultarActiveBtn = () => {
    btnInicio.classList.remove("active")
    btnDpto.classList.remove("active")
    btnCursos.classList.remove("active")
    btnRegistrar.classList.remove("active")
    btnMatriculas.classList.remove("active")
}

const ocultarElementos = () => {
    seccionInicio.style.display = "none";
    seccionNosotros.style.display = "none";
    seccionContacto.style.display = "none";
    seccionDepartamento.style.display = "none";
    seccionCursos.style.display = "none";
    seccionRegistros.style.display = "none";
    seccionMatriculas.style.display = "none"
}


btnInicio.addEventListener('click', () => {
    ocultarActiveBtn();
    btnInicio.classList.add("active")
    ocultarElementos()
    seccionInicio.style.display = "grid"
    seccionNosotros.style.display = "flex"
    seccionContacto.style.display = "flex"
})

btnDpto.addEventListener('click', async() => {
    ocultarActiveBtn();
    ocultarElementos()
    seccionDepartamento.style.display = "block"
    btnDpto.classList.add("active")
    await loadDepartamentos()
    mostrarListadoDepartamentos()
})

btnCursos.addEventListener('click', async() => {
    ocultarActiveBtn();
    ocultarElementos()
    seccionCursos.style.display = "block"
    btnCursos.classList.add("active")
    await loadCursos()
})

btnRegistrar.addEventListener('click', () => {
    ocultarActiveBtn()
    btnRegistrar.classList.add('active')
    ocultarElementos()
    seccionRegistros.style.display = "block"
})

btnMatriculas.addEventListener('click', () => {
    ocultarActiveBtn()
    btnMatriculas.classList.add('active')
    ocultarElementos()
    seccionMatriculas.style.display = 'block'
})