const listaCursos = []

const loadCursos = async () => {
    try {
        listaCursos.length = 0
        const respuesta = await fetch(`http://localhost:3000/cursos`)
        console.log(respuesta)

        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            let cursos = ''
            datos.status.forEach(curso => {
                cursos += `
                    <div>
                        <ul>
                            <li>${curso.id}</li>
                            <li>${curso.nombre}</li>
                            <li>${curso.codigo}</li>
                            <li>${curso.guia_catedra}</li>
                        </ul
                    </div>                
                `
            });
            
            seccionCursos.innerHTML = cursos
        }

        
    } catch (error) {
        console.log(error)
    }
}