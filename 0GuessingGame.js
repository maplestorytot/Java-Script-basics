// program data:
var numberguess = Math.floor(Math.random() * 100) + 1;
var limit = 5; //number of tries
var tried = 0;
var myarray = [];
window.alert(numberguess);

for ( i = 0; i < limit; i++) {
    

        do{
            userguess = parseInt(prompt("Guess a number"));
        } while(isNaN(userguess)|| isCheckAlreadyUsed(userguess, myarray));
        //NaN is not a number true false
        //adding guess to array
        myarray[i] = parseInt(userguess);

        // if correct: let the user know they won
        if (numberguess == userguess) {            

            document.write(myarray+"You got it correct! Here were all your tries " + myarray);
            break;
        }
        // if incorrect: let the user know
        else {
                        tried++;

            sum=limit-tried;
            window.alert(myarray+ "you got it wront! You have this many tries left: " + sum);
        }
    
}

function isCheckAlreadyUsed(guessingnumber, usednumbers) {
    for (k = 0; k < usednumbers.length; k++) {

        if (guessingnumber == usednumbers[k]) {
            return true;
        }
       
    }
    return false;
}