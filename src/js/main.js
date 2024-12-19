const first = {
    view: document.querySelector('.slider__mobile__view'),
    leftButton: document.querySelector('.slider__mobile__button__left'),
    rightButton: document.querySelector('.slider__mobile__button__right'),
    slides: document.querySelectorAll('.slider__mobile__view__slide')
}

const second = {
    view: document.querySelector('.why__mobile__slider__view'),
    leftButton: document.querySelector('.why__mobile__button_left'),
    rightButton: document.querySelector('.why__mobile__button_right'),
    slides: document.querySelectorAll('.why__mobile__slider__view__slide')
}

const third = {
    view: document.querySelector('.sponsors__mobile__slider__view__container'),
    leftButton: document.querySelector('.sponsors__mobile__slider__button_left'),
    rightButton: document.querySelector('.sponsors__mobile__slider__button_right'),
    slides: document.querySelectorAll('.sponsors__mobile__slider__view__container__slide')
}

const forth = {
    view: document.querySelector('.how__slider__view'),
    leftButton: document.querySelector('.how__slider__button_left'),
    rightButton: document.querySelector('.how__slider__button_right'),
    slides: document.querySelectorAll('.how__slider__view__slide')
}

const makeSlider = (params) => {
    const {view, leftButton, rightButton, slides} = params

    const slideWidth  = slides[0].getBoundingClientRect().width
    let currentSlide = 1;
    let offset = 0

    leftButton.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            offset += slideWidth;
            view.style.transform = `translateX(${offset}px)`;
        }
    })

    rightButton.addEventListener('click', () => {
        if (currentSlide < slides.length) {
            currentSlide++
            offset -= slideWidth;
            view.style.transform = `translateX(${offset}px)`;
        }
    })
}

makeSlider(first)
makeSlider(second)
makeSlider(third)
makeSlider(forth)

