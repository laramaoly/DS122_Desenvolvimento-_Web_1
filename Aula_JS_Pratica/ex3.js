const buttonIncrement = document.getElementById('incrementar');
const buttonDecrement = document.getElementById('decrementar');
const buttonReset = document.getElementById('resetar');
const display = document.querySelector('#Exercicio3 p');

let count = 0;

buttonIncrement.addEventListener('click', () => {
    count++;
    display.textContent = count;
});     
buttonDecrement.addEventListener('click', () => {
    count--;
    display.textContent = count;
});     
buttonReset.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
}); 