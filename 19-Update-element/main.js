function replaceItem1 () {
  const firstItem = document.querySelector('li:first-child')

  const li = document.createElement('li');
  li.textContent = 'Update Item'

  firstItem.replaceWith(li);
}
/* replaceItem1() */

function replaceItem2 () {
  const secondItem = document.querySelector('li:nth-child(2)')

  secondItem.innerHTML = 'Updated itemm' // altinda ki icerigi gunceller
  secondItem.outerHTML = '<li>Updated itemm</li>' // elementi tamamen guncelledigi icin LI etiketlerini aciyoruz

}
/* replaceItem2() */

function replaceAllItem() {
  const items = document.querySelectorAll('li');
  
  for(i = 0; i < items.length; i++){
/*     items[i].outerHTML = "<li>ReplaceAll</li>"
    items[i].innerHTML = "ReplaceAll" */
    items[i].innerText = "ReplaceAllText"

    if(i == 1){ //fordan donen sadece bir index i guncellemek istedigimde 
      items[i].innerHTML = "Second Item"
    } else {
      items[i].innerHTML = "ReplaceAll"
    }
  }
}
replaceAllItem()



