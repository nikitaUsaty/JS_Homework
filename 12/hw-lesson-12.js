//Task 1
var filterNumbersArr = [-1, 0, 2, 34, -2];
var positiveArr = filterNumbersArr.filter(function (number) {
    return number > 0;
});

alert(positiveArr);

//Task 2

var arr = [-1, -2, 3, 4, -5, -6, -7, 8, 9, 10];
var positiveNumber = arr.find(el => el > 0);

console.log(positiveNumber);

//Task 3 

function isPalindrom(str) {
    str = str.toUpperCase();
    return str === str.split('').reverse().join('');
}

isPalindrom('шалаШ');
isPalindrom('шалак');


//Task 4

anagram('friend', 'Finder');
function anagram(first, second) {
    return second.toLowerCase().split('').sort().join() === first.toLowerCase().split('').sort().join();

}

//task 5

function divideArr(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
