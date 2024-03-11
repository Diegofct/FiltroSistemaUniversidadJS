const listaPeriodos = []

const loadPeriodos = async () => {
    try {
        listaPeriodos.length = 0
        const respuesta = await fetch(`http://localhost:3000/periodos`)
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error('Error al cargar los periodos. Estado:', respuesta.status)
        }

        const periodos = await respuesta.json()
        listaPeriodos.push(...periodos)
    } catch (error) {
        console.log("Error al cargar los periodos", error.message)
    }
}