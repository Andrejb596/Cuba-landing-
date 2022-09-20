const items = document.querySelectorAll('.menu__list-link');
items.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.menu__list-link.active').classList.remove('active');
        item.classList.add('active');

    })
})

$(function () {
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/arrow-left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/arrow-right.svg" alt="right"></button>',
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplayspeed: 2000,
                }
            }
        ],
    });

})

$('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
});


