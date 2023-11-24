export default (() => {
    // boton de save
    let buttonSave = document.querySelector(".form-save-button");

    buttonSave?.addEventListener("click", () => {
        alert("HAS PULSADO GUARDAR");
    });

    // boton de clean
    let buttonBroom = document.querySelector(".form-clean-button");

    buttonBroom?.addEventListener("click", () => {
        alert("HAS PULSADO LIMPIAR");
    });


    // array de nodos
    let sections = Array.from(document.querySelectorAll(".form section"));
    let mainButton = document.querySelector(".form-buttons-main");
    let imagesButton = document.querySelector(".form-buttons-images");

    mainButton?.addEventListener("click", () => {
        displaySection(0);
    });

    imagesButton?.addEventListener("click", () => {
        displaySection(1);
    });

    // la array se recorre a si misma
    function displaySection(indexDisplay) {
        sections.forEach((element,index)=>{
            if(indexDisplay===index){
                element.classList.add("display");
                element.classList.remove("none");
            } else {
                element.classList.add("none");
                element.classList.remove("display");
            }
        })
    }

})();