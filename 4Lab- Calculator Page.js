//GETTING VALUES USING PROMPTS AND UDATING AN HTML PAGE
//Getting user to input name
var name=window.prompt("What is your name: ?")
//using id, changing the phrase, getelement lets us select that
var greetingParagraph=document.getElementById('greeting');
//.innerHTML to change that id paragraph 
greetingParagraph.innerHTML=greetingParagraph.innerHTML+", "+ name;

//USING PARSE TO Cast to int
var operand1=parseInt(window.prompt("What is your first operand?:" ));
var operand1Line=document.getElementById('operand1');
operand1Line.innerHTML+=operand1;

var operand2=parseInt(window.prompt("What is your second operand?:" ));
var operand2Line=document.getElementById('operand2');
operand2Line.innerHTML+=operand2;

//doing the operations
//old way
var additionLine=document.getElementById('addition');
additionLine.innerHTML+=operand1+operand2;



//sum=operand1+operand2;
//document.getElementById('addition').innerHTML=operand1+" plus "+operand2+" equals : "+sum;
//new way
difference=operand1-operand2;
document.getElementById('subtraction').innerHTML=operand1+" minus "+operand2+" equals : "+difference;

product=operand1*operand2;
document.getElementById('multiplication').innerHTML=operand1+" times "+operand2+" equals : "+product;

quotient=operand1/operand2;
document.getElementById('division').innerHTML=operand1+" divivded by "+operand2+" equals : "+quotient;

modulusanswer=operand1%operand2;
document.getElementById('modulus').innerHTML=operand1+" modulus by "+operand2+" equals : "+modulusanswer;

