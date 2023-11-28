export default (() => {
    //Edit button
    const buttonsEdit = Array.from(document.querySelectorAll('.edit-button'));

    buttonsEdit.forEach((buttonEdit) => {
        buttonEdit?.addEventListener("click", () => {
            alert("Has pulsado editar");
        });
    });

    //Delete button
    const background = document.querySelector(".background-block");
    const deleteModal = document.querySelector(".modal-delete");
    const buttonsDelete = Array.from(document.getElementsByClassName('delete-button'));
    
    console.log(buttonsDelete);
    buttonsDelete.forEach((buttonDelete) => {
        buttonDelete?.addEventListener("click", () => {
            background.classList.add("background-block-active");
            deleteModal.classList.add("modal-delete-active");
        });
    });


    // Delete Modal
    const acceptButton = document.querySelector(".modal-delete-box-buttons-accept");
    const cancelButton = document.querySelector(".modal-delete-box-buttons-decline");

    acceptButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });

    cancelButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });



})();