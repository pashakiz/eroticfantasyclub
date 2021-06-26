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
                    margin: 35
                },
                1500:{
                    margin: 30
                },
                1920:{
                    margin: 74
                },
            }
        });
        // owlInitFor('.user-list', 1, 1200, {
        //     loop: false,
        //     dots: false,
        //     items: 1,
        //     margin: 22,
        //     autoWidth: true,
        //     responsive:{
        //         768:{
        //             margin: 22
        //         },
        //         992:{
        //             margin: 22
        //         },
        //         1200:{
        //             margin: 48
        //         },
        //         1500:{
        //             margin: 48
        //         },
        //     }
        // });

        //slider (Profile gallery)
        owlInitProfile('.up-slider');

        //slider (Profile gallery) set first active
        const first = document.body.querySelector('.up-slider.owl-carousel .owl-item');
        if (first != null) first.classList.add('active_first');
        $('.up-slider.owl-carousel').on('translated.owl.carousel', function(event) {
            const all = document.body.querySelectorAll('.up-slider.owl-carousel .owl-item.active_first');
            all.forEach(item => item.classList.remove('active_first'));
            const first = document.body.querySelector('.up-slider.owl-carousel .owl-item.active');
            first.classList.add('active_first');
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
            //loop: true,
            items: 1,
            dots: false,
            nav: false,
            navText: ['',''],
            margin: 5,
            responsive:{
                992:{
                    margin: 15,
                },
                1200:{
                    items: 3,
                    nav: true,
                    autoWidth: true,
                    margin: 29,
                },
                1500:{
                    items: 3,
                    nav: true,
                    autoWidth: true,
                    margin: 35,
                },
            }
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
                    margin: 35
                },
                1500:{
                    margin: 30
                },
                1920:{
                    margin: 74
                },
            }
        });
    });

});