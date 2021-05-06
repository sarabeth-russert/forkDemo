'use strict';

//Challenge 1
// put this code block into a function, add a return statement, and call the function

function bestPetsFunction() {
  let bestPet = 'dog';
  let petName = 'indiana'
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  // return the petString here
  return petString;
}
// call your function here
bestPetsFunction();


//Challenge 2
// put this code block into a function, add a return statement, and call the function
function anotherGreatPetFunction() {
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
return anotherGreatPetFunction
}   
// call your function here
anotherGreatPetFunction();

// Challenge 3
// is there another way to write this function so we can use one function for different pets?
function differentPets(name1,name2) {
  
  let aGreatPet = name1;

  let anotherPetName = name2;

  let aPetString = 'The best pets is a ' + anotherGreatPet + ' named ' + anotherPetName;

  return aPetString;
}

function differentPets(Majin,Shadow)

