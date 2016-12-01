$( document ).ready(function() {

//HAMBURGER MENU TOGGLE

$('.hamburger').on('click', function () {
$('.menu').toggleClass('open');
});

//PRINT RECIPE FUNCTION


$('.printMe').click(function() {
    var mywindow = window.open('', 'PRINT');

    mywindow.document.write('<img src="../images/greyheader.png">');
    mywindow.document.write($('.mainrecipe').html());
    mywindow.document.write('<br><br>');
    mywindow.document.write(window.location.href);

    mywindow.print();
    mywindow.close();
    return false;
});

}); // DOC READY CLOSE
