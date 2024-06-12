
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


nameInput.addEventListener('input', function() {

  const trimmedValue = nameInput.value.trim();

  
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});