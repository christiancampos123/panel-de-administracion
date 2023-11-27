export default (() => {

    const acceptButton = document.querySelector(".modal-delete-box-buttons-accept");
    const cancelButton = document.querySelector(".modal-delete-box-buttons-decline");
    const background = document.querySelector(".background-block");
    const deleteModal = document.querySelector(".modal-delete");


    acceptButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });

    cancelButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });

})();