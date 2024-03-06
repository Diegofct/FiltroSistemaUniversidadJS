document.addEventListener('DOMContentLoaded', async ()=>{
    cargarSeccionInicio()
    cargarSeccionNosotros()
    cargarSeccionContactame()
    await loadDepartamentos()
    mostrarListadoDepartamentos()
})