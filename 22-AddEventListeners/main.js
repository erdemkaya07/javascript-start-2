 const message1 = document.getElementById('message1')

function message() {

  console.log(message1.value)
  message1.value=''
}


const button = document.querySelector('button')
const buttonContainer = document.querySelector('.buttons')

button.addEventListener('click', message)



for(let i = 1; i <= 5; i++) {
  let button = document.createElement('button')
  button.id = 'btn' + i;
  button.innerText = 'button' + 1
  button.addEventListener('click', message)
  buttonContainer.appendChild(button)
}