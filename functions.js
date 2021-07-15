'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function


// return the petString here
function bestPet(){
  let bestPet = 'dog';
  let petName = 'indiana'
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  return petString;
}


// call your function here
bestPet()


// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function

// return the anotherPetString here
function getPetName() {
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;

  return anotherPetString;
}

// call your function here
getPetName();



// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

// return the anotherPetString here
function getPetNameDynamic(petType, petName) {
  return 'The best pet is a ' + petType + ' named ' + petName;
}

// call your function here
getPetNameDynamic('dog', 'Clint Eastwood');




