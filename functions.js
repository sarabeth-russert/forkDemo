'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function
function myBestPet(){
  let bestPet = 'dog';
  let petName = 'indiana';
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  return petString;
}
myBestPet();
// return the petString here


// call your function here



// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function
function anotherGreatPet(){
let myGreatPet = 'bunny';
let anotherPetName = 'opal';
let anotherPetString = 'The best pet is a ' + myGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
return anotherPetString;
}
anotherGreatPet();


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?


function greatPetB(anotherGreatPet, anotherPetName) {
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  return anotherPetString;
}
greatPetB();

// return the anotherPetString here
console.log(anotherGreatPet("bunny", "fred"))