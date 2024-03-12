const listaAlumnos =  []
const listaProfesores = []
const listaAsignatura = []

const loadAlumnos = async() => {
    try {
        listaAlumnos.length = 0
        const respuesta = await fetch(`http://localhost:3000/alumnos`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar los alumnos. Estado: ',respuesta.status);
         }

        const registros = await respuesta.json();
        listaAlumnos.push(...registros);
        console.log(listaAlumnos)

    } catch (error) {
        console.log("Error al cargar los alumnos", error.message)
    }
}

const guardarAlumnos = async(nuevoAlumno) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/alumnos`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoAlumno)
        })

        if (!respuesta.ok) {
            throw new Error('Error al guardar el alumno. Estado: ',respuesta.status);
        }

        const alumnoCreado = await respuesta.json();
        console.log("Alumno creado:", alumnoCreado)
    } catch (error) {
        console.error("Error al guardar alumnos",error.message);
    }
}

const mostrarFormularioAlumno = () => {
    seccionFormAlumnos.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Registrar Alumnos</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    <div class="arriba-content-container">
                        <input id="inputNombreAlumno" type="text" placeholder="Nombres del alumno" required>
                        <input id="inputApellidoAlumno" type="text" placeholder="Apellidos del alumno" required>
                        <select id="tipoDocumentoAlumno" required>
                            <option value="" disabled selected hidden>- Seleccione el tipo de documento -</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        </select>
                        <input type="text" id="numeroDocumentoAlumno" placeholder="Número documento" required>
                        <input type="text" id="ciudadResidencia" placeholder="Ciudad de Residencia" required>
                        <input type="text" id="direccion" placeholder="Dirección de residencia" required>
                        <input type="tel" id="telefono" placeholder="Teléfono" required>
                        <input type="date" id="fechaNacimiento" required>
                        <select id="sexo" name="sexo" required>
                            <option value="" disabled selected hidden>- Seleccione el género -</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnRegistrar" onClick="crearAlumno()">Registrar</button>
                        <button id="btnVerListado" onClick="mostrarListaAlumnos()">Ver Listado</button>
                    </div>
                </div>
            </div>
        </div>
    `

}

const crearAlumno = async() => {

    const nombreAlumno = document.getElementById('inputNombreAlumno').value
    const apellidoAlumno = document.getElementById('inputApellidoAlumno').value
    const selectDocumento = document.getElementById('tipoDocumentoAlumno').value
    const numeroDocumentoAlumno = document.getElementById('numeroDocumentoAlumno').value
    const ciudadResidencia = document.getElementById('ciudadResidencia').value
    const direccion = document.getElementById('direccion').value
    const telefono = document.getElementById('telefono').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const genero = document.getElementById('sexo').value

    const nuevoAlumno = {
        id: listaAlumnos.length+1,
        nombre: nombreAlumno,
        apellido: apellidoAlumno,
        tipo_documento: selectDocumento,
        numero_documento: numeroDocumentoAlumno,
        ciudad_residencia: ciudadResidencia,
        direccion: direccion,
        telefono: telefono,
        fecha_nacimiento: fechaNacimiento,
        sexo: genero
    }
    
    await guardarAlumnos(nuevoAlumno)
    await loadAlumnos()

    nombreAlumno.value = ''
    apellidoAlumno.value = ''
    selectDocumento.value = ''
    numeroDocumentoAlumno.value = ''
    ciudadResidencia.value = ''
    direccion.value = ''
    telefono.value = ''
    fechaNacimiento.value = ''
    genero.value = ''

    alert("Alumno creado con exito")

    return nuevoAlumno
}

const mostrarListaAlumnos = async() => {

    await loadAlumnos()
    
    seccionFormAlumnos.style.display = 'none'
    seccionListadoAlumnos.style.display = 'flex'
    seccionListadoAlumnos.style.height = "60%"

    const ul = document.createElement('ul')

    for(const alumno of listaAlumnos) {
        const li=document.createElement('li')
        li.textContent = `id: ${alumno.id}, Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}`
        ul.appendChild(li)
    }

    seccionListadoAlumnos.innerHTML=""
    seccionListadoAlumnos.appendChild(ul)

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario);
    seccionListadoAlumnos.appendChild(volverButton);

}

const volverFormulario = () => {
    seccionListadoAlumnos.style.display = "none"
    seccionFormAlumnos.style.display = "flex"
}

// ---------------------------------------- SECCION DE REGISTRO PROFESORES ----------------------------------------

const loadProfesores = async() => {
    try {
        listaProfesores.length = 0
        const respuesta = await fetch(`http://localhost:3000/profesores`)
        console.log(respuesta)

        if(!respuesta.ok){
            throw new Error('Error al cargar los profesores. Estado: ',respuesta.status);
         }

        const docente = await respuesta.json();
        listaProfesores.push(...docente);

    } catch (error) {
        console.log("Error al cargar los profesores", error.message)
    }
}

const guardarProfesores = async(nuevoProfesor) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/profesores`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoProfesor)
        })

        if (!respuesta.ok) {
            throw new Error('Error al guardar el profesor. Estado: ',respuesta.status);
        }

        const docenteCreado = await respuesta.json();
        console.log("Profesor creado:", docenteCreado)
    } catch (error) {
        console.error("Error al guardar al profesor",error.message);
    }
}

const mostrarFormularioProfesor = () => {
    seccionFormProfesores.innerHTML = `
    
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Registrar Profesores</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    <div class="arriba-content-container">
                        <select id="tipoDocumentoProfesor" required>
                            <option value="" disabled selected hidden>- Seleccione el tipo de documento -</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        </select>
                        <input type="text" id="numeroDocumentoProfesor" placeholder="Número documento" required>
                        <input id="inputNombreProfesor" type="text" placeholder="Nombres del profesor" required>
                        <input id="inputApellidoProfesor" type="text" placeholder="Apellidos del profesor" required>
                        <select id="departamentoProfesor" required>
                            <option value="" disabled selected hidden>- Seleccione departamento profesor-</option>
                            ${generarOptionDepartamentos()}
                        </select>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnRegistrar" onClick="crearProfesor()">Registrar</button>
                        <button id="btnVerListado" onClick="mostrarListaProfesores()">Ver Listado</button>
                    </div>
                </div>
            </div>
        </div>

    `
}

const generarOptionDepartamentos = () => {
    let options = ''
    listaDepartamentos.forEach(departamento => {
        options += `<option value="${departamento.id}">${departamento.nombre}</option>`;
    });
    return options
}

const crearProfesor = async() => {

    const tipoDocumentoProfesor = document.getElementById('tipoDocumentoProfesor').value
    const numeroDocumentoProfesor = document.getElementById('numeroDocumentoProfesor').value
    const nombreProfesor = document.getElementById('inputNombreProfesor').value
    const apellidoProfesor = document.getElementById('inputApellidoProfesor').value
    const departamentoProfesor = document.getElementById('departamentoProfesor').value

    const nuevoProfesor = {
        id: listaProfesores.length+1,
        tipo_documento: tipoDocumentoProfesor,
        numero_documento: numeroDocumentoProfesor,
        nombre: nombreProfesor,
        apellido: apellidoProfesor,
        departamento_id: departamentoProfesor
    }

    await guardarProfesores(nuevoProfesor)
    await loadProfesores()

    tipoDocumentoProfesor.value = ""
    numeroDocumentoProfesor.value = ""
    nombreProfesor.value = ""
    apellidoProfesor.value = ""
    departamentoProfesor.value = ""


    alert("Docente creado con exito")

    return nuevoProfesor

}

const mostrarListaProfesores = async () => {
    await loadProfesores();

    seccionFormProfesores.style.display = 'none';
    seccionListadoProfesores.style.display = 'flex';
    seccionListadoProfesores.style.height = "60%";

    const ul = document.createElement('ul');

    for (const profesor of listaProfesores) {
        const li = document.createElement('li');
        li.textContent = `id: ${profesor.id}, Nombre: ${profesor.nombre}, Apellido: ${profesor.apellido}`;
        ul.appendChild(li);
    }

    // Eliminar el contenido anterior del contenedor
    seccionListadoProfesores.innerHTML = "";

    // Agregar la nueva lista al contenedor
    seccionListadoProfesores.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormularioProfesores);
    seccionListadoProfesores.appendChild(volverButton);
}


const volverFormularioProfesores = () => {
    seccionListadoProfesores.style.display = "none"
    seccionFormProfesores.style.display = "flex"
}

// ---------------------------------------- SECCION DE REGISTRO ASIGNATURAS ----------------------------------------
const loadAsignaturas = async () => {
    try {
        listaAsignatura.length = 0
        const respuesta = await fetch(`http://localhost:3000/asignaturas`)
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error('Error al cargar las asignaturas. Estado:', respuesta.status)
        }

        const asignaturas = await respuesta.json()
        listaAsignatura.push(...asignaturas)
    } catch (error) {
        console.log("Error al cargar las asignaturas", error.message)
    }
}

const guardarAsignaturas = async(nuevaAsignatura) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/asignaturas`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevaAsignatura)
        })

        if (!respuesta.ok) {
            throw new Error('Error al guardar la asignatura. Estado: ',respuesta.status);
        }

        const asignaturaCreada = await respuesta.json();
        console.log("Asignatura creada:", asignaturaCreada)
    } catch (error) {
        console.error("Error al guardar la asignatura",error.message);
    }
}

const mostrarFormularioAsignatura = () => {
    seccionFormAsignatura.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Registrar Asignatura</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    <div class="arriba-content-container">
                        <select id="selectCursoId" required>
                            <option value="" disabled selected hidden>- Seleccione un curso -</option>
                            ${generarOptionsCursos()}
                        </select>
                        <select id="selectPeriodoId" required>
                            <option value="" disabled selected hidden>- Seleccione el periodo -</option>
                            ${generarOptionPeriodos()}
                        </select>
                        <input id="inputCreditos" type="number" placeholder="Créditos" required>
                        <select id="selectProfesorId" required>
                            <option value="" disabled selected hidden>- Seleccione un profesor -</option>
                            ${generarOptionsProfesores()}
                        </select>
                        <input id="inputCuposDisponibles" type="number" placeholder="Cupos disponibles" value="20" readonly>
                        <select id="selectProgramas" required>
                            <option value="" disabled selected hidden>- Seleccione el programa -</option>
                            ${generarOptionProgramas()}
                        </select>
                        <select id="selectDia" required>
                            <option value="" disabled selected hidden>- Seleccione un día -</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miércoles">Miércoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                        </select>
                        <label>Elige la hora</label>
                        <input id="inputHoraInicio" type="time" placeholder="Hora de inicio" required>
                        <input id="inputHoraFin" type="time" placeholder="Hora de fin" required>
                        <select id="selectSalonId" required>
                            <option value="" disabled selected hidden>- Seleccione un salón -</option>
                            ${generarOptionsSalones()}
                        </select>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnRegistrarAsignatura" onClick="crearAsignatura()">Registrar Asignatura</button>
                        <button id="btnVerListado" onClick="mostrarListaAsignaturas()">Ver Listado</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

const crearAsignatura = async () => {
    try {
        const cursoId = document.getElementById('selectCursoId').value;
        const selectPeriodo = document.getElementById('selectPeriodoId').value;
        const creditos = document.getElementById('inputCreditos').value;
        const profesorId = document.getElementById('selectProfesorId').value;
        const cuposDisponibles = document.getElementById('inputCuposDisponibles').value;
        const programaId = document.getElementById('selectProgramas').value;
        const dia = document.getElementById('selectDia').value;
        const horaInicio = document.getElementById('inputHoraInicio').value;
        const horaFin = document.getElementById('inputHoraFin').value;
        const salonId = document.getElementById('selectSalonId').value;
        let codigoAsignatura = "";
        for(let curso of listaCursos){
            if(curso.id == cursoId){//curso.codigo
                codigoAsignatura = curso.codigo + "-" + selectPeriodo
            }
        }

        const nuevaAsignatura = {
            id: listaAsignatura.length + 1,
            curso_id: cursoId,
            codigo: codigoAsignatura,
            creditos: creditos,
            profesor_id: profesorId,
            cupos_disponibles: cuposDisponibles,
            programa_id: programaId,
            horario_clases: [
                {
                    dia: dia,
                    hora_inicio: horaInicio,
                    hora_fin: horaFin,
                    salon_id: salonId
                }
            ]
        };

        await guardarAsignaturas(nuevaAsignatura);
        await loadAsignaturas();

        limpiarFormularioAsignatura();

        alert("Asignatura creada con éxito");

        return nuevaAsignatura;

    } catch (error) {
        console.error("Error al crear la asignatura", error.message);
    }
}


const limpiarFormularioAsignatura = () => {
    document.getElementById('inputCreditos').value = '';
    document.getElementById('selectCursoId').value = '';
    document.getElementById('inputCodigo').value = '';
    document.getElementById('selectProfesorId').value = '';
    
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    for (let i = 0; i < dias.length; i++) {
        const dia = dias[i];
        document.getElementById(`horaInicio${dia}`).value = '';
        document.getElementById(`horaFin${dia}`).value = '';
        document.getElementById(`selectSalon${dia}`).value = '';
    }
}


const mostrarListaAsignaturas = async () => {
    await loadAsignaturas();

    seccionFormAsignatura.style.display = 'none';
    seccionListaAsignaturas.style.display = 'flex';
    seccionListaAsignaturas.style.height = "60%";

    const ul = document.createElement('ul');

    for (const asignatura of listaAsignatura) {
        const li = document.createElement('li');
        li.textContent = `id: ${asignatura.id}, Nombre: ${asignatura.codigo}`;
        ul.appendChild(li);
    }

    // Eliminar el contenido anterior del contenedor
    seccionListaAsignaturas.innerHTML = "";

    // Agregar la nueva lista al contenedor
    seccionListaAsignaturas.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormularioAsignaturas);
    seccionListaAsignaturas.appendChild(volverButton);
}


const volverFormularioAsignaturas = () => {
    seccionListaAsignaturas.style.display = "none"
    seccionFormAsignatura.style.display = "flex"
}

const generarOptionsCursos = () => {
    let options = '';
    listaCursos.forEach(curso => {
        options += `<option value="${curso.id}">${curso.nombre}</option>`;
    });
    return options;
}

const generarOptionsProfesores = () => {
    let options = '';
    listaProfesores.forEach(profesor => {
        options += `<option value="${profesor.id}">${profesor.nombre} ${profesor.apellido}</option>`;
    });
    return options;
}

const generarOptionsSalones = () => {
    let options = '';
    listaSalones.forEach(salon => {
        options += `<option value="${salon.id}">${salon.numero_identificacion} - ${salon.edificio} - Piso ${salon.piso}</option>`;
    });
    return options;
}

const generarOptionProgramas = () => {
    let options = ''
    listaProgramas.forEach(programa => {
        options += `<option value ="${programa.id}"> ${programa.nombre} </option>`
    })
    return options
}

const generarOptionPeriodos = () => {
    let options = ''
    listaPeriodos.forEach(periodo => {
        options += `<option value ="${periodo.codigo}"> ${periodo.codigo} </option>`
    })
    return options
}