const btns = document.querySelectorAll('.rate-btns');
const submit = document.querySelector('.submit');
const cardCont = document.querySelector('.card-content'); 

const afterRateContent = document.querySelector('.after-tate-content');
const rateValue = document.querySelector('.rate-value');
afterRateContent.remove();

let rate = 0;
btns.forEach((btn, index) =>{
  btn.addEventListener('click', () =>{
    rate = 1 + index;
    btns.forEach((btn) =>{
      btn.classList.remove('action')
    });
    btn.classList.toggle('action');
  })
})

submit.addEventListener('click', () => {
  cardCont.replaceWith(afterRateContent)
  rateValue.textContent = " " + rate + " "
});