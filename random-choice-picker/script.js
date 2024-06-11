const textarea = document.getElementById('option-input');
const optionContainer = document.getElementById('options');

textarea.focus();

function createOption(optionName) {
  const getOptions = optionName
    .split(',')
    .filter((opt) => opt.trim() !== '')
    .map((opt) => opt.trim());
  optionContainer.innerHTML = '';
  getOptions.forEach((opt) => {
    const optionElement = document.createElement('span');
    optionElement.classList.add('tag');
    optionElement.innerText = opt;
    optionContainer.appendChild(optionElement);
  });
}

function addHighlight(opt) {
  opt.classList.add('highlight');
}

function removeHighlight(opt) {
  opt.classList.remove('highlight');
}

function returnOption() {
  const options = document.querySelectorAll('.tag');
  return options[Math.floor(Math.random() * options.length)];
}

function randomaizer() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = returnOption();
    addHighlight(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = returnOption();
      addHighlight(randomTag);
    }, 100);
  }, times * 100);
}

textarea.addEventListener('keyup', (e) => {
  createOption(e.target.value);
  if (e.key === 'Enter') {
    randomaizer();
    setTimeout(() => {
      e.target.value = '';
    }, 10);
  }
});
