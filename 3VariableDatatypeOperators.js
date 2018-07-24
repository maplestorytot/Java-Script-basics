//making variables
var loser=34;
loser=31;
var mystring="hey";
mystring=mystring+loser; //when adding strings and int, it doesn't matter.
window.alert(mystring);
document.write('heyy');

//Data types:
//number: int and doubles
//string
//boolean
var x=43;
typeof x; //TYPE OF can use this to return type of the varible
var y="43";
x="42";
parseInt(x);
document.write("variable x is type : "+ typeof x);

//OBJECTS
var client={
    username:"maplestory",
    password:"hihihi",
    age:25,
    //sex, can't leave it empty or else will error out
};
document.write('heyy');
//accessing objects
document.write(client.age);
document.write(client.sex="Male");

