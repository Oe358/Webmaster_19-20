$(document).ready(function(){

    onResize();

    $(window).resize(function() {
        onResize();
    });

    // Navbar Control
    $("#times").hide();

    $("#navbar-toggler").click(function() {
        $("#bars").toggle();
        $("#times").toggle();
        $("#expanded-links").toggleClass("links-showing");
    });


    //Slideshow Control
    for (let i = 1; i <= 3; i++) {
        $(".slide .dot:nth-child(" + i + ")").click(function() {
            $(".slide .cars-inner").css({"left": (-33 * (i - 2)) + "%"});
            $(".slide .dot.one").css({"background": "none"});
            $(".slide .dot.two").css({"background": "none"});
            $(".slide .dot.three").css({"background": "none"});
            $(this).css({"background": "#cccccc"});

            $(".slide .h1 h1:nth-child(" + (i-1) + ")").css({"opacity": "0", "left": "50px"});
            $(".slide .h1 h1:nth-child(" + (i-2) + ")").css({"opacity": "0", "left": "50px"});
            $(".slide .h1 h1:nth-child(" + (i+1) + ")").css({"opacity": "0", "left": "50px"});
            $(".slide .h1 h1:nth-child(" + (i+2) + ")").css({"opacity": "0", "left": "50px"});
            $(".slide .h1 h1:nth-child(" + i + ")").css({"opacity": "1", "left": "0"});
        });

        $(".slide .cars img:nth-child(" + i + ")").click(function() {
            $(".slide .dot:nth-child(" + i + ")").trigger("click");
        });
    }

});

function onResize() {
    $("#expanded-links").css({"height": window.innerHeight + "px"});

    if (window.innerWidth >= 768) {
        $(".slideshow").css({"height": (window.innerHeight - 50) + "px"});
    } else {
        $(".slideshow").css({"height": "auto"});
    }
}
