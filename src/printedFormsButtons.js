export default (() => {

    const buttonEdit = document.querySelector(".edit-button");

    if (buttonEdit) {
        buttonEdit.addEventListener("click", () => {
            alert("HAS PULSADO EDITAR");
        });
    }


    const buttonDelete = document.querySelector(".delete-button");
    const background = document.querySelector(".background-block");
    const deleteModal = document.querySelector(".modal-delete");

    // const buttonsDelete = Array.from(document.getElementsByClassName('.delete-button'));

    // buttonsDelete.forEach((button, index) => {
    //     button?.addEventListener("click", () => {
    //         background.classList.add("background-block-active");
    //         deleteModal.classList.add("modal-delete-active");
    //     });
    // });

    // console.log(buttonsDelete);

    buttonDelete?.addEventListener("click", () => {
        background.classList.add("background-block-active");
        deleteModal.classList.add("modal-delete-active");
    });


})();