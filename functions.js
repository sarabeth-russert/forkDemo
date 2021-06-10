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
function pets() {
    let anotherGreatPet = 'bunny';
    let anotherPetName = 'opal';
    let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here
    return anotherPetString;
}
// call your function here
pets();


// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

//There is a way to do it where everything is a local variable, or where everything is a global variable.

let pet1 = 'dog';
let pet2 = 'bunny';

function pets(pet, petName) {
    petString = 'The best pet is a ' + pet + ' named ' + petName;

// return the anotherPetString here
    return petString1;
}





