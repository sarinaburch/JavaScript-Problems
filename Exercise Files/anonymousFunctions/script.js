// function findBiggestFraction(a,b) {
//     var result;
//     a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
//     return result;
// }

// var firstFraction = 3/4;
// var secondFraction = 5/7;

// var fractionResult = findBiggestFraction(firstFraction,secondFraction);

// console.log("First fraction result: ", firstFraction);
// console.log("Second fraction result: ", secondFraction);
// console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");


// rewritten code with anonymous function
var theBiggest = function(a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9, 13/25));