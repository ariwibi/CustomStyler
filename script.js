const box = document.querySelector('.box');
const input = document.querySelector('.input');

input.addEventListener('input', () => {
    // change the style with a input value
    const inputSplit = input.value.split(',')
    console.log(inputSplit);
    box.style.borderRadius = inputSplit[1];
    box.style.backgroundColor = inputSplit[0];
    // box.style.borderStyle = inputSplit[2] === '' ? 'hidden' : inputSplit[2];
})