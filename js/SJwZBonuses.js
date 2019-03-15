"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];






//////////////// BONUS 1 CURRICULUM /////////////////////

// Using prompt and DOM manipulation, ask the user how many items
// they want to add to a grocery list, and then allow them to enter
// them.  After they have been added display them in un-ordered list.


var groceryList = [];


function addGroceryList (){

    var x = prompt("How many items would you like to add to the list?");

    var z = "";

    for (var i = 0; i < x; i++){

        var userInput = prompt("Name an item to add to the list?");

        var table = document.getElementById("groceryList");

        z += "<li>" + userInput + "</li>";

        table.innerHTML = z;

        groceryList.push(userInput);

    }

}


addGroceryList();

/////////////////////// BONUS 1 END /////////////////////////










//////////////////BONUS 2 CODEWARS///////////////////////////

// Write a function that takes an integer as input, and returns the number
// of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so
// the function should return 5 in this case



var countBits = function(n) {

    var count = 0;

    var binary = n.toString(2);

    var binaryArray = binary.split("");


    for (var i = 0; i < binaryArray.length; i++) {

        if (binaryArray[i] === "1") {

            count++;
        }
    }
    return console.log(count);
};




//////////////////BONUS 2 END////////////////////////////////










////////////////// BONUS 3 CURRICULUM START /////////////////////////////

// Use the reduce method to return a unique list of the coding
// languages that the codeup instructors know.


const uniqueLanguages = users.reduce(function(person, currentLang){

    person += currentLang.languages + ",";

    let languages = person.split(',');

    for (let i = 0; i < languages.length; i++){

        for(let x = 1; i < languages.length; x++){

            if(languages[i] === languages [x]){

                languages.splice(x,1);

            }
        }
    }

    return languages;

}, []);

console.log(uniqueLanguages);



////////////////////// BONUS 3 END ////////////////////////////