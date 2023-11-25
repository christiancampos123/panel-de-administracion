export default (() => {

    let buttonEdit= document.querySelector(".edit-button");

    if (buttonEdit) {
        buttonEdit.addEventListener("click", () => {
            alert("HAS PULSADO EDITAR");
        });
    }

    
    let buttonDelete= document.querySelector(".delete-button");

    if (buttonDelete) {
        buttonDelete.addEventListener("click", () => {
            alert("HAS PULSADO ELIMINAR");
        });
    }

})();