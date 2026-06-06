const pElement = document.querySelector('p');
const buttonElement = document.querySelector('button');

async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  return data;
}

buttonElement.addEventListener('click', async () => {
  const advice = await getAdvice();
  pElement.textContent = advice;
});
