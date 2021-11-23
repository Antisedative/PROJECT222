// ТАРИФЫ

$(document).ready(function () {
    $('.item__start').mouseover(function () {
        $(this).addClass('scaled');
        $('.item__business').addClass('business-scale');
    });
    $('.item__start').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
    $('.item__vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.item__business').addClass('business-scale');
    });
    $('.item__vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.item__business').removeClass('business-scale');
    });
});

// ОТЗЫВЫ

$(document).ready(function () {
    $('.slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
    })
    $('.slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
    })
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        appendArrows: '.slick__arrows',
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"></button>',
    });
});

// ПАРТНЕРЫ

// $(document).ready(function () {
//     $('.partners-slider-1').slick({
//         arrows: false,
//         dots: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         centerMode: true,
//         focusOnSelect: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 500,
//         responsive: [{
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 centerMode: false,
//                 variableWidth: true,
//             }
//         }],
//     });
//     $('.partners-slider-2').slick({
//         arrows: false,
//         dots: false,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 500,
//         responsive: [{
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 focusOnSelect: true,
//                 variableWidth: true,
//             }
//         }],
//     });
// });