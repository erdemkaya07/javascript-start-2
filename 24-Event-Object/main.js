const div = document.querySelectorAll('div')


// Eger ki click eventlerini object hallinde gormek istersem 
// fonksiyon parametresi "e" yazabilirim

function onClick(e) {
  /* console.log(e) */
  /* console.log(e.target) */
  //console.log(e.timeStamp)
 /*  console.log(`X Ekseni : ${e.clientX}`)
  console.log(`Y Ekseni : ${e.clientY}`) */
  console.log(`Offset X Ekseni : ${e.offsetX}`)
  console.log(`Offset Y Ekseni : ${e.offsetY}`)
}

div[0].addEventListener('click', onClick)
div[1].addEventListener('click', onClick)
div[2].addEventListener('click', onClick)



function onclick() {
  
}

document.querySelectorAll('a').addEventListener('click', e => {
  e.preventDefault();
})