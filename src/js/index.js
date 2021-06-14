import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = document.body.querySelector('#page-preloader');
            if (preloader != null) {
                if ( !preloader.classList.contains('done') ) {
                    preloader.classList.add('done');
                }
            }
        }, 1000);

        //mobile menu expand
        $('.header').on('click', '.header__nav-toggle', function(){
            let header_menu = $(this).closest('.header').find('.header-menu');
            if ( $('.header').hasClass('expand') ) {
                header_menu.slideUp(300);
                setTimeout(function() {
                    $('.header').removeClass('expand');
                }, 300);
            } else {
                header_menu.slideDown(300);
                $('.header').addClass('expand');
            }
        });

        //upload photo
        $('.custom-file-input').on('change', function(){
            let imageUrl = 'img/photos/ava.jpg';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')');
        });

        //slider (Profile gallery) for mobile
        owlInitProfile('.up-slider');

        //custom sliders
        owlInit('.login-slider', {
            loop: true,
            dots: false,
            items: 1,
            margin: 17,
            autoWidth: true,
            responsive:{
                768:{
                    margin: 17
                },
                992:{
                    margin: 17
                },
                1200:{
                    margin: 40
                },
                1500:{
                    margin: 30
                },
                1920:{
                    margin: 48
                },
            }
        });
        owlInitFor('.user-list', 1, 1200, {
            loop: false,
            dots: false,
            items: 1,
            margin: 22,
            autoWidth: true,
            responsive:{
                768:{
                    margin: 22
                },
                992:{
                    margin: 22
                },
                1200:{
                    margin: 48
                },
                1500:{
                    margin: 48
                },
            }
        });

    });

    //init owl carousel for custom screen width
    function owlInitFor(el_class, compare, breakpoint, options) {
        if (compare) {
            if (window.innerWidth > breakpoint) {
                owlInit(el_class, options);
            } else {
                owlDestroy(el_class);
            }
        } else {
            if (window.innerWidth < breakpoint) {
                owlInit(el_class, options);
            } else {
                owlDestroy(el_class);
            }
        }
    }

    function owlInit(el_class, options) {
        $(el_class).addClass('owl-carousel');
        $('.owl-carousel' + el_class).owlCarousel(options);
    }
    function owlDestroy(el_class) {
        $('.owl-carousel' + el_class).owlCarousel('destroy');
        $(el_class).removeClass('owl-carousel');
    }

    function owlInitProfile(el_class) {
        $(el_class).addClass('owl-carousel');
        $('.owl-carousel' + el_class).owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: ['','']
        });
    }

    $(window).resize(function() {
        owlInitProfile('.up-slider');
        owlInit('.login-slider', {
            loop: true,
            dots: false,
            items: 1,
            margin: 17,
            autoWidth: true,
            responsive:{
                768:{
                    margin: 17
                },
                992:{
                    margin: 17
                },
                1200:{
                    margin: 40
                },
                1500:{
                    margin: 30
                },
                1920:{
                    margin: 48
                },
            }
        });
        owlInitFor('.user-list', 1, 1200, {
            loop: false,
            dots: false,
            items: 1,
            margin: 22,
            autoWidth: true,
            responsive:{
                768:{
                    margin: 22
                },
                992:{
                    margin: 22
                },
                1200:{
                    margin: 48
                },
                1500:{
                    margin: 48
                },
            }
        });
    });

});