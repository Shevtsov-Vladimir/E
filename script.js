let menuIcon = document.querySelector('.menu-icon');
let showMenu = document.querySelector('.menu');
let body = document.querySelector('.scroll');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active')
    showMenu.classList.toggle('active')
    body.classList.toggle('active')

    if(!body.classList.contains('active')) {
        body.classList.toggle('not-active')

    }else {
        body.classList.remove('not-active')
    }

    if(!menuIcon.classList.contains('active')) {
        menuIcon.classList.toggle('not-active')

    }else {
        menuIcon.classList.remove('not-active')
    }

    // if(body.style.overflow === 'hidden') {
    //     document.body.style.overflow='scroll';
    // } else {
    //     document.body.style.overflow='hidden';
    // }

    if(!showMenu.classList.contains('active')) {
        showMenu.classList.toggle('not-active')

    }else {
        showMenu.classList.remove('not-active')
    }
    
});

