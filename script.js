document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos el botón y la lista de materiales
    const botonMateriales = document.getElementById("btn-materiales");
    const listaMateriales = document.getElementById("lista-materiales");

    // Agregamos el evento de clic al botón
    botonMateriales.addEventListener("click", function() {
        
        // Comprobamos si la lista está oculta o visible
        if (listaMateriales.classList.contains("oculto")) {
            // Si está oculta, la mostramos y cambiamos el texto
            listaMateriales.classList.remove("oculto");
            botonMateriales.textContent = "Ocultar lista de materiales ⬆️";
        } else {
            // Si está visible, la ocultamos de nuevo
            listaMateriales.classList.add("oculto");
            botonMateriales.textContent = "Ver lista de materiales 🌿";
        }
    });

});
