'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function


// return the petString here
function bestPet(){
  let bestPet = 'dog';
  let petName = 'indiana';
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  return petString;
}


// call your function here
bestPet()


// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function
function greatPet(){
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
  return anotherPetString;
}

// call your function here
greatPet();


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?
let typeOfPet;
let nameOfPet;
function petsFunc(typeOfPet, nameOfPet){
  var petString = 'The best pet is a ' + typeOfPet + ' named ' + nameOfPet;
  return petString;
}
petsFunc();



