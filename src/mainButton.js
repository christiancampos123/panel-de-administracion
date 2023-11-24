export default (() => {

    let form = document.querySelector(".form-main");
    let images = document.querySelector(".images");
    let mainButton = document.querySelector(".form-buttons-main");

    if (mainButton) {
        mainButton.addEventListener("click", () => {
            form.classList.add("display");
            images.classList.add("none");
            form.classList.remove("none");
            images.classList.remove("display");

        });
    }
})();