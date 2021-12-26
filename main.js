//שאלה 1
// function ArraySum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(ArraySum([8, 5, 9, 7]))

//שאלה 2
// function ArrayMulti(ar) {
//     let multi = 1;
//     for (let i = 0; i < ar.length; i++) {
//         multi *= ar[i];
//     }
//     return multi;
// }
// console.log(ArrayMulti([2, 4, 6, 8]));

//שאלה 3
// function sumOfDigits(num) {
//     let sum = 0;
//     while (num != 0) {
//         sum = sum + num % 10;
//         num = Math.floor(num / 10);
//     }
//     console.log(sum); 
// }
// sumOfDigits(159);

//שאלה 4
// let arrOfAges = [25,63,44,15];
//סעיף א
// let min = arrOfAges[0];
// for (let i = 0; i < arrOfAges.length; i++) {
//     if (arrOfAges[i] < min) {
//         min = arrOfAges[i]
//     }
// }
// console.log(`min age: ${min}`);
//סעיף ב
// let max = arrOfAges[0];
// for (let i = 0; i < arrOfAges.length; i++) {
//     if (arrOfAges[i] > max) {
//         max = arrOfAges[i]
//     }
// }
// console.log(`max age: ${max}`);
//סעיף ג
// let sum = 0;
// for (let i = 0; i < arrOfAges.length; i++) {
//     sum += arrOfAges[i];
// }
// console.log(`sum of ages: ${sum}`);
//סעיף ד
// let avg = 0;
// for (let i = 0; i < arrOfAges.length; i++) {
//     avg += arrOfAges[i];
// }
// console.log(`average of ages: ${avg/arrOfAges.length}`);

//שאלה 5
let sum = 0;
let multi = 1;
let arr = [];
let count = 0;
let nums;
while (count < 3) {
    nums = Number(prompt("enter numbers"));
    count++;
    arr.push(nums);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log("even");
    }console.log("odd");
    sum += arr[i]
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log("even");
    }console.log("odd");
    multi*= arr[i]
}
console.log(sum,multi);