$(document).ready(function () {
    // Inicialización de AOS
    AOS.init({
        duration: 1600,
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    console.log("DOM fully loaded!");



    // LÓGICA MENÚ RESPONSIVE 
    // Analizamos HTML y el CSS que afectan al menú 
    // 1) Seleccionamos el elemento (icono hamburguesa)
    // 2) Asociamos un evento click al icono 
    // Añadimos al menú la clase manu-show 
    // Cambiamo le icono hamburguesa por el icono (fa-times)
        

        // 1)
        const btn_menu = document.querySelector(".burger i");

        // 2)
        btn_menu.addEventListener("click", function() {


            const menu = document.querySelector(".menu");
            menu.classList.toggle("menu-show");
            
            btn_menu.classList.toggle("fa-bars");
            btn_menu.classList.toggle("fa-times");
        
            
    });

    
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("menu-show");
            btn_menu.classList.remove("fa-times");
            btn_menu.classList.add("fa-bars");
        });
    });


    
});
