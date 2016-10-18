$( document ).ready(function() {

//HAMBURGER MENU TOGGLE

$('.hamburger').on('click', function () {
$('.menu').toggleClass('open');
});

//PRINT RECIPE FUNCTION

$('.printMe').click(function() {
    window.print();  
    return false;  
});  

}); // DOC READY CLOSE