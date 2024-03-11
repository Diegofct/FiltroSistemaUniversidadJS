const listaSalones = []

const loadSalones = async () => {
    try {
        listaSalones.length = 0
        const respuesta = await fetch(`http://localhost:3000/salones`)
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error('Error al cargar los salones. Estado:', respuesta.status)
        }

        const salones = await respuesta.json()
        listaSalones.push(...salones)
    } catch (error) {
        console.log("Error al cargar los salones", error.message)
    }
}