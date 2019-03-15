// IIFE / Remove when finished coding //
// (function(){
"use strict";
$(document).ready(function () {
    console.warn('The DOM has finished loading in JS!');

// Lecture //

    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const newNumbers = numbers.map(n => n + numbers.indexOf(n));

    // console.log(newNumbers);

    const oddNumbers = numbers.filter(n => n % 2 !== 0);

    // console.log(oddNumbers);

    const binary = [0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0];

    const ones = binary.filter(n => n === 1);
    const zero = binary.filter(n => n === 0);

    // console.log(ones,zero);

// Exercise //

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

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    const threeLanguages = users.filter(user => user.languages.length >= 3);

    // console.log(threeLanguages);

// Use .map to create an array of strings where each element is a user's email address

    const allEmails = users.map(user => user.email);

// console.log(allEmails);

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    const totalYears = users.reduce((total, user) => total + user.yearsOfExperience / users.length, 0 );

    // console.log(totalYears);

// Use reduce to get the longest email from the list of users.

    const longestEmail = users.reduce((longest, user) => user.email.length > longest.length ? user.email : longest, '');

// console.log(longestEmail)

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const userList = users.reduce((total, user) => {
//     console.log(user)
//     console.log(`Your instructors are: ${users.name.join(', ') + total}`);
// }, ', ');
//
//     console.log(userList);
//

    const compileList = (list,user,index,all) => {
        let myList = user.name;
        if(index < all.length - 1){
            return list + myList + '';
        }
    };
    const listOfNames = users.reduce(compileList,"Your instructors are: ", '');
    console.log(listOfNames);

    //????????????????????????????????????????????


// BONUS: Use reduce to get the unique list of languages from the list of users.

    const allLanguages = users.reduce((total, user) => {
        let langs = user.languages;
        for(let lang of langs){
            total.add(lang);
        }
        return total;
    }, new Set);

//     console.log(Array.from(allLanguages));

// //Solution #2 //??????????????????????????????????????????????
//     let languages = users.reduce(listOfLanguages,[]);
//
// //flattens out Array -> Strings
//     languages = languages.flat();
//
// //takes unique values and creates a list object
//     languages = new Set(languages);
//
// //turns Set back into an Array
//     languages = Array.from(languages);
//
//     console.log(languages);


    // const langList = users.reduce((list, user) => {
    //     for (let i=0; i < user.languages.length; i++){
    //         if (list.indexOf(user.languages[i]) < 0){
    //             list.push(user.languages[i])
    //         }
    //     }
    //     return list;
    // }, []);
    //
    // console.log(langList);

//##############################################################################//
    //BONUS++

    const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

    const customers = [
        {
            name: "Fred",
            age: 58,
            occupation: "Police Officer",
            noOfPurchases: 4
        },
        {
            name: "Samantha",
            age: 54,
            occupation: "Teacher",
            noOfPurchases: 18
        },
        {
            name: "Charles",
            age: 38,
            occupation: "Librarian",
            noOfPurchases: 9
        }
    ];

    const pets = [
        {
            name: 'Bud',
            age: 2,
            breed: 'Pug'
        },
        {
            name: 'Gabby',
            age: 10,
            breed: 'Retriever'
        },
        {
            name: 'Fred',
            age: 1,
            breed: 'Lab'
        },
        {
            name: 'Bowser',
            age: 2,
            breed: 'Pug'
        }
    ];

    const family = [
        {
            name: "Pam",
            gender: "female",
            age: 29,
        },
        {
            name: "Amelie",
            gender: "female",
            age: 10,
        },
        {
            name: "Justin",
            gender: "male",
            age: 32,
        },
    ];

// Use map, filter, and reduce to:
//
// 1. Create an array of the first letters of each fruit
//
    const fruitsLetter = fruits.map(fruit => fruit.charAt(0));
    console.log(fruitsLetter);
//
// ad
//
// 1. Create array of user objects based on the customers array of objects (each
//    user object should just have name and age properties)

customers.map(customer => customer.name + customer.age)
//
// 1. Create an array of civil servant customers (teachers and police officers)
//    containing the same properties as the objects on the customers objects
//
// 1. Determine the average age of all the customers
//
// 1. Create a function `makeSuperPet()` that takes in the pets array as input and
//    returns a single pet object with the following shape...


// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }


// 1. Create a function that takes in an array of pets and returns an array of the
//    length of first names for pugs only. Your output for the given input should
//    be [3, 6] for 'Bud' and 'Bowser'
//
// 1. Create a function `getFemaleFamilyMembers()` that when given the family
//    variable as an argument, returns an array of female family member names
//
// 1. Create a function `makeLongPetString()` that when given the variable of pets,
//    returns a string of all property values with dashes separating each property
//    value
//
// 1. Create a function that when given an array of first names, returns an array
//    of the same names with a last name of Smith
//
//
// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve']

//
// 1. Create a function that when given an array of numbers, return the sum of
//     the even numbers
//
// 1. Create a function that when given an array of numbers, return the sum of all
//     numbers evenly divisible by 10
//
// 1. Create a function that when given an array of names, return a string of all
//     the first letters of each name
//
// 1. Create a function that when given an array of values, returns an array of
//     only the truthy values
//
// 1. Create a function that when given an object, returns the property values as
//     an array of elements
//
// 1. Create a function that when given an object, returns the property values as
//     an array of elements
//
// 1. Create a function that when given three arguments: a min num, a max num, an
//     array of nums will return the array of nums that are only between the min
//     and max values, inclusive
//
// 1. Create a function that when given an array of strings, returns an array of
//     objects with properties for the given string value and the length of the
//     string and the string without vowels (not including y)
//
// ---

// Given the following:

// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//     },
// ];


// 1. Use `.reduce` to transform the array into an object where the object's keys
//    are ids and the values are objects that represent each user
// 1. Use `.reduce` to get a unique list of the languages the codeup instructors
//    know









// jQuery closing //
});
// IIFE closing //
// })();