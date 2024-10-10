let result;


result = document.getElementsByClassName('item');
result = document.getElementsByClassName('item');

const items = document.getElementsByClassName('item');

for(i = 0; i < items.length; i++){
  /* console.log(items[i]); */
}


// Asagida ki for dongusu farkli bir yazim turudur ve ayni islemi gorur 
// fark index numarasi belirtmeye gerek yoktur
for(let item of items) {
  item.style.color='red';
}

/* console.log(result); */