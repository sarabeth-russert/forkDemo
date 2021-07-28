'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  let sum = a + b
  // The sum of 4 and 7 is 11.
  let string = 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.';
  console.log(string);
  return [sum, string];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
//  Problem 2
// Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:



// Here is the test for sum(); uncomment it to run it

function multiply(a, b) { //eslint-disable-line
  let product = a * b
  // The sum of 4 and 7 is 11.
  let string = 'The product of ' + a + ' and ' + b + ' is ' + sum + '.';
  console.log(string);
  return [product, string];
}

testMultiply(5, 9)

"The product of 5 and 9 is 45."

// Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line

}

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:


Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
 
function sumAndMultiply(a, b, c) { //eslint-disable-line
// your previous function sum returns an array. let answer = sum(10, 5)[0];
function sum()
function multiply(a, b) { //eslint-disable-line
  let product = a * b
  // The sum of 4 and 7 is 11.
  let string = 'The product of ' + a + ' and ' + b + ' is ' + sum + '.';
  console.log(string);
  return [product, string];
}


