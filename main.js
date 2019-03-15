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


function conCat(str1,str2){
if (str1.charAt(str1.length - 1) === str2.charAt(0)){
    return str1 + str2.substring(1);
} else {
    return str1 + str2;
    }
}

console.log(conCat('abc','cat'));
// function conCat (a, b) {
//     if (a.charAt(a.length - 1) == b.charAt(0)) {
//         return a + b.substring(1);
//     } else {
//         return a + b;
//     }
// }

//TODO Concat MDN website example

// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
//
// console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//My version

// var array1 = ['a', 'b', 'c'];
// var array2 = ['d', 'e', 'f'];
//
// console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]











