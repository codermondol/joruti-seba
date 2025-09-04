Question - 1:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

Here is the defference: 

getElementById: grabs a single element by its unique id (fastest and most direct).

getElementsByClassName: grabs multiple elements using this and returns a live list of all elements with a given class.

querySelector: It used to select the first element that matches any CSS selector.

querySelectorAll: grabs all elements matching a CSS selector, returning a static NodeList you can iterate.



Question - 2:
How do you create and insert a new element into the DOM?

Answer:

 Use document.createElement() to create a new element.

 example: 
 //create an element
  const newDiv = document.createElement('div');

  // add text using innerText, or innerHTML
  newDiv.innerText = "Hello, I am a new div!";

// select the parent Element
const parent = document.getElementById("container");

// and Append the Element
parent.appendChild(newDiv);


Question - 3:
What is Event Bubbling and how does it work?

Answer:

If an event handler is set for the element, the event handler is triggered. Then the event "bubbles up" to the elements parent. If an event handler is set for the parent, this event handler is triggered. The event continues to bubble, until it reaches the top


Question - 4:
What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events on its child elements.

Event Delegation Useful for Performance, Handles Dynamically Added Elements, Cleaner Code



Question - 5:
What is the difference between preventDefault() and stopPropagation() methods?

Answer:

Here is the difference between preventDefault() and stopPropagation() methods:

preventDefault(): Prevents the default action of an element from happening.

stopPropagation(): Prevents the event from propagating (bubbling up or capturing) to parent elements.




