export default (() => {

    let button= document.querySelector(".delete-button");

    if (button) {
        button.addEventListener("click", () => {
            alert("HAS PULSADO ELIMINAR");
        });
    }
})();