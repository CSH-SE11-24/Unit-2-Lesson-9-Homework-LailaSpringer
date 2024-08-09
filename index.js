// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let number= prompt("Hi,please pick a number.")
  x = parseInt(number)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let number2=prompt(" Please now input a bigger number.")
x = parseInt(number2)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for( let i = number; i < number2; i++){
  console.log (i)
}






// PART 2: Averaging an array
// Create an array of numbers 

// Write a for loop that calculates the sum of the elements 
let number3 =[1,2,3,4,5]
let sum = 0
for(let x = 0 ; x < number3.length ; x++){
  sum += number3[x]
}
console.log("sum is" + sum)




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let avg =( sum / number3.length) || 0;
console.log(`The is sum: ${sum}. The average is ${avg}.`)

