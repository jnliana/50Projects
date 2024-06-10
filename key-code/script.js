const infoBox = document.getElementById('key-information');
const instructions = document.getElementById('instructions');

function keyInfo(e) {
  instructions.classList.add('hide');
  infoBox.innerHTML = `
        <div class="box">
        <small>Event.key</small>
        ${e.key}
        </div>
        <div class="box">
        <small>Event.keyCode</small>
        ${e.keyCode}</div>
        <div class="box">
        <small>Event.Code</small>
        ${e.code}</div>
    `;
  console.log('e', e);
}

window.addEventListener('keydown', keyInfo);
