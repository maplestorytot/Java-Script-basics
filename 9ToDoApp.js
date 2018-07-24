/*User can enter a new task using textbox and submit button
List of tasks are displayed on the page
User can click a button to clear list of tasks
User can mark a task as complete to remove it from the list*/
var textBox = document.getElementById("inputtext");
var addButton = document.getElementById('add');
var listItem = document.getElementById('listItems')
var clearButton = document.getElementById('clear');
var undoButton = document.getElementById('undo');


function addingItem() {
    var text = textBox.value;
    if (text != "") {
        //if want to add a list item, need to add a child textnode to the list item before can add to list
        var newItem = document.createElement('li');
        var newValue = document.createTextNode(text);
        var buttonText = document.createTextNode('Done');
        var doneButton = document.createElement('button');
        doneButton.appendChild(buttonText);
        newItem.appendChild(newValue);
        newItem.appendChild(doneButton);
        listItem.appendChild(newItem);
        //can only put event here before exists here?
        doneButton.addEventListener('click', done);

        //clearing the textbox
        textBox.value = "";
    }
    else {
        window.alert("Please enter a valid Item");

    }
}
function clear() {
    length = listItem.children.length
    for (var i = 0; i < length; i++) {
        listItem.removeChild(listItem.children[0]);
    }
    //listItem.removeChild(listItem.children); this doesn't work only 1 at a time
}   //also could have done it much easier
//listItem.innerHTML='';

//NOTE event is THIS in c#, the object that called it.
function done(event) {
    var taskItem = event.target.parentElement;
    listItem.removeChild(taskItem); 


}

addButton.addEventListener('click', addingItem);
clearButton.addEventListener('click', clear);
