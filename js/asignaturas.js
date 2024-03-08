const listaAsignaturas = []

const loadAsignaturas = async () => {
    try {
        listaAsignaturas.length = 0
        const respuesta = await fetch(`http://localhost:3000/asignaturas`)
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error('Error al cargar las asignaturas. Estado:', respuesta.status)
        }

        const asignaturas = await respuesta.json()
        listaAsignaturas.push(...asignaturas)
    } catch (error) {
        console.log("Error al cargar las asignaturas", error.message)
    }
}