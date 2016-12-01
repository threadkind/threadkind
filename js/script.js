$( document ).ready(function() {

//HAMBURGER MENU TOGGLE

$('.hamburger').on('click', function () {
$('.menu').toggleClass('open');
});

//PRINT RECIPE FUNCTION

function PrintElem(elem)
    {
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');


        mywindow.document.write('<html><head><title>' + document.title  + '</title>');

        mywindow.document.write('</head><body >');
      mywindow.document.write('<h1>' + document.title  + '</h1>');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;

        }

$('.printMe').click(function() {
    var mywindow = window.open('', 'PRINT');

    mywindow.document.write('<img src="../images/greyheader.png">');
    mywindow.document.write($('.mainrecipe').html());
    mywindow.document.write('<br><br>');
    mywindow.document.write(window.location.href);

    mywindow.print();
    mywindow.close();
    window.location.reload();
    return false;
});

}); // DOC READY CLOSE
