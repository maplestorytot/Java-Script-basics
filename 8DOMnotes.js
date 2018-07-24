//ways to access a specific element:
//by id
var id=document.getElementById("name");
//by tag,multiple
var images=document.getElementsByTagName("Images");
firstImage=images[0];//can be used like a array to access elements

//by class, first instance in that class
var byclass=document.getElementsByClassName('classname')

var r=document.querySelector('.class');
var d=document.querySelectorAll(".class")
/*
document.head returns the <head> element of the page.

document.body returns the <body> element of the page.

document.title returns the title of the document

document.forms returns a collection of all <form> elements on the page.

document.images returns a collection of all <img> elements on the page.

document.scripts returns a collection of all <script> elements on the page. */










//HOW TO ACCESS CHILD AND PARENT
var item = document.getElementById("myListItem");
var parentList = item.parentElement; 

var myList = document.getElementById("myList");
var listChildren = myList.children;

//only get the first item of the element
parentList.firstElementChild

//getting elements in an elements, more specific
var hey = document.getElementById("myListItem").getElementsByClassName('myclass').querySelector('classes');
