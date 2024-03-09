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
    seccionInicio.style.display = "none"
    seccionNosotros.style.display = "none"
    seccionContacto.style.display = "none"
    seccionDepartamento.style.display = "none"
    seccionCursos.style.display = "none"
    seccionFormAlumnos.style.display = "none"
    seccionFormProfesores.style.display = "none"
    seccionFormAsignatura.style.display = "none"
    
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
    seccionDepartamento.style.display = "flex"
    btnDpto.classList.add("active")
    await loadDepartamentos()
    mostrarListadoDepartamentos()
})

btnCursos.addEventListener('click', async() => {
    ocultarActiveBtn();
    ocultarElementos()
    seccionCursos.style.display = "grid"
    btnCursos.classList.add("active")
    await loadCursos()
    mostrarCursos()
})

btnRegistrar.addEventListener('click', async () => {
    ocultarActiveBtn()
    btnRegistrar.classList.add('active')
    ocultarElementos()
    seccionFormAlumnos.style.display = "flex"
    seccionFormAlumnos.style.height = "100%"
    seccionFormProfesores.style.display = "flex"
    seccionFormProfesores.style.height = "100%"
    seccionFormAsignatura.style.display = "flex"
    seccionFormAsignatura.style.height = "100%"
    mostrarFormularioAlumno()
    mostrarFormularioProfesor()
    mostrarFormularioAsignatura()
})

btnMatriculas.addEventListener('click', () => {
    ocultarActiveBtn()
    btnMatriculas.classList.add('active')
    ocultarElementos()
    seccionMatriculas.style.display = 'block'
})