const button = document.querySelector('.subscribe');
const bell = document.querySelector('.bell-icon')
button.addEventListener('click', changeColor);
function changeColor() {
  bell.classList.toggle('fill-icon');
  }