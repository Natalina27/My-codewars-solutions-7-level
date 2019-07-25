/*
Instructions
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
##Good Luck!##


 */

//My solutions:
//1.
const fibsFizzBuzz = function(n) {
    if (n===1){
        return [1];
    }
    let arr = [];
    arr[0]=1;
    arr[1]=1;
    for( let i=2; i < n ; i++){
        arr[i]= arr[i-2]+arr[i-1];
    }


    const arr2=[];
    for (let i=0; i< arr.length; i++){
        if(arr[i]%15 === 0){
            arr2.push('FizzBuzz');
        }else if (arr[i]%5 === 0){
            arr2.push('Buzz');
        } else if(arr[i]%3 === 0){
            arr2.push('Fizz');
        }else{
            arr2.push(arr[i]);
        }
    }
    return arr2;
};


// //2.
// function fibsFizzBuzz(n) {
//   let res = [], [a, b] = [0, 1];
//   for (let i = 0; i < n; i++) {
//     [a, b] = [b, a + b];
//     res.push(a % 15 == 0 ? 'FizzBuzz' :
//       a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
//   }
//   return res;
// }

 
