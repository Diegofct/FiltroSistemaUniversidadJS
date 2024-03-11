const listaProgramas = []

const loadProgramas = async () => {

    try {
        listaProgramas.length = 0
        const respuesta = await fetch(`http://localhost:3000/programas`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar los programas. Estado: ',respuesta.status);
         }

        const programas = await respuesta.json();
        listaProgramas.push(...programas);
        

    } catch (error) {
        console.log("Error al cargar los programas", error.message)
    }
}
