const buttons = document.querySelectorAll("[effectButton]");
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    const windowTop = window.pageYOffset + 900;

    buttons.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('slideEffect')
        } else {
            element.classList.remove('slideEffect')
        }

    })
})

