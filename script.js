$(document).ready(function () {
    $(window).scrollTop(1, 0); $(window).scrollTop(0, 0);

    let menu = document.querySelector('.menu');
    let menuIcon = document.querySelector('.menu-icon');
    let menuItems = document.querySelectorAll('.menu a');
    let langBtn = document.querySelectorAll('.lang>button');

    if (window.matchMedia('(min-width: 769px)').matches) {
        $("#lng").appendTo($(".header__info"));
    } else {
        $("#lng").appendTo($(".menu__container"));
    }

    // language-switcher
    langBtn[0].addEventListener('click', function () {
        if (!langBtn[0].classList.contains('chosen')) {
            $("* #en").addClass("showOff");
            $("* #ru").removeClass("showOff");

            $(langBtn[0]).addClass('active');
            $(langBtn[1]).removeClass('chosen');
        }
    });
    langBtn[1].addEventListener('click', function () {
        if (!langBtn[1].classList.contains('chosen')) {
            $("* #en").removeClass("showOff");
            $("* #ru").addClass("showOff");

            $(langBtn[0]).removeClass('chosen');
            $(langBtn[1]).addClass('active');
        }
    });

    // language button:hover
    $('#lng button').hover(
        function () {
            if (!$(langBtn[0]).hasClass('active')) {
                $(langBtn[0]).addClass('active');
                $(langBtn[1]).removeClass('active').addClass('chosen');
            } else {
                $(langBtn[1]).addClass('active');
                $(langBtn[0]).removeClass('active').addClass('chosen');
            }
        },
        function () {
            if ($(langBtn[0]).hasClass('chosen')) {
                $(langBtn[0]).addClass('active').removeClass('chosen');
                $(langBtn[1]).removeClass('active');
            } else {
                if ($(langBtn[1]).hasClass('chosen')) {
                    $(langBtn[1]).addClass('active').removeClass('chosen');
                    $(langBtn[0]).removeClass('active');
                }
            }
        }
    )

    // menu-burger event
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        $(menu).toggleClass('active open');
        $('body').toggleClass('no-scroll');
        menu.scrollTop = 0;

        if ($(menu).hasClass('open')) {
            $(window).scrollTop(0, 0)
        }

        if (!menuIcon.classList.contains('active')) {
            menuIcon.classList.toggle('not-active')

        } else {
            menuIcon.classList.remove('not-active')
        }
    });

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 769px)').matches) {
            if ($(menu).hasClass("open")) {
                $(menu).toggleClass('active deskWidth');
                $('body').toggleClass('no-scroll');
                $(menuIcon).addClass('not-active').removeClass('active');
            }
            $("#lng").appendTo($(".header__info"));
        } else {
            $("#lng").appendTo($(".menu__container"));
            if ($(menu).hasClass("open") && $(menu).hasClass("deskWidth")) {
                $(menu).toggleClass('deskWidth');
                $(menu).toggleClass('active');
                $('body').toggleClass('no-scroll');
                $(menuIcon).addClass('active').removeClass('not-active');
            }
        }
    });

    // user browser deffault language
    let userLang = window.navigator.language || window.navigator.userLanguage;
    if (userLang.toLowerCase().slice(0, 2) === 'ru') {
        $("* #en").addClass("showOff");
        langBtn[0].classList.add('active');
    } else {
        $("* #ru").addClass("showOff");
        langBtn[1].classList.add('active');
    }

    // active menu-item at scrolling
    let sections = $('.nav-anchor');
    let nav = $('nav');
    let nav__height = nav.outerHeight();
    let windowHeight = $(window).height();
    let topDots = [0]

    $(window).on('scroll', function () {
        let cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav__height,
                bottom = top + $(this).outerHeight();

            if ($(this).attr('id') === 'contacts' && windowHeight > $(this).outerHeight()) {
                if (windowHeight > nav__height) {
                    top = $(this).offset().top - (windowHeight - $(this).outerHeight() + 1);
                }
            }
            if ($(this).attr('id') === 'portfolio' && windowHeight > $(sections[4]).outerHeight()) {
                if (windowHeight > nav__height) {
                    bottom = top + $(this).outerHeight() - (windowHeight - $(sections[4]).outerHeight()) - 1;
                }
            }

            if (topDots.length < 5 && $(this).attr('id') != 'home') {
                topDots.push(top);
            }

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');

                nav.find('a[id="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    $(menuItems).hover(
        function () {
            if (!$(this).hasClass('active')) {
                $(menuItems).map(function () {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active').addClass('chosen')
                    }
                });
                $(this).addClass('active hovered');
            }
        },
        function () {
            $(menuItems).map(function () {
                if ($(this).hasClass('hovered')) {
                    $(this).removeClass('active hovered');
                }
                if ($(this).hasClass('chosen')) {
                    $(this).addClass('active').removeClass('chosen');
                }
            });
        }
    )

    let ids = { "home": 0, "about": 1, "skills": 2, "portfolio": 3, "contacts": 4 };

    $(menuItems).each(function () {
        $(this).click(function () {
            window.scrollTo(0, Math.round(topDots[ids[$(this).attr('id').slice(1)]]));
            if (window.matchMedia('(max-width: 768px)').matches) {
                $(menu).toggleClass('active open');
            }
        })
    })

    $(window).resize(function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $(menuItems).each(function () {
                $(menu).toggleClass('active open');
            })
        }
    })
});



