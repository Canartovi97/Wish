$(".txtMenu").click(function () {
    const id = this.id;
    $(".animsition").animate({
        top: "100%"
    }, 600, function () {
        if (id == "back") {
            window.history.back();
        } else {
            window.location.href = "../inicio.html"
        }
    });


});
$(document).ready(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    setTimeout(function () {
        if ($(".animsition").css("opacity") == 0) {
            $(".animsition").css("opacity", 1);
        }
    }, 800);
});

/* complete_workflow */
$(".complete_workflow").click(function () {
    $(".complete_workflow_overlay").css("display", "block")
    $(".complete_workflow_overlay").animate({
        marginTop: "0vw",
        scrollTop: 290
    }, 100)
    $(".diagrama2").scrollTop(1950);
})

$(".complete_workflow_overlay").click(function () {
    $(".complete_workflow_overlay").animate({
        marginTop: "100vw"
    }, 400)
})


function cambio_pantalla(url, tipo_cambio, ubication) {
    if (ubication === "1") {
        redireccion = './redirecciones/redireccion.html';
    } else if (ubication === "2") {
        redireccion = '../redirecciones/redireccion.html';
    } else if (ubication === "3") {
        redireccion = '../../redirecciones/redireccion.html';
    }
    localStorage.setItem("url", url)
    localStorage.setItem("cambio", tipo_cambio)
    if (tipo_cambio === "cambio1") {        
        $(".screen").animate({
            right: "100vw"
        }, 200, function () {
            window.location.href = redireccion;
        })
    } else if (tipo_cambio === "cambio2") {
        
        $(".down_buttons").animate({
            left: "100vw"
        }, 200)
        $(".screen").animate({
            left: "100vw"
        }, 200, function () {
            window.location.href = redireccion;
        })
    } else if (tipo_cambio === "cambio3") {
        
        $(".screen").animate({
            top: "-100vw"
        }, 200, function () {
            window.location.href = redireccion;
        })
    }
}





/* Slider --------------------- */




var sliderCounter = 1;

$('.left_arrow').click(function () {
    sliderCounter--;
    var n = sliderCounter;
    console.log(n);
    sliderImage(n);
});

$('.right_arrow').click(function () {
    sliderCounter++;
    var n = sliderCounter;
    console.log(n);
    sliderImage(n);
});

function sliderImage(n) {
    if (n === 1) {
        $('.slider-image.img1').animate({ left: '5vw' }, 400);
        $('.slider-image.img2').animate({ left: '55vw' }, 400);
        $('.left_arrow').css({ visibility: 'hidden' });
        $('.right_arrow').css({ visibility: 'visible' });

    }
    if (n === 2) {
        $('.slider-image.img1').animate({ left: '-50vw' }, 400);
        $('.slider-image.img2').animate({ left: '5vw' }, 400);
        $('.slider-image.img3').animate({ left: '55vw' }, 400);
        $('.ils_arrow.left_arrow').css({ visibility: 'visible' });
        $('.ils_arrow.right_arrow').css({ visibility: 'visible' });
        $('.property_arrow.right_arrow').css({ visibility: 'visible' });
        $('.property_arrow.left_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.break_arrow.right_arrow').css({ visibility: 'hidden' });
        $('.break_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });
    }
    if (n === 3) {
        $('.slider-image.img2').animate({ left: '-50vw' }, 400);
        $('.slider-image.img3').animate({ left: '5vw' }, 400);
        $('.slider-image.img4').animate({ left: '55vw' }, 400);
        $('.ils_arrow.left_arrow').css({ visibility: 'visible' });
        $('.ils_arrow.right_arrow').css({ visibility: 'visible' });
        $('.property_arrow.right_arrow').css({ visibility: 'visible' });
        $('.property_arrow.left_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });
    }
    if (n === 4) {
        $('.slider-image.img3').animate({ left: '-50vw' }, 400);
        $('.slider-image.img4').animate({ left: '5vw' }, 400);
        $('.slider-image.img5').animate({ left: '55vw' }, 400);
        $('.ils_arrow.right_arrow').css({ visibility: 'hidden' });
        $('.property_arrow.right_arrow').css({ visibility: 'visible' });
        $('.property_arrow.left_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });
    }
    if (n === 5) {
        $('.slider-image.img4').animate({ left: '-50vw' }, 400);
        $('.slider-image.img5').animate({ left: '5vw' }, 400);
        $('.slider-image.img6').animate({ left: '55vw' }, 400);
        $('.property_arrow.right_arrow').css({ visibility: 'hidden' });
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });

    }
    if (n === 6) {
        $('.slider-image.img5').animate({ left: '-50vw' }, 400);
        $('.slider-image.img6').animate({ left: '5vw' }, 400);
        $('.slider-image.img7').animate({ left: '55vw' }, 400);
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });

    }
    if (n === 7) {
        $('.slider-image.img6').animate({ left: '-50vw' }, 400);
        $('.slider-image.img7').animate({ left: '5vw' }, 400);
        $('.slider-image.img8').animate({ left: '55vw' }, 400);
        $('.foreign_arrow.right_arrow').css({ visibility: 'visible' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        $('.allergic_arrow.right_arrow').css({ visibility: 'hidden' });
        $('.allergic_arrow.left_arrow').css({ visibility: 'visible' });

    }
    if (n === 8) {
        $('.slider-image.img7').animate({ left: '-50vw' }, 400);
        $('.slider-image.img8').animate({ left: '5vw' }, 400);
        $('.foreign_arrow.right_arrow').css({ visibility: 'hidden' });
        $('.foreign_arrow.left_arrow').css({ visibility: 'visible' });
        /* $('.ils_arrow.right_arrow').css({ visibility: 'hidden' }); */
    }
}