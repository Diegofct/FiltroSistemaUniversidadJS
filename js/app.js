document.addEventListener('DOMContentLoaded', async ()=>{
    //Seccion de inicio
    cargarSeccionInicio()
    cargarSeccionNosotros()
    cargarSeccionContactame()

    //seccion departamentos
    await loadDepartamentos()
    mostrarListadoDepartamentos()
})