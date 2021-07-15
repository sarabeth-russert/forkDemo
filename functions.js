'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function

let bestPet = 'dog';
let petName = 'indiana'
let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
// return the petString here



// call your function here



// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function
function anotherGreatPet() {
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName; 
  return anotherPetString;
}

// return the anotherPetString here

// call your function here
anotherGreatPet();


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

function anotherGreatPet2(petType, name) {
  let petString = 'The best pet is a ' + petType + ' named ' + name;
  return petString;
}

anotherGreatPet2(dog, fluffy);


