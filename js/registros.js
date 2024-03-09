
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


const mostrarFormularioAlumno = () => {
    seccionFormAlumnos.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor">
                <h1>Registrar Alumnos</h1>
            </div>
            <div class="under-container">
                <div class="content-container">
                    <div class="arriba-content-container">
                        <input id="puntaje-jugador-a" type="text" placeholder="Juegos ganados por jugador A:">
                        <input id="puntaje-jugador-b" type="text" placeholder="Juegos ganados por jugador B:">
                        <button onclick="validarResultadoTennis()" id="btn-validar">Validar</button>
                    </div>
                    <div class="abajo-content-container">
                        <p>Juegos de A: <span id="puntos-jugador-a"></span></p>
                        <p>Juegos de B: <span id="puntos-jugador-b"></span></p>
                        <span id="texto-alternativo"></span>
                    </div>
                </div>
            </div>
        </div>
    `

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
                        <input id="puntaje-jugador-a" type="text" placeholder="Juegos ganados por jugador A:">
                        <input id="puntaje-jugador-b" type="text" placeholder="Juegos ganados por jugador B:">
                        <button id="btn-validar">Validar</button>
                    </div>
                    <div class="abajo-content-container">
                        <p>Juegos de A: <span id="puntos-jugador-a"></span></p>
                        <p>Juegos de B: <span id="puntos-jugador-b"></span></p>
                        <span id="texto-alternativo"></span>
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
                    <div class="arriba-content-container">
                        <input id="puntaje-jugador-a" type="text" placeholder="Juegos ganados por jugador A:">
                        <input id="puntaje-jugador-b" type="text" placeholder="Juegos ganados por jugador B:">
                        <button id="btn-validar">Validar</button>
                    </div>
                    <div class="abajo-content-container">
                        <p>Juegos de A: <span id="puntos-jugador-a"></span></p>
                        <p>Juegos de B: <span id="puntos-jugador-b"></span></p>
                        <span id="texto-alternativo"></span>
                    </div>
                </div>
            </div>
        </div>

    `

}