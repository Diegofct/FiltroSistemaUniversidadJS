const listaTarifas = []

const loadTarifas = async () => {
    try {
        listaTarifas.length = 0
        const respuesta = await fetch(`http://localhost:3000/tarifas`)
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error('Error al cargar las tarifas. Estado:', respuesta.status)
        }

        const tarifas = await respuesta.json()
        listaTarifas.push(...tarifas)
    } catch (error) {
        console.log("Error al cargar las tarifas", error.message)
    }
}