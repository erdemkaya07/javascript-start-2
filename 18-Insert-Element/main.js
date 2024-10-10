// insertAdjacentElement - Bir elementi istedigimiz pozisyona gore eklememizi saglar

function insertElement() {
  const ul = document.querySelector('#myList')
  const h1 = document.createElement("h1")
  h1.textContent = "insertAdjacentElement"

  ul.insertAdjacentElement("beforebegin", h1)
}
insertElement()


// insertAdjacentText - Bir text icerigini istedigimiz pozisyona gore eklememizi saglar


function insertText () {
  const item = document.querySelector('li:first-child')
  item.insertAdjacentText("afterend" , 'insertAdjacentText')
}

insertText()


// insertAdjacentHTML - bir HTML icerigini istedigimiz pozisyona ekleme

function insertHTML () {
  const item = document.querySelector('li:nth-child(2)')
  item.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>')
}
insertHTML()

// Insert before

function insertBefore () {
  const ul = document.querySelector('#myList')

  const li = document.createElement('li')
  li.textContent = 'insertBefore'

  const secondLi = document.querySelector('li:nth-child(2)')

  ul.insertBefore(li, secondLi)
}

insertBefore();




/* 

<!-- beforebegin -->
<div>
  <!-- afterbegin -->
   item
   <!-- beforeend -->
</div>
<!-- afterend -->

*/