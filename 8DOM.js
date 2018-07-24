//editting element with .innerHtml
var editThis=document.getElementById('day');
editThis.innerHTML="good";


//getting editting attributes src="link.com"
var getLink=document.getElementById("myLink").getAttribute('href');
//getLink.innerHTML="https://www.bing.com/"; doesn't work

window.alert(getLink);
var editLink=document.getElementById("myLink").setAttribute("href","https://www.bing.com/"  )

//editting CSS properties

//changing it
document.getElementById('myPara').style.color="red";
//getting it
var changingparagraph=document.getElementById('myPara').style.color;
//changingparagraph.innerHTML="blue"; this doesn't work
window.alert(changingparagraph);


//CREATING ELEMENTS
var newHeading=document.createElement('h1');
newHeading.innerHTML=('hey');//changing newly created heading
var newItem = document.createElement("li");
newItem.innerHTML='new item';
//CREATING text nodes no tag, can attach as child
var newText=document.createTextNode("hey this is a text node");

//Duplicating elements:
var originalList=document.getElementById('myList');
var exactCopy=originalList.cloneNode(true);

//ATTACHING AND REMOVING ELEMENTS:
document.getElementById('myList').appendChild(exactCopy);

//inserting before element.insertBefore(newChild, existingChild);
var listitems=originalList.children; //get all children of list
originalList.insertBefore(newItem,listitems[1]);

//Moving item:using append, element.children[i]
var list1=document.getElementById('myList');
var list2=document.getElementById('secondList');

var itemMoving=list1.children[0];
list2.children[1].appendChild(itemMoving); //moving it to after the second item list 2

list2.insertBefore(itemMoving,list2.children[0]); //moving it to the first item list 2
//note they remove it when moving! so can't duplicate.


//DELETING ITEMS
var removedItem=list2.removeChild(list2.children[2]);
var newP=document.createElement('p');
newP.innerHTML="you removed" +removedItem.innerHTML; //NOTE MUST ADD .innerHTML
document.body.appendChild(newP);

//types of events //    element.onevent = handlerFunction;

//calling function
list1.onclick=myfunction();
function myfunction(){
    list1.innerHTML="hey";
}
//making function right beside
list1.onmouseup=function (){
    list1.innerHTML="hey";
};
//using add event listener
list2.addEventListener('click',myfunction2);

function myfunction2(){
    list2.innerHTML="hey";
}
/*
mouseout: fired when a user moves the mouse cursor out of the boundaries of an element.
mousemove: fired when a user moves the mouse within an element.
mouseenter: fired when a user moves the mouse cursor into the boundaries of an element.
mousedown: the first part of a mouse click- fired when a user clicks the mouse down (doesn't include the release of the click)
mouseup: the release of a mouse click- fired when a user releases a mouse press

The change event
The change event is fired when a user modifies an input field.

This is useful if you wish to validate user input before a form is submitted.

The load event
The load event is fired when an element finishes loading.

This is often used to perform an action once the body of the page has finished loading, to ensure that all content has loaded before performing additional actions.

document.body.onload = doStuff;*/