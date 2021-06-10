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
function challenge2() {
    let anotherGreatPet = 'bunny';
    let anotherPetName = 'opal';
    let anotherPetString = 'The best pet is a ' + anotherGreatPet + ' named ' + anotherPetName;
// return the anotherPetString here

    return anotherPetString;
}
// call your function here

challenge2();
// -------- Challenge 3 -------- //
// is there another way to write this function so we can use one function for different pets?

function challenge3(pet, name) {
    let petString3 = 'The best pet is a ' + pet + ' named ' + name;
// return the anotherPetString here

    return petString3;
}
// call your function here

challenge2(cat, ginger);



