export default (() => {
    // boton de save
    const buttonSave = document.querySelector(".form-save-button");

    buttonSave?.addEventListener("click", () => {
        alert("HAS PULSADO GUARDAR");
    });

    // boton de clean
    const buttonBroom = document.querySelector(".form-clean-button");

    buttonBroom?.addEventListener("click", () => {
        alert("HAS PULSADO LIMPIAR");
    });


    // array de nodos
    const sections = Array.from(document.querySelectorAll(".form section"));
    const buttons = Array.from(document.querySelectorAll('.form-buttons-change > div > button'));

    buttons.forEach((button, index) =>{
        button?.addEventListener("click", () => { 
            displaySection(index);
        });
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