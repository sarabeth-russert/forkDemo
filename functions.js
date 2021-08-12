'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function

let bestPet = 'dog';
let petName = 'indiana';
let petString = 'The best pet is a ' + bestPet + ' named ' + petName;

// return the petString here


// call your function here



// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function


function anotherGreatPet(){
let anotherGreatPet = 'bunny';
let anotherPetName = 'opal';
let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
return anotherGreatPetString;
}


anotherGreatPet()


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

let anotherGreatPet = 'bunny';
let anotherPetName = 'opal';
let petDescription = 'he is fluffy!'

function greatPetA(anotherGreatPet, anotherPetName, petDescription) {
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName + ' and ' + petDescription;
  return anotherPetString;
}

// return the anotherPetString here
greatPetA();
