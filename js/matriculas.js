const listaMatriculas = []

const loadMatriculas = async() => {
    try {
        listaMatriculas.length = 0
        const respuesta = await fetch(`http://localhost:3000/matriculas`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar las matriculas. Estado: ',respuesta.status);
         }

        const matriculas = await respuesta.json();
        listaMatriculas.push(...matriculas);

    } catch (error) {
        console.log("Error al cargar las matriculas", error.message)
    }
}

const guardarMatricula = async(nuevaMatricula) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/matriculas`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevaMatricula)
        })

        if (!respuesta.ok) {
            throw new Error('Error al guardar la matricula. Estado: ',respuesta.status);
        }

        const matriculaCreada = await respuesta.json();
        console.log("Matricula creada:", matriculaCreada)
    } catch (error) {
        console.error("Error al guardar la matricula",error.message);
    }
}

const mostrarFormularioMatricula = () => {
    seccionMatriculas.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Matrícula de Estudiantes</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    <div class="arriba-content-container">
                        <select id="selectEstudiante" required>
                            <option value="" disabled selected hidden>- Seleccione un estudiante -</option>
                            ${generarOptionsEstudiantes()}
                        </select>
                        <select id="selectAsignatura" required>
                            <option value="" disabled selected hidden>- Seleccione una asignatura -</option>
                            ${generarOptionsAsignaturas()}
                        </select>
                        <select id="selectPeriodo" required>
                            <option value="" disabled selected hidden>- Seleccione un período -</option>
                            ${generarOptionsPeriodos()}
                        </select>
                        <span></span>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnMatricular" onClick="crearMatricula()">Matricular</button>
                        <button id="btnListaMatricula" onClick="mostrarListaMatriculas()">Ver Listado</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const crearMatricula = async () => {
    try {
        const estudianteId = document.getElementById('selectEstudiante').value;
        const asignaturaId = document.getElementById('selectAsignatura').value;
        const periodoId = document.getElementById('selectPeriodo').value;

        // Validar campos
        if (!estudianteId || !asignaturaId || !periodoId) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        let precioMatricula = 0;
        for (let asignatura of listaAsignatura) {
            if (asignatura.id == asignaturaId) {
                for (let tarifa of listaTarifas) {
                    if (tarifa.periodo_id == periodoId && asignatura.programa_id == tarifa.programa_id) {
                        precioMatricula = tarifa.costo_credito * asignatura.creditos;
                    }
                }
            }
        }

        const nuevaMatricula = {
            id: listaMatriculas.length + 1,
            estudiante_id: estudianteId,
            asignatura_id: asignaturaId,
            periodo_id: periodoId,
            precio: precioMatricula
        };

        await guardarMatricula(nuevaMatricula);
        await loadMatriculas();

        // Limpiar campos después de crear la matrícula
        document.getElementById('selectEstudiante').value = "";
        document.getElementById('selectAsignatura').value = "";
        document.getElementById('selectPeriodo').value = "";

        alert("Matrícula creada con éxito");

        return nuevaMatricula;

    } catch (error) {
        console.error("Error al crear la matrícula", error.message);
    }
}


const mostrarListaMatriculas = async () => {
    await loadMatriculas();

    seccionMatriculas.style.display = 'none';
    seccionListaMatriculas.style.display = 'flex';
    seccionListaMatriculas.style.height = "100%";

    const ul = document.createElement('ul');

    for (const matricula of listaMatriculas) {
        const li = document.createElement('li');
        li.textContent = `id: ${matricula.id}, Estudiante: ${matricula.estudiante_id}, : Asignatura: ${matricula.asignatura_id}`;
        ul.appendChild(li);
    }

    // Eliminar el contenido anterior del contenedor
    seccionListaMatriculas.innerHTML = "";

    // Agregar la nueva lista al contenedor
    seccionListaMatriculas.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormularioMatricula);
    seccionListaMatriculas.appendChild(volverButton);
}


const volverFormularioMatricula = () => {
    seccionListaMatriculas.style.display = "none"
    seccionMatriculas.style.display = "flex"
}


const generarOptionsEstudiantes = () => {
    let options = '';
    listaAlumnos.forEach(alumno => {
        options += `<option value="${alumno.id}">${alumno.nombre} ${alumno.apellido}</option>`;
    });
    return options;
};

const generarOptionsAsignaturas = () => {
    let options = '';
    listaAsignatura.forEach(asignatura => {
        options += `<option value="${asignatura.id}">${asignatura.codigo}</option>`;
    });
    return options;
};

const generarOptionsPeriodos = () => {
    let options = '';
    listaPeriodos.forEach(periodo => {
        options += `<option value="${periodo.id}">${periodo.codigo}</option>`;
    });
    return options;
};

