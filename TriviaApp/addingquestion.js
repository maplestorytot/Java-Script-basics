var questionForm = document.getElementById("add-question");
questionForm.onsubmit = addingQuestion;

function addingQuestion() {
    var question = document.getElementsByName("question")[0].value;
    var choiceA = document.getElementsByName("choiceA")[0].value;
    var choiceB = document.getElementsByName("choiceB")[0].value;
    var choiceC = document.getElementsByName("choiceC")[0].value;
    var choiceD = document.getElementsByName("choiceD")[0].value;
    var correct = document.getElementsByName("correct")[0].value;

    var newQuestion = {
        question: question,
        choice1: choiceA,
        choice2: choiceB,
        choice3: choiceC,
        choice4: choiceD,
        correct: correct
    };
    //returns array
    if (localStorage.getItem("questions")) {
        var items = JSON.parse(localStorage.getItem("questions"));

        JSON.parse(localStorage.getItem("questions"));
        items.push(newQuestion);
        //remaking it into a string
        localStorage.setItem("questions", JSON.stringify(questions));
        console.log(items.innerHTML);

    }
    else {
        var newListQ = [newQuestion];
        localStorage.setItem("questions", JSON.stringify(newListQ));
        console.log(items.innerHTML);

    }
    questionForm.reset();
    return false;

}