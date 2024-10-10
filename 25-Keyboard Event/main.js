const input = document.getElementById('text');

function onKeyPress() {console.log('onKeyPress')}
function onKeyUp() {console.log('onKeyUp')}
function onKeyDown() {console.log('onKeyDown')}


input.addEventListener('keypress', onKeyPress);
input.addEventListener('keyup', onKeyUp);
input.addEventListener('keydown', onKeyDown);