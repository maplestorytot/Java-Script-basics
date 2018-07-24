# Java-Script-basics
Creating Interactive Pages with JavaScript
There are many other ways of using JavaScript to make your webpages more interactive.

In general, you will be responding to DOM events, which include:

click events (onclick, onmousedown, onmouseup, etc.)

keyboard events (onkeydown, onkeyup, onkeypress.)

window events (onload, etc.)

form events (onchange, onfocus, onblur, etc.)

The actions you perform as you respond to these events will generally fall into the following categories:

modifying HTML/text content: You may modify the contents of an HTML element in response to an event.

modify the innerHTML property of an element

add text to an element using the createTextNode method

add a new element using createElement and append it to an element using appendChild or insertBefore.

modifying the attributes of HTML elements: You may modify the attributes of an HTML element in response to an event, using the setAttribute or removeAttribute methods:

add or remove a class to an element

modify the src attribute of an image to change what is displayed

modify the href attribute of an anchor tag to change a link destination

modify the src attribute of a link element to change which stylesheet a page is using

modifying the styles of HTML elements: You may modify the styles of HTML elements in response to events using the element.style.property syntax:

modify the background color of an element when it's hovered over

modify the size of an element

modify the background image of a page in response to timer events