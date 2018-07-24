function myfunction(number, word, ending) {
    var sentence = "My special word is: " + word + " " + number + " " + ending;
    return sentence;
}
var returned = myfunction(window.prompt("What is a number"), window.prompt('What is a word'), window.prompt('What is an ending:?'));

document.write(returned);