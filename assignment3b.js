/*METHODS OF STRING
1.SLICE METHOD
it extracts a part of the string and returns the extracted part in a new string
the method takes two parameters: the start position and the end
*/
var str="delhi,goa,kerala";
var res=str.slice(7-10);
//output will be =goa

/*2.SUBSTRING
it is similar to the slice function.
the only difference is that the second parameter specifies the length of the extracted path.
 */
var str="delhi,goa,kerala";
var res=str.substr(7,3);
//output will be = goa

/*3.REPLACE
this method replaces a specified value with another value in the string.
 */
str="india has seven union territories"
var x=str.replace("seven","nine");

/*4.TRIM
it removes whitespace from both side of the string
*/
var str = "       Hello World!        ";
alert(str.trim()); 


/*METHODS OF ARRAY
1.CHANGING ELEMENTS
array elements are accessed using their index numbers
 */
var places = ["delhi", "Orissa", "Ajmer", "Manali"];
 places[2] = "himachal";        
 // Changes the third element of places to "himachal"

 /*2.DELETING ELEMENTS
 elements can be deleted by using the JavaScript operator delete.
  */
 var places = ["delhi", "Orissa", "Ajmer", "Manali"];
delete places[2];           
// Changes the third element in places to undefined 

/*3.SPLICING AN ARRAY
method can be used to add new items to an array
The splice() method returns an array with the deleted items
 */
var places = ["goa", "Orissa", "Asia", "Mexico"];
 places.splice(2, 0, "himachal", "Kerala"); 
 //the first parameter defines the position where the new element should be added
 //the second parameter defines how many elements should be deleted
 //the other parameters define the new elements to be added

 
