// Para declarar una variable en javascript tenemos que escribir primero
// "let" y luego el nombre de la variable, el cual puede ser cualquiera que 
// queramos, pero no puede empezar por un numero, ni puede contener espacios. El
// nombre tiene que ser escrito en minusculas y debe ser lo más descriptivo 
// posible. Otras alternativas son sustituir "let" por las palabras "var" (en desuso)
// o "const" (para declarar constantes).

export default (() => {

    let menu = document.querySelector(".full-menu");
    let boton = document.querySelector(".top-bar-hamburguer");
    let svg = document.querySelector(".menu");
    let main = document.querySelector("main");
    if (boton) {
        boton.addEventListener("click", () => {
            menu.classList.toggle("full-menu-active");
            boton.classList.toggle("top-bar-hamburguer-active");
            svg.classList.toggle("opened");
            main.classList.toggle("none");
        });
    }
})();