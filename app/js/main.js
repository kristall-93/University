$(document).ready(function () {

    // Слайдер Upcoming Events:
    $('.events__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow_slider arrow_slider_prev"><img src="images/slider-arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="arrow_slider arrow_slider_next"><img src="images/slider-arrow-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                }
            },
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
        if ($('.menu-btn').hasClass('active')) {
            $(".menu-btn").removeClass('active');
            $("body, html").css('overflow-y', 'auto');
        }
        else {
            $(".menu-btn").addClass('active');
            $("body, html").css('overflow', 'hidden');

        }
    });
    $(document).mouseup(function (e) {
        var container_menu = $(".menu");
        var container_menu_btn = $(".menu-btn");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container_menu.is(e.target) && container_menu.has(e.target).length === 0 && !container_menu_btn.is(e.target) && container_menu_btn.has(e.target).length === 0) {
            if ($('.menu').css('display', 'block')) {
                $('.menu').css('display', 'none');
                $(".menu-btn").removeClass('active');
                $("body, html").css('overflow-y', 'auto');
            }
        }
    });

    // Переключение вкладок в todo list :
    $('.todo__list .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.todo__list').find('.tab-item').removeClass('active-tab').hide();
        $('.todo__list').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // фильтр в todo list :
    var mixer = mixitup('.todo__list-admissions');

});