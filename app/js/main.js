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
        if ($('.notify__dropdown').hasClass('active')) {
            $(".notify__dropdown").removeClass('active').fadeOut();
        }
        else {
            $(".notify__dropdown").addClass('active').fadeIn();
        }
    });
    // Закрытие notify__dropdown при клике в стороне :    
    $(document).mouseup(function (e) {
        var container_notify__dropdown = $(".notify__dropdown");
        var container_notify__btn = $(".notify__btn");
        if (!container_notify__dropdown.is(e.target) && container_notify__dropdown.has(e.target).length === 0 && !container_notify__btn.is(e.target) && container_notify__btn.has(e.target).length === 0) {
            if ($('.notify__dropdown').hasClass('active')) {
                $('.notify__dropdown').removeClass('active').fadeOut();
            }
        }
    });

    // Открытие user__dropdown:
    $('.user__img').on('click', function () {
        if ($('.user__dropdown').hasClass('active')) {
            $(".user__dropdown").removeClass('active').fadeOut();
        }
        else {
            $(".user__dropdown").addClass('active').fadeIn();
        }
    });
    // Закрытие user__dropdown при клике в стороне :    
    $(document).mouseup(function (e) {
        var container_user__dropdown = $(".user__dropdown");
        var container_user__img = $(".user__img");
        if (!container_user__dropdown.is(e.target) && container_user__dropdown.has(e.target).length === 0 && !container_user__img.is(e.target) && container_user__img.has(e.target).length === 0) {
            if ($('.user__dropdown').hasClass('active')) {
                $('.user__dropdown').removeClass('active').fadeOut();
            }
        }
    });

    // Открытие menu:
    $('.menu-btn').on('click', function () {
        if ($('.menu-btn').hasClass('active')) {
            $(".menu-btn").removeClass('active');
            $(".menu").removeClass('active');
            $(".menu").addClass('hidden');
            $("body, html").css('overflow-y', 'auto');
        }
        else {
            $(".menu-btn").addClass('active');
            $(".menu").addClass('active');
            $(".menu").removeClass('hidden');
            $("body, html").css('overflow', 'hidden');
        }
    });
    // Закрытие меню при клике в стороне :
    $(document).mouseup(function (e) {
        var container_menu = $(".menu");
        var container_menu_btn = $(".menu-btn");
        if (!container_menu.is(e.target) && container_menu.has(e.target).length === 0 && !container_menu_btn.is(e.target) && container_menu_btn.has(e.target).length === 0) {
            if ($('.menu').hasClass('active')) {
                $('.menu').removeClass('active');
                $(".menu").addClass('hidden');
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