let result;

const parent = document.querySelector('.parent');

result = parent.children[1].innerText = 'CHILD 222'

result = parent.firstElementChild;
result = parent.lastElementChild;

const child = document.querySelector('.child')

result = child;
result = child.parentElement;

result = child.nextElementSibling



console.log(result);