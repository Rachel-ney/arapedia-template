// CSS
import '@fortawesome/fontawesome-free/css/all.css'
import 'reset-css'
import './src/css/main.scss'

// JS
import $ from 'jquery'

$(document).ready(() => {

    window.matchMedia("(min-width: 800px)").addListener(() => {
        if ($(window).width() >= 800) {
            $('.nav-slide').css('display', 'flex');
        } else {
            $('.nav-slide').css('display', 'none');
        }
    });

    $('.nav__pseudo').click(() => {
        let $navList = $('.nav-list');

        if ($navList.hasClass('nav-list_hide')) {
            $navList.removeClass('nav-list_hide');
            $navList.addClass('nav-list_show');
        } else {
            $navList.removeClass('nav-list_show');
            $navList.addClass('nav-list_hide');
        }
    });

    $('.nav__hamburger').click(() => {
        let $navSlide = $('.nav-slide');

        if ($navSlide.is(':visible')) {
            $navSlide.slideUp()
        } else {
            $navSlide.slideDown()
        }
    });

});