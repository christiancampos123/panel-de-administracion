export default (() => {

    let button= document.querySelector(".edit-button");

    if (button) {
        button.addEventListener("click", () => {
            alert("HAS PULSADO EDITAR");
        });
    }
})();