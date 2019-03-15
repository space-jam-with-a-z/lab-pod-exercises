"use strict";

// TODO String-1 --conCat - theWinter website
//
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
//
// Examples
//
//     conCat('abc', 'cat') → abcat
//     conCat('dog', 'cat') → dogcat
//     conCat('abc', '') → abc

//My Solution:
function conCat(str1,str2){
if (str1.charAt(str1.length - 1) === str2.charAt(0)){
    return str1 + str2.slice(1);
} else {
    return str1 + str2;
    }
}

console.log(conCat('abc','cat'));

// MyWinter Solution:
// function conCat (a, b) {
//     if (a.charAt(a.length - 1) == b.charAt(0)) {
//         return a + b.substring(1);
//     } else {
//         return a + b;
//     }
// }


// Array-1 --make2
//
// Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.
//
//     Examples
//
// make2([4, 5], [1, 2, 3]) → 4,5
// make2([4], [1, 2, 3]) → 4,1
// make2([], [1, 2]) → 1,2
//

//My Solution:
function make2(arr1,arr2) {
    let arr3 = arr1.concat(arr2);
    return [arr3[0],arr3[1]];
}

console.log(make2([4], [1, 2, 3]));

//Their solution:
// function make2 (a, b) {
//     var newAr = a.concat(b);
//
//     return [newAr[0], newAr[1]];
// }



//TODO Concat MDN website example

// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
//
// console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//My version
// Create a function that returns the whole alphabet
// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
// var array3 = ['g', 'h', 'i'];
// var array4 = ['j', 'k', 'l'];
// var array5 = ['m', 'n', 'o'];
// var array6 = ['p', 'q', 'r'];
// var array7 = ['s', 't', 'u'];
// var array8 = ['v', 'w', 'x'];
// var array9 = ['y', 'z',];

















