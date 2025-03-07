const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const button = document.querySelector('.count')
const respond = document.querySelector('.respond')
const cost = document.querySelector('.cost')
const error = document.querySelector('.error')

error.textContent = 'Uzupełnij wszystkie pola'

const textCheck = () => {

    
    if (price.value.trim() == '' && people.value.trim() == '' && tip.value == 0) {
        error.style.display = 'block'; // Wyświetl błąd
        respond.style.display = 'none'
    } else {
        math()
        error.style.display = 'none';
    }
};

const math = () =>{

    const newPrice = parseFloat(price.value)
    const newPeople = parseFloat(people.value)
    const newTip = tip.value

const sum = (newPrice + newPrice * newTip) / newPeople
     
    respond.style.display = 'block'

    cost.textContent = `${sum.toFixed(2)}`

price.value = '';
people.value = '';
tip.value = '';
}

button.addEventListener('click', textCheck)