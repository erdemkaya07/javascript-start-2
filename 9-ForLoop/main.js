// For loop - dongu

for(let i = 0; i <= 100; i++) {
  console.log(i);
  
}


let numbers = [1,2,3,4,5,6,7,8,9,12,44,888,77,7865,10];
let total = 0;

for(let index = 0; index < numbers.length ; index++) {
  console.log(numbers[index])
  total += numbers[index];
}

console.log(total)