$(document).ready(function () {

    // ТАРИФЫ

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
        $('.slick-slide-num-current').text('0' + 1 + ' ');
    })
    $('.reviews__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' ');
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
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>',
    });

    // ПАРТНЕРЫ

    $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });

    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            }
        }],
    });

    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('show');
    });

    $('.plans__btn').click(function (event) {
        $('.plans__btn').toggleClass('active-modal');
    });
});

    // React
    //webform-react 
// const Form = () => {
  
//   return React.createElement("form", {
//     className: "ajaxForm",
//     action: "#",
//     acceptCharset: "UTF-8"
//   }, React.createElement("div", {
//     style: {
//       color: 'red',
//       fontSize: '14px',
//       marginBottom: '5px'
//     }
//   }), React.createElement("input", {
//     value: name,
//     className: "webform__form-elem",
//     id: "name",
//     type: "text",
//     name: "name",
//     required: true,
//     placeholder: "Ваше имя"
//   }), React.createElement("div", {
//     style: {
//       color: 'red',
//       fontSize: '14px',
//       marginBottom: '5px'
//     }
//   }), React.createElement("input", {
//     value: phone,
//     className: "webform__form-elem",
//     id: "phone",
//     type: "tel",
//     "data-tel-input": true,
//     name: "phone",
//     required: true,
//     placeholder: "Телефон"
//   }));
// };

// const Modal = ({
//   children
// }) => {
//   const hideModal = () => {
//     let modal = document.querySelector(".modal");
//     modal.style.transform = "scale(" + 0 + ")";
//   };

//   return React.createElement("div", {
//     className: "modal",
//     onClick: () => hideModal()
//   }, React.createElement("div", {
//     className: "webform__form",
//     onClick: e => e.stopPropagation()
//   }, children));
// };

// const App = () => {
//   const showModal = () => {
//     let start = Date.now();
//     let modal = document.querySelector(".modal");
//     let timer = requestAnimationFrame(function animateModal(timestamp) {
//       let interval = Date.now() - start;
//       modal.style.transform = "scale(" + (interval / 300 - 0.1) + ")";
//       if (interval < 300) requestAnimationFrame(animateModal);
//     });
//     };
//     const btn = document.querySelectorAll(".plans__btn");
//     btn.addEventListener("click", (e) => {
//         showModal();
//     })
// };

// ReactDOM.render(React.createElement(Form), document.querySelector("#modal"));

// ReactDOM.render(React.createElement(App, null));
// document.addEventListener("DOMContentLoaded", function () {
// });