'use strict';

// -------- Challenge 1 -------- //
// put this code block into a function, add a return statement, and call the function
function funFunction() {

    let bestPet = 'dog';
    let petName = 'indiana'
    let petString = 'The best pet is a ' + bestPet + ' named ' + petName;
    // return the petString here
    return petString;
}


// call your function here
funFunction();


// -------- Challenge 2 -------- //
// put this code block into a function, add a return statement, and call the function
function greatPet() {
    let anotherGreatPet = 'bunny';
    let anotherPetName = 'opal';
    let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
    return anotherPetString;
}
// return the anotherPetString here

// call your function here
greatPet();


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

function allPets(dog, Chester) {
    let petStringAgain = 'The best pet is a ' + dog + ' named ' + Chester;
    return petStringAgain;
}



