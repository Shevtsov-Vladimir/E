let menuIcon = document.querySelector('.menu-icon');
let showMenu = document.querySelector('.menu');

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active')
    showMenu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
    showMenu.scrollTop = 0

    if (!menuIcon.classList.contains('active')) {
        menuIcon.classList.toggle('not-active')

    } else {
        menuIcon.classList.remove('not-active')
    }

    $(window).resize(function () {
        if (showMenu.classList.contains('active') && (document.documentElement.clientWidth > 768)) {
            showMenu.classList.remove("active");
            menuIcon.classList.remove('active')
            showMenu.classList.toggle('active')
            document.body.classList.toggle('no-scroll')

        }
    });
});

window.addEventListener('scroll', () => {
    let scrollDisntance = window.scrollY;

    let listItems = [
        document.getElementById('home'),
        document.getElementById('about'),
        document.getElementById('skills'),
        document.getElementById('portfolio'),
        document.getElementById('contacts')];

    listItems.forEach((el, i) => {
        if (el.OffsetTop = document.querySelector('.menu').clientHeight <= scrollDisntance) {
            document.querySelectorAll('.menu li').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('.menu li ')[i].querySelector('li').classList.add('active');
        }
    });
});