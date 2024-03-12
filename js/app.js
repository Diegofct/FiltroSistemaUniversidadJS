document.addEventListener("DOMContentLoaded", async () => {
    await loadAlumnos();
    await loadProfesores();
    await loadDepartamentos();
    await loadCursos();
    await loadAsignaturas();
    await loadProgramas();
    await loadPeriodos();
    await loadSalones();
    await loadTarifas();
    await loadMatriculas();
})

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
    seccionListadoAlumnos.style.display = "none"
    seccionListadoProfesores.style.display = "none"
    seccionMatriculas.style.display = "none"
    seccionListaMatriculas.style.display = "none"
    seccionReportes.style.display = "none"
    seccionProgramas.style.display = "none"
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
    seccionFormAlumnos.style.height = "60%"
    seccionFormProfesores.style.display = "flex"
    seccionFormProfesores.style.height = "60%"
    seccionFormAsignatura.style.display = "flex"
    seccionFormAsignatura.style.height = "60%"
    mostrarFormularioAlumno()
    mostrarFormularioProfesor()
    mostrarFormularioAsignatura()
})

btnMatriculas.addEventListener('click', () => {
    ocultarActiveBtn()
    btnMatriculas.classList.add('active')
    ocultarElementos()
    mostrarFormularioMatricula()
    seccionMatriculas.style.display = 'flex'
    seccionMatriculas.style.height = "100%"
})

function reportes1(){
    
    let valorTotalPeriodo1= 0;
    let valorTotalPeriodo2= 0;
    
    console.log(listaMatriculas)
    for(matricula of listaMatriculas){
        if(matricula["periodo_id"] == 1){
            valorTotalPeriodo1 += matricula["precio"];
        }
        else{
            valorTotalPeriodo2 += matricula["precio"]
        }
    }

    console.log(valorTotalPeriodo1,valorTotalPeriodo2)
}