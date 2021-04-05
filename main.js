

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.calculator_display')
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')

keys.addEventListener('click', e => {

    if (!e.target.closest('buttons')) return


    const key = e.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const  {type}  = key.dataset

    console.log(type);
})
