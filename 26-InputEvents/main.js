const input = document.getElementById('input')
const title = document.getElementById('title')
const checkbox = document.getElementById('checkbox')
const select = document.getElementById('select')

function onInput(e) {
  console.log(e.key)
  title.textContent = e.target.value
}



function onFocus(e) {
  console.log('focus')
  input.style.outlineColor = "green"
}


function onBlur(e) {
  console.log('blur')
}

function onChange(e) {
  console.log(e.target.checked)
}
function onSelected(e) {
  console.log(e.target.value)
}

input.addEventListener('input', onInput)
input.addEventListener('focus', onFocus)
input.addEventListener('blur', onBlur)
checkbox.addEventListener('change', onChange)
select.addEventListener('change', onSelected)