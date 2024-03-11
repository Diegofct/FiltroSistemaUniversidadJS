const listaMatriculas = []

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
                        <input type="number" id="inputPrecio" placeholder="Precio" required>
                    </div>
                    <div class="abajo-content-container">
                        <button id="btnMatricular" onClick="matricularEstudiante()">Matricular</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const generarOptionsEstudiantes = () => {
    let options = '';
    listaEstudiantes.forEach(estudiante => {
        options += `<option value="${estudiante.id}">${estudiante.nombre} ${estudiante.apellido}</option>`;
    });
    return options;
};

const generarOptionsAsignaturas = () => {
    let options = '';
    listaAsignaturas.forEach(asignatura => {
        options += `<option value="${asignatura.id}">${asignatura.nombre}</option>`;
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

