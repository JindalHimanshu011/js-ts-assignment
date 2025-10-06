// //Today's Planning
// // DOM selection: getElementById, querySelector
// // Event handling: addEventListener
// // Updating elements (innerText, value, classList)
// // ES6+ features: template literals, destructuring, spread/rest

// document.getElementById('id')
// //Selects a single element with the specified id.
// //By Class Name

// document.getElementsByClassName('className')
// //Returns a live HTMLCollection of elements with the specified class.
// //By Tag Name

// document.getElementsByTagName('tagName')
// //Returns a live HTMLCollection of elements with the specified tag name.
// //By Name Attribute

// document.getElementsByName('name')
// //Returns a NodeList of elements with the specified name attribute.
// //Using Query Selectors

// document.querySelector('selector')
// //Selects the first element that matches the CSS selector.
// document.querySelectorAll('selector')
// //Returns a static NodeList of all elements matching the CSS selector.


// //2EVENT

// //basic
// //<button onclick="alert('Button clicked!')">Click me</button>

// //DOM Level 0 Event Handlers
// let btn = document.querySelector('#btn');
// btn.onclick = function() {
// alert('Button clicked!');
// };

// //DOM Level 2 Event Handlers
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(event) {
// alert('Button clicked!');
// });


// //Advanced Event Handling
// let btn = document.querySelector('#btn');
// function handleClick() {
//    alert('Button clicked!');
// }
// btn.addEventListener('click', handleClick);
// btn.removeEventListener('click', handleClick);



// //UPDATE ELEMENT

// //1. Updating Content
// // document.getElementById("example").innerHTML = "<p>New Content</p>";
// // document.getElementById("example").textContent = "New Text Content";

// // 2. Updating Attributes
// // document.getElementById("example").value = "new text";
// // document.getElementById("example").id = "new-id";



