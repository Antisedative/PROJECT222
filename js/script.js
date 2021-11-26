// ТАРИФЫ

$(document).ready(function () {
    $('.plans__card-starting').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-starting').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });
    $('.plans__card-vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });


    // ОТЗЫВЫ

    $('.reviews__slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
    })
    $('.reviews__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
    })
    $('.reviews__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick__arrows',
        prevArrow: '<button data-role="none" class="slick-prev slick-arrow" aria-hidden="true"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label=""></button>',

    });

    // ПАРТНЕРЫ

    $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
    });

    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2700,
        speed: 2000,
    });
});