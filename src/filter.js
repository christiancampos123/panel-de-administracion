export default (() => {

    let filterButton = document.querySelector(".filter-button");
    let filterCourtain = document.querySelector(".filter-inputs");

    if (filterButton) {
        filterButton.addEventListener("click", () => {
            filterCourtain.classList.toggle("block");
        });
    }
})();