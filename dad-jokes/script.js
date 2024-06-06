const button = document.getElementById('btn-joke');
const jokeElement = document.getElementById('joke');

const configuration = {
  headers: {
    Accept: 'application/json',
  },
};

const jokeApiUrl = 'https://icanhazdadjoke.com';
jokeElement.innerHTML = 'loading...';

button.addEventListener('click', generateJoke);

async function generateJoke() {
  try {
    const response = await fetch(jokeApiUrl, configuration);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
  } catch (error) {
    jokeElement.innerHTML = `🫠 Sorry we have problems -  ${error.message}`;
  }
}

generateJoke();
