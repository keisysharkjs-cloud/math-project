const button = document.querySelector('#facts__btn');
const message = document.querySelector('.facts__container');

function handleClick () {
  message.classList.toggle('active');
}

button.addEventListener('click', handleClick);