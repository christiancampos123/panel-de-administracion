export default (() => {
    //Edit button
    //const buttonsEdit = Array.from(document.querySelectorAll('.edit-button'));
    const tableSection = document.querySelector('.table');

    tableSection?.addEventListener('click', async (event) => {
        if (event.target.closest('.edit-button')) {
            alert("Has pulsado edition");
        }

        if (event.target.closest('.delete-button')) {
            // alert("has pulsado delete");

            //Delete button
            const background = document.querySelector(".background-block");
            const deleteModal = document.querySelector(".modal-delete");
            
            background.classList.add("background-block-active");
            deleteModal.classList.add("modal-delete-active");
            
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



        }
    });


    // buttonsEdit.forEach((buttonEdit) => {
    //     buttonEdit?.addEventListener("click", () => {
    //         alert("Has pulsado editar");
    //     });
    // });



})();