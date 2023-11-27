export default (() => {

    const filterButton = document.querySelector(".filter-button");
    const background = document.querySelector(".background-block");
    const filterMenu = document.querySelector(".filter-modal");

    filterButton?.addEventListener("click", () => {
        background.classList.add("background-block-active");
        filterMenu.classList.add("filter-modal-active");
    });
})();