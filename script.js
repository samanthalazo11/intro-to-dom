/*
Part One
// Let's practice selecting DOM elements

// Selecting DOM Elements

// We'll use getElementByID

// const titleEl = document.getElementById('title');

// we'll use querySelector() when we don't have an id attribute

const titleEl = document.querySelector('.main-title');

// using the style prop to set a css property using a camelCased version of the css prop name
titleEl.style.fontSize = '35px';
titleEl.style.backgroundColor = 'grey';

// console.log(titleEl);

// select our p tag with a class of cool using querySelector()

const pEl = document.querySelector('.cool');

// console.log(pEl);

// let's chnage the content of a selected DOM element

// using innerHRML = used to retrieve or set content as HTML

pEl.innerHTML = 'Comments for <strong>today</strong';

// using textContent = used to retrieve or set content as TEXT

// pEL.textContent = 'Comments for <strong>today</strong>';

// we can use both properties to retrieve values

// console.log(pEl.innerHTML);
// console.log(pEl.textContent);

// using the style prop, change the color css property to an color of your choosing

pEl.style.color = 'orange';

const link = document.querySelector('a');

link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank');


// how to select multiple element using querySelectorAll

const liEls = document.querySelectorAll('.comment');

// this returns a NodeLIst - this is an array-like structure containing our collection of DOM nodes

// console.log(liEls);

liEls.forEach(function(liElement) {
    liElement.style.backgroundColor = 'orange';
});

*/

// Part two: It's time to discuss DOM evebents - the core of adding functionality to websites

// We'll add our first event listener to the DOM

// Step 1) select an element to element to register an event to

const btn = document.querySelector('button');

// step 2) add the event listener with addEventListener()

btn.addEventListener('click', function(evt) {
    /*

        Adds a feature that adds comments to our list of comments
        1) create a new comment li tag
        2) capture input value that the user gives us from the input tag
        3) set the textContent of the li tag to the input value from the input tag
        4) append the new li tag with textContent to the ul element

    */

    const li = document.createElement('li');
    const input = document.querySelector('input');
    li.textContent = input.value;
    document.querySelector('ul').appendChild(li);
    input.value = '';



});

// the two args we need at a minimum are the name  of the event and the event handler calling


const ul = document.querySelector('ul');

ul.addEventListener('click',function(evt) {
    if(evt.target.tagName !== 'LI') return;
    evt.target.style.textDecoration = 'line-through';
});