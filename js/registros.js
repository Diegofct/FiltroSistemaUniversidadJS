
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
                            <option value="">-Elige el género-</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnRegistrar">Registrar</button>
                        <button id="btnVerListado">Ver Listado</button>
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
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        </select>
                        <input type="text" id="numeroDocumentoProfesor" placeholder="Número documento" required>
                        <input id="inputNombreProfesor" type="text" placeholder="Nombres del profesor" required>
                        <input id="inputApellidoProfesor" type="text" placeholder="Apellidos del profesor" required>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnRegistrar">Registrar</button>
                        <button id="btnVerListado">Ver Listado</button>
                    </div>
                </div>
            </div>
        </div>

    `
}

const mostrarFormularioAsignatura = () => {

    seccionFormAsignatura.innerHTML = `
    
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Registrar Asignatura</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    
                </div>
            </div>
        </div>

    `

}