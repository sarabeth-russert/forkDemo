'use strict';

//Challenge 1
// put this code block into a function, add a return statement, and call the function

function bestPets() {
  let bestPet = 'dog';
  let petName = 'indiana'
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  // return the petString here
  return petString;
}
// call your function here
bestPets();


//Challenge 2
// put this code block into a function, add a return statement, and call the function
function greatPets() {
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  // return the anotherPetString here
  return anotherPetString;
}
// call your function here
greatPets();


// Challenge 3
// is there another way to write this function so we can use one function for different pets?

function goodPets(pet1, name1){
  let anotherGreatPet = pet1;
  let anotherPetName = name1;
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  return anotherPetString;
}



