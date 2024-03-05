const cargarBarraNavegacion = () => {
    const navbar = document.getElementById('navbar')
    navbar.innerHTML = `
        <header class="logo">
            <img src="img/logo.png" alt="logo">
        </header>
        <nav>
            <ul class="menu">
                <li>
                    <button id="inicio" class="boton-menu active">Inicio</button>
                </li>
                <li>
                    <button id="departamentos" class="boton-menu">Departamentos</button>
                </li>
                <li>
                    <button id="cursos" class="boton-menu">Cursos</button>
                </li>
                <li>
                    <button id="registrar" class="boton-menu">Registrar</button>
                </li>
                <li>
                    <button id="matriculas" class="boton-menu">Matriculas</button>
                </li>
            </ul>
        </nav>
        <footer>
            <p class="texto-footer"> © 2024 CamperDiego </p>
        </footer>
    `
}

const cargarSeccionInicio = () => {
    const seccionInicio = document.getElementById('seccion-inicio')
    seccionInicio.innerHTML = `

        <div class="texto-inicio">
            <h1 class="titulo">Bienvenidos</h1>
            <h3 class="texto-h3">Universidad de los Sabios </h3>
            <p class="descripcion">Una institución líder en conocimiento y sabiduría, comprometida con la excelencia académica y la innovación.</p>
        </div>
    
    `
}