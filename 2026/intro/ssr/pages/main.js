const formElement = document.querySelector('form');
const pElement = document.querySelector('p');

async function getAdvice() {
  pElement.textContent = 'Loading...';

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  pElement.textContent = data.slip.advice;
}

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  getAdvice();
});
