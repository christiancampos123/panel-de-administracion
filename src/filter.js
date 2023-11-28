export default (() => {

    const filterButton = document.querySelector(".filter-button");
    const background = document.querySelector(".background-block");
    const filterMenu = document.querySelector(".filter-modal");

    filterButton?.addEventListener("click", () => {
        background.classList.add("background-block-active");
        filterMenu.classList.add("filter-modal-active");
    });



    //modal
    const buttonAccept = document.querySelector(".filter-inside-buttons-accept");
    const buttonDecline = document.querySelector(".filter-inside-buttons-decline");
    
    buttonAccept?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        filterMenu.classList.remove("filter-modal-active");
    });
    
    buttonDecline?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        filterMenu.classList.remove("filter-modal-active");
    });


})();