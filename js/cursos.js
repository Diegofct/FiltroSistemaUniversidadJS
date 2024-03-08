const listaCursos = []

const loadCursos = async () => {
    try {
        listaCursos.length = 0
        const respuesta = await fetch(`http://localhost:3000/cursos`)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}