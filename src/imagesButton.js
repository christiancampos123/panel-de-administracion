export default (() => {

    let form = document.querySelector(".form-main");
    let images = document.querySelector(".images");
    let mainButton = document.querySelector(".form-buttons-images");

    if (mainButton) {
        mainButton.addEventListener("click", () => {
            form.classList.add("none");
            images.classList.add("display");
            form.classList.remove("display");
            images.classList.remove("none");
        });
    }
})();
