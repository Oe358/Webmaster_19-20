$(document).ready(function(){

    $("#times").hide();
    $("#expanded-links").css({"height": window.innerHeight + "px"});


    $("#navbar-toggler").click(function() {
        $("#bars").toggle();
        $("#times").toggle();
        $("#expanded-links").toggleClass("links-showing");
    });


});
