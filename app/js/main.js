$(document).ready(function () {

    // Слайдер Upcoming Events:
    $('.events__slider').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: false,
        prevArrow: '<button class="arrow_slider arrow_slider_prev"><img src="images/slider-arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="arrow_slider arrow_slider_next"><img src="images/slider-arrow-next.svg" alt=""></button>',
        responsive: [{
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
            }
        },
        // {
        //     breakpoint: 550,
        //     settings: {
        //         slidesToShow: 1,
        //     }
        // },
        // {
        //     breakpoint: 740,
        //     settings: {
        //         slidesToShow: 2,
        //     }
        // },
        ]
    });

    // Закрытие top-line:
    $('.top-line__close-btn').on('click', function () {
        $('.top-line').slideToggle();
    });

    // Открытие notify__dropdown:
    $('.notify__btn').on('click', function () {
        $('.notify__dropdown').slideToggle();
    });

    // Открытие user__dropdown:
    $('.user').on('click', function () {
        $('.user__dropdown').slideToggle();
    });

    // Открытие menu:
    $('.menu-btn').on('click', function () {
        $('.menu').slideToggle();
        // $('.menu-btn').addClass('active');
        if ($('.menu-btn').hasClass('active')) {
            $(".menu-btn").removeClass('active');
            // $(".menu_btn").addClass('opened');
            // $("body, html").css('overflow', 'hidden');
        }
        else {
            // $(".menu_btn").removeClass('opened');
            $(".menu-btn").addClass('active');
            // $("body, html").css('overflow-y', 'auto');
        }
    });



});