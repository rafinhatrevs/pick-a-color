const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// no click
btn.addEventListener('click', function () {
    const random_color = getRandomColor();
    document.body.style.background = colors[random_color]; // aplicando a cor ao background
    color.textContent = colors[random_color];
});

// gerar os numeros randomicos
function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}