export default (() => {

    const buttonEdit = document.querySelector(".edit-button");

    if (buttonEdit) {
        buttonEdit.addEventListener("click", () => {
            alert("HAS PULSADO EDITAR");
        });
    }


    const buttonDelete = document.querySelector(".delete-button");


    buttonDelete?.addEventListener("click", () => {
        alert("HAS PULSADO ELIMINAR");
    });


})();