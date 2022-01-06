var mainHead = document.querySelector('#main-header');

console.log(document.querySelector('#main-header').parentElement);
mainHead.parentElement.style.backgroundColor = '#f4f4f4';

var item = document.querySelector('.item');
console.log(item.lastElementChild);
item.lastElementChild.style.color = "red";
item.firstElementChild.style.color = "red"
console.log(item.lastChild); //Gives textNode
console.log(item.nextSibling); //Gives TextNode
console.log(item.nextElementSibling);
item.nextElementSibling.textContent = 'span';
console.log(item.previousElementSibling);
item.previousElementSibling.style.color = 'green';

//creating Elements
var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.setAttribute('title','Hello Div'); //add attr

var newDivText = document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);