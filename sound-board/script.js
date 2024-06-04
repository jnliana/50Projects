const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons-container');

function stopAudio() {
  sounds.forEach((sound) => {
    const soundEle = document.getElementById(sound);
    soundEle.pause();
    soundEle.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.innerText = sound;
  button.addEventListener('click', () => {
    stopAudio();
    document.getElementById(sound).play();
  });
  buttons.appendChild(button);
});
