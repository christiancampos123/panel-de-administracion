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










    // const tabsSection = document.querySelector('.form');

    // tabsSection?.addEventListener('click', async (event) => {
    //     if (event.target.closest('.form-buttons-main')) {
    //         document.querySelector("form-buttons-main").classList.add("form-button-active");
    //     }

    // });
    // Pestañas de navegación
    // array de nodos


    const buttonContainer = document.querySelector('.form-buttons-change');

    buttonContainer?.addEventListener('click', (event) => {

        if (event.target.tagName === 'BUTTON') {
            // localizo al padre
            let padre = event.target.closest('.form-buttons-change');
            let activo = padre.querySelector(".form-button-active");
            // se lo quito al hijo que lo tiene
            activo.classList.remove("form-button-active");
            // se lo doy al pulsado
            event.target.classList.add('form-button-active');
    
        }
    });















    const sections = Array.from(document.querySelectorAll(".form section"));
    const buttons = Array.from(document.querySelectorAll('.form-buttons-change > div > button'));

    buttons.forEach((button, index) => {
        button?.addEventListener("click", () => {
            displaySection(index);
        });
    });


    // la array se recorre a si misma
    function displaySection(indexDisplay) {
        sections.forEach((element, index) => {
            if (indexDisplay === index) {
                element.classList.add("display");
                element.classList.remove("none");
            } else {
                element.classList.add("none");
                element.classList.remove("display");
            }
        })
    }


})();