const cargarBarraNavegacion = () => {
    const navbar = document.getElementById('navbar')
    navbar.innerHTML = `
        <header class="logo">
            <img src="img/logo.png" alt="logo">
        </header>
        <nav>
            <ul class="menu">
                <li>
                    <a href="#" class="boton-menu active">Inicio</a>
                </li>
                <li>
                    <a href="#" class="boton-menu">Facultades</a>
                </li>
                <li>
                    <a href="#" class="boton-menu">Cursos</a>
                </li>
                <li>
                    <a href="#" class="boton-menu">Registrar</a>
                </li>
                <li>
                    <a href="#" class="boton-menu">Matriculas</a>
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
            <h1>Bienvenidos</h1>
            <h3>Universidad de los Sabios </h3>
        </div>
    
    `
}