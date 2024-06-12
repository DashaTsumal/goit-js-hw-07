function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Clear the input after creating boxes
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    // Clear the existing boxes
    boxesContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});