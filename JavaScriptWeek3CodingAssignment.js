// 1. 
// This is the array labeled ages, and includes the listed values.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1. a. 
//Arrays are zero-based, so even though the length of the array is 8, the 93 is at a position 1 less than the length of the array so we would need: (length - 1)

    console.log(ages.length - 1); // the result should be 7 

// 1. b.	
// added the new age 98 to the array using the push method, and then repeated the subtraction from above with (length-1).

  ages.push(65);
    console.log(ages); // shows new array with addition of age 98 
    console.log(ages.length - 1); //gives new length of 8 

// 1. c.	
//create a new variable that calculates sum

let sum = 0  //this is the variable for the sum

//Create a for loop that iterates through the total age
// the for loop below iterates through the length of the ages to calculate the sum
for (let i = 0; i < ages.length; i++) { 
    sum += ages[i]; //this will calcuate the sum 
}    
    console.log(sum / ages.length);  // the sum above is divided by ages.length to get average of the array (32.77777777777778)

// 2.	
// This is the array labeled names, and includes the listed values.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2. a.	
//create a variable that holds the values of the names length

let namesSum = 0;

//create a loop to iterate through the names  
for(i = 0; i < names[i].length; i++); {
    namesSum += names[i].length; //this is the value to be added
} 
    console.log(namesSum); //this prints the average number of letters per name: 4

// 2. b.	

    console.log(names.join (" ")); // this concatenates the names from the array above, and the parameter (" ") creates the separate spaces 


// 3.	How do you access the last element of any array?

//to get the last element of an array, you would use arry[arry.length-1]
let lastElement = names[names.length-1];
    console.log(lastElement); //in this case, the last element is Bob 

// 4.	How do you access the first element of any array?

//to get the first element in an array, you use arry[0]

    console.log (names[0]);  //in this case, the first element is Sam

// 5.	
// we will be merging nameLengths elements with nameArrays elements

let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [12, 18, 27, 30, 35, 40]; 

for (let i = 0; i < nameLengths.length; i++) {

}

const merged = nameLengths.concat(namesArray); // this variable holds the concat method to merge the two arrays 
    console.log(merged); //creates adds names from namesArray to  nameLengths and creates new nameLengths array

//6. 
//created a variable to hold the sum
lengthsSum = 0;

for (let i = 0; i < nameLengths.length; i++) {   //will iterate through the array
    lengthsSum += nameLengths[i]; //this will calcuate the sum 
}    
    console.log(lengthsSum); //sum for nameLengths array 162

// 7.	
// variables to hold the repeated word and concatenation
let concateWord = ''; // holds for the repeated word 
let repeatedWord = concateN ("beagle", 4);  //beagle will repeat 4 times

// function declaration
function concateN (word, n) { 

for (let i = 0; i < n; i++ ) {  //loop that holds iteration
    concateWord += word;  
  }
    return concateWord;  
}

    console.log(repeatedWord);  //calls for the word to be repeated 4 times

// 8.	
//the function is createFullName; the parameters are firstName and lastName

function createFullName(firstName, lastName){         
    console.log(firstName + " " + lastName);
}   // these are the rules for what the function does, but the function still has to be called below

createFullName("Natalie" , "Goodwin"); //calls the function and prints the full name with a space




// 9.	

//need to know if total of all elements in numArray is greater than 100, print true

//this is the numArray
let numArray = [20, 30, 40, 50, 60]; 
let numArraySum = numArray.reduce(function(acc, cur) {
     return acc + cur // this calculates total of all elements in array
 });  
        //if-else statement to evaluate if above sum is greater than 100
     if (numArraySum > 100) {
          console.log(true);  //will print true
    }   else {
          console.log(false);  //will not be considered because first evaluation is true
    }
  
// 10.	
//use reduce method to calculate sum

    let totalSum = numArray.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
}); 
//divide totalSum from numArray length to get average
    console.log(totalSum / numArray.length); // average is 40

// 11.	
//need 2 arrays of numbers

let numOne = [60, 100 ];    // avg 80; this will be greater and return true
let numTwo = [10, 20];  // avg 15

//need function

let numSum = numOne.reduce(function(acc, cur)  {
    return acc + cur //calculates sum of first array
});

    console.log(numSum / numOne.length); //will print average: 80 for first array

let numSum2 = numTwo.reduce(function(acc, cur){ 
    return acc + cur // calculates  sum of second array
}); 

    console.log(numSum2 / numTwo.length); // will print average: 15 for second array

//need if-else statement to compare two arrays above 

if (numOne > numTwo) {
      console.log(true);  //will print true
}   else {
      console.log(false);  //will not be considered because first evaluation is true
}

// 12.  
//boolean isHotOutside, number moneyInPocket
// returns true if it is hot outside, and if money in pocket is > 10.50
//create variables for the parameters
let isHotOutside = true; 
let moneyInPocket = 10.50;

function willBuyDrink (isHotOutside, moneyInPocket) {
      console.log(true); // this is the rule to print true
} 
willBuyDrink(true, 12.00) //this is the invocation for the function 

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//This function will alert someone of the current time, and upcoming event with four parameters: greeting, timeCurrent, event, eventTime. 
//I created it as a way of alerting someone of a meeting, if it is part of an online calendar or date book. 

function appointmentBook (greeting, timeCurrent, event, eventTime) {
    console.log("Hello, " + greeting + "." + " The time is now" + " " + timeCurrent + " " + event + " starts at " + eventTime)
}

  appointmentBook ("Paul", "10:00 a.m.", "Meeting with Angela", "10:30 a.m.")







