let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')


function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
    
}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        showTabs(idx)
    }
})


const offer_slide = document.querySelector('.offer__slider-wrapper')
const total = document.querySelector('#total')
const slides = document.querySelectorAll('.offer__slide');

total.textContent = "0" + offer_slide.childElementCount

let slidesindex = 0;

let num_picture = document.querySelector('#current')


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');




function slidesshow(n) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;
    slides[slidesindex].classList.remove('hide');

    num_picture.innerText = (slidesindex + 1).toString().padStart(2, '0')

    
}

next_btn.onclick = () => {
    slidesshow(1);
    num_picture.innerText = "0" + (slidesindex + 1);
};

prev_btn.onclick = () => {
    slidesshow(-1);
    num_picture.innerText = "0" + (slidesindex + 1);
};