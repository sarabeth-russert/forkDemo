"use strict";

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function

// return the petString here
function bestPet() {
  let bestPet = "dog";
  let petName = "indiana";
  let petString = "The best pet is a " + bestPet + " named " + petName;
  return petString;
}

// call your function here
bestPet();

// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function

function bestPet() {
  let anotherGreatPet = "bunny";
  let anotherPetName = "opal";
  let anotherPetString =
    "The best pet is a " + anotherGreatPet + " named " + anotherPetName;
  // return the anotherPetString here
  return anotherPetString;
}
// call your function here
bestPet();

// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

function amazingPet(pet, name) {
  let anotherPetString = "The best pet is a " + pet + " named " + name;
  return anotherPetString;
}

console.log(amazingPet("dog", "Mango"));
console.log(amazingPet("dog", "Ollie"));
console.log(amazingPet("cat", "Pumpkin"));
