'use strict';

// this is an edit I am marking so my branch will be different so i can acp back to my main
// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function
function myBestPet(){
  let bestPet = 'cat';
  let petName = 'frank';
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  return petString;
}
myBestPet();
// return the petString here


// call your function here



// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function


function anotherGreatPet(){
let anotherGreatPet = 'bird';
let anotherPetName = 'harry';
let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
return anotherGreatPetString;
}


anotherGreatPet()


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

let anotherGreatPet = 'cow';
let anotherPetName = 'henry';

function greatPetB(anotherGreatPet, anotherPetName) {
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  return anotherPetString;
}

// return the anotherPetString here
greatPetB();
