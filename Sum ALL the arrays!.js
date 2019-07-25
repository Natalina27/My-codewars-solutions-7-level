/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.


 */
//My solution:
//1.
function arraySum(arr) {
    // sum ALL the things!
    return  arr.reduce((a, b) => a + (typeof(b) == "number" ? b : (typeof(b) == "object" ? arraySum(b) : 0)), 0);

}
// //2.
// function arraySum(arr) {
//   return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
// }
