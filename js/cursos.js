const listaCursos = []

const loadCursos = async () => {
    try {
        listaCursos.length = 0
        const respuesta = await fetch(`http://localhost:3000/cursos`)
        console.log(respuesta)
        if(!respuesta.ok){
            throw new Error('Error al cargar los cursos. Estado: ',respuesta.status);
         }
         const cursos=await respuesta.json();
         listaCursos.push(...cursos);
 
    } catch (error) {
        console.log("Error al cargar los cursos", error.message)
    }
}

const mostrarCursos = async() => {
    await loadCursos()
    seccionCursos.innerHTML = ""
    listaCursos.forEach(curso =>{
        seccionCursos.innerHTML += `
            <div class="card">
                <h5 class="card-header">${curso.nombre}</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    })
}

