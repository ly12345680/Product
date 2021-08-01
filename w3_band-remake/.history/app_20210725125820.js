const $= document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);
const Btns= $$('.js-buy-tickets')
const modal= $('.js-modal')
const modalClose=$('.modal-close')
const modalContainer= $('.js-modal-container')
const header= $('#header')
const moblieMenu=$('#moblie-menu')

moblieMenu.onclick= function() {
    const isClose= header.clientHeight===46;
    if (isClose) {
        header.style.height= 'auto'
    } else {
        header.style.height= null
    }
}











function showBuyTickets() {
    modal.classList.add('open')
}
function closeBuyTickets() {
    modal.classList.remove('open')
}


for (const Btn of Btns) {
    Btn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})