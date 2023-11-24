export default (() => {

    let button= document.querySelector(".form-save-button");

    if (button) {
        button.addEventListener("click", () => {
            alert("HAS PULSADO GUARDAR");
        });
    }
})();