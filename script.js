let menuIcon = document.querySelector('.menu-icon');
let showMenu = document.querySelector('.menu');
let langBtn = document.querySelectorAll('.lang>button')
console.log(langBtn)
if (window.matchMedia('(min-width: 769px)').matches) {
    $("#lng").appendTo($(".header__info"));
} else {
    $("#lng").appendTo($(".menu__container"));
}

// menu-burger event
menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active')
    $(showMenu).toggleClass('active open');
    document.body.classList.toggle('no-scroll')
    showMenu.scrollTop = 0;

    if (!menuIcon.classList.contains('active')) {
        menuIcon.classList.toggle('not-active')

    } else {
        menuIcon.classList.remove('not-active')
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

$(window).resize(function () {
    if (window.matchMedia('(min-width: 769px)').matches && window.matchMedia('(orientation: landscape)').matches) {
        if ($(showMenu).hasClass("open")) {
            $(showMenu).toggleClass('active deskWidth');
            $('body').toggleClass('no-scroll');
            $(menuIcon).addClass('not-active').removeClass('active');
        }
        $("#lng").appendTo($(".header__info"));
    } else {
        $("#lng").appendTo($(".menu__container"));
        if ($(showMenu).hasClass("open") && $(showMenu).hasClass("deskWidth")) {
            $(showMenu).toggleClass('deskWidth');
            $(showMenu).toggleClass('active');
            $('body').toggleClass('no-scroll');
            $(menuIcon).addClass('active').removeClass('not-active');
        }
    }
});