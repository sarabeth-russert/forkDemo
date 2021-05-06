'use strict';

//Challenge 1
// put this code block into a function, add a return statement, and call the function

function bestPetFunction() {
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
function secondBestPet(){
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
  return anotherPetString;
}
// call your function here
secondBestPet();


// Challenge 3
// is there another way to write this function so we can use one function for different pets?
function ultimatePet(){
  let greatPet= prompt('what type of pet');
  let greatPetName = prompt ('what is the name of this pet');
  let greatPetString = ('the best pet is a '+ greatPet + ' named '+ greatPetName);

  return greatPetString;
}

ultimatePet();


