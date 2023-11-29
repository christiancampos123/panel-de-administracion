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








    const sections = Array.from(document.querySelectorAll(".form section"));
    const buttons = Array.from(document.querySelectorAll('.form-buttons-change > div > button'));

    console.log(buttons);

    buttons.forEach((button, index) => {
        button?.addEventListener("click", () => {
            // buttons.forEach((button, index) =>{
            //     buttons[index].classList.remove("form-button-active");
            // });
            
            buttons.forEach(function (buttons) {
                buttons.classList.remove('form-button-active');
            });


            displaySection(index);
            console.log(buttons[index]);
            buttons[index].classList.add("form-button-active");
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