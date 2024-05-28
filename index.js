const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const random_color = getRandomColor();
    document.body.style.background = colors[random_color];
    color.textContent = colors[random_color];
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}