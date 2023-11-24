export default (() => {

    let button= document.querySelector(".form-clean-button");

    if (button) {
        button.addEventListener("click", () => {
            alert("HAS PULSADO LIMPIAR");
        });
    }
})();