'use strict';

//Challenge 1
// put this code block into a function, add a return statement, and call the function

function dogName(){
  let bestPet = 'dog';
  let petName = 'indiana'
  let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
  // return the petString here
  return petString;
}

// call your function here
dogName();


//Challenge 2
// put this code block into a function, add a return statement, and call the function

function bunnyName(){
  let anotherGreatPet = 'bunny';
  let anotherPetName = 'opal';
  let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
  // return the anotherPetString here
  return anotherPetString;
}

// call your function here
bunnyName();


// Challenge 3
// is there another way to write this function so we can use one function for different pets?

petFinal = prompt('What type of animal is your pet?')
nameFinal = prompt('What is your pet\'s name?')


function animalNames(petFinal, nameFinal){
let petAnnouncement = 'The best pet is a ' + petFinal + ' named ' + nameFinal;
return petAnnouncement;
}

console.log(petAnnouncement);




