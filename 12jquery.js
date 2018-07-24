//DOM ACCESS JQUERY
//$ accesses everything $(<selector>).method()
//selector is like in css id=#name,class=.name, 

//tag
var paragraphs = $('p');
//id
var pepper = $('#pepper');
//.html is .innerHTML
pepper.html("heyll");

//class
var list2 = $('.list2');
list2.html('hey');

//parent > child, changes everything here
var list2elements = $('ul > li');
list2elements.html('hi');

//.text()
pepper.text('hey');

//.attr to change an atrtribute eg links
$("#myLink").attr('href', "https://www.w3schools.com/jsref/met_node_contains.asp");

//.addClass() append a class can then style with css
$('#ol').addClass('MynewClass');

//EVENTS
//do this for multiple triggers for one event
$('#mybutton').on("click hover mouseover", function () {
    window.alert("hey nice one");
});

//single
$('#mybutton').click(function(){
    window.alert('hey');
})

//AJAX