//same as c#

//while loop
var count = 0;
while(count<10)
 {
   document.write("hey there");
   count++;
 }

 //for loop note RETURN in LOOP exits!
 var mynumber=5;
 for(i = 0;i<10;i++)
 {
    document.write(i);
    
 }

 es=23;
 //arrays can be mixed, like python but declared like c#
 var myarray1=[3,"yes",es, 233,"3",false]
 //myarray will return it in a string like so:
 //3,yes,23,233,3,false
 document.write(myarray1);

 //using for loop to do stuff like c#
 //using input to create an array
 var arraysize=window.prompt("what size of array of numbers?: ")
 var myarray=[];
 for(i=0;i<arraysize;i++)
 {
    myarray[i]=window.prompt("Number: "+ parseInt(i+1) + " is?: ");

 }


 //.length
 //finding sum of array of numbers
 sum=0;
 for( i=0;i<myarray.length;i++)
 {
    sum+=parseInt(myarray[i]);
    
 }
 document.write("the sum of your numbers: "+ myarray+ " is : "+ sum);
