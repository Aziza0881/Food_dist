const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')
const current = document.querySelector('#current')
console.log(slides);
let slideIndex = 1

slideShow(slideIndex)

function slideShow(n) {
    current.innerHTML = '0' + n

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex - 1].classList.remove('hide')
}

next_btn.onclick = () => {
    if (slideIndex < slides.length) {
        slideIndex++
        slideShow(slideIndex)
    }
}

prev_btn.onclick = () => {
    if (slideIndex > 1) {
        slideIndex--
        slideShow(slideIndex)
    }
}



let tabheader_items = document.querySelectorAll('.tabheader__item')
let tabcontents = document.querySelectorAll('.tabcontent')

tabheader_items.forEach(item => {
    item.onclick = () => {
        tabheader_items.forEach(item2 => {
            item2.classList.remove('tabheader__item_active')
        });
        item.classList.add('tabheader__item_active')
        tabcontents.forEach(item2 => {
            item2.style.display = 'none'
            if (item2.id == item.id) {
                item2.style.display = 'flex'
            }
        });
    }
});

tabheader_items.forEach(item => {
    if (item.classList.contains('tabheader__item_active')) {
        tabcontents.forEach(item2 => {
            item2.style.display = 'none'
            if (item2.id == item.id) {
                item2.style.display = 'flex'
            }
        });
    }
});