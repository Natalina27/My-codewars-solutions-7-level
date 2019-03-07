/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.


 */
//My solution:
function arraySum(arr) {
    // sum ALL the things!
    return  arr.reduce((a, b) => a + (typeof(b) == "number" ? b : (typeof(b) == "object" ? arraySum(b) : 0)), 0);

}
