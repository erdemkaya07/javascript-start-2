const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const items = document.querySelectorAll('.items')

function fn() {
  console.log(h1.classList);
  console.log(h1.className);

  /* h1.classList.add('red')
  h1.classList.remove('red') */
 /*  h1.classList.toggle('red') */ // her tiklama ile statuyu degistirir
  /* h1.classList.replace("f20", 'f22');  *///Varolani kaldirir yerine yenisi ekler

  for(i=0; i < items.length; i++){
    items[i].classList.add('active')
  }
}

button.addEventListener('click', fn)

