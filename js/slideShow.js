
$(document).ready(function(){

    let currentIndex = 1;

    const slides = $(".slide");
    const prevButton = $(".prev");
    const nextButton = $(".next");
    const dots = $(".dot");
    let slidesCont = $(".slides");
    let autoSlide;
    



    //FUNCIÓN Q MOSTRARÁ EL SLIDE CORRESPONDIENTE A UN ÍNDICE.
    function showSlide(indexSlide) {
        let realIndex = indexSlide -1;
        let percTranslateX = -realIndex * 100;

        slidesCont.css("transform", "translateX(" + percTranslateX + "%)");
        
        dots.removeClass("active").eq(realIndex).addClass("active");
        console.log(indexSlide);
    }


    //FUNCIÓN PARA MOSTRAR LA ANTERIOR SLIDE.
    function prevSlide() {

        currentIndex = currentIndex - 1;
        // currentIndex -= 1;


        if (currentIndex < 1) {
            currentIndex = slides.length;

        } 

        showSlide(currentIndex);
    }


    //FUNCIÓN PARA MOSTRAR EL SIGUIENTE SLIDE.
    function nextSlide() {

        currentIndex = currentIndex + 1;
        // currentIndex += 1;


        if (currentIndex > slides.length) {
            currentIndex = 1;

        } 

        showSlide(currentIndex);
    }




    // EVENTOS FELCHAS PREVIA Y SIGUIENTE
    prevButton.click(function(){
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });


    nextButton.click(function(){
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });



    // PARA NAVEGAR PINCHANDO LOS PUNTITOS DEBAJO DEL SLIDER
    dots.click(function(){
        stopAutoSlide();
        currentIndex = $(this).data("slide");
        showSlide(currentIndex);
        startAutoSlide();
    });



    //FUNCIÓN PARA ACTIVAR EL SLIDESHOW TIPO AUTOMÁTICO
    //Esta función propia va a usar a su vez una función built-in setInterval()
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 2000);
    }



    //FUNCIÓN PARA DETENER EL SLIDE AUTOMÁTICO 
    //La llamaremos cuando el user interactúe con el slideshow
    // clearInterval(); 
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }


    startAutoSlide();


});