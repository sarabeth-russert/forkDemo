'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function
function myFavPet(){
  let bestPet = 'dog';
  let petName = 'indiana';
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  return petString;
}
myFavPet();
// return the petString here


// call your function here



// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function


function anotherFavPet(){
let anotherGreatPet = 'bunny';
let anotherPetName = 'opal';
let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
return anotherGreatPetString;
}


anotherFavPet()


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

let anotherGreatPet = 'bunny';
let anotherPetName = 'opal';

function favPetB(anotherGreatPet, anotherPetName) {
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  return anotherPetString;
}

// return the anotherPetString here
favPetB();
