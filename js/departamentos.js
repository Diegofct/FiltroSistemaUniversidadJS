const seccionDepartamentos = document.getElementById('seccion-departamentos')

const listaDepartamentos = []

const loadDepartamentos = async () => {

    try {
        listaDepartamentos.length = 0
        const respuesta = await fetch(`http://localhost:3000/departamentos`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar los departamentos. Estado: ',respuesta.status);
         }

        const departamentos = await respuesta.json();
        listaDepartamentos.push(...departamentos);

    } catch (error) {
        console.log("Error al cargar los departamentos", error.message)
    }
}

const mostrarListadoDepartamentos = async () => {
    await loadDepartamentos()

    const ul = document.createElement('ul')
    listaDepartamentos.forEach(departamento => {
        const li = document.createElement('li')
        li.textContent = `id: ${departamento.id}, Nombre: ${departamento.nombre}`
        ul.appendChild(li)
    })
    seccionDepartamentos.appendChild(ul)
}
