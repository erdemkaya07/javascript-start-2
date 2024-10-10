const li = document.createElement("li");
li.innerText = "item 5"

const ch = document.createElement("input");
ch.type ='checkbox'
ch.className = 'ch1'

li.appendChild(ch)
document.getElementById('myList').appendChild(li);
