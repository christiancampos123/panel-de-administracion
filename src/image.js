export default (() => {
    let images = document.querySelectorAll(".image-placeholder");
    window.addEventListener("click", () => {
         

    });
    images.forEach(image => {
        image.addEventListener("click", () => {
            // Crear un div modal
            let modal = document.createElement("div");
            modal.classList.add("modal");

            // Agregar el contenido del div clickeado al modal
            modal.textContent = image.textContent;

            // Agregar el modal al cuerpo del documento
            document.body.appendChild(modal);

            // Agregar un evento de clic al modal para cerrarlo al hacer clic fuera de él
        });
    });
})();