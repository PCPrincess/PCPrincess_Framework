// Original For Loop

const digits = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

// For In Loop
// Eliminates the counting logic and exit condition

for (const index in digits) {
  console.log(digits[index]);
}

// For Each Loop (not covered in this lesson)

// For Of Loop
// Only loops over 'iterable' items (not objects)
// No need for 'index'

for (const digit of digits) {
  console.log(digit);
}

// Cool Aspect of For Of Loops
// You Can Stop or Break a For Of Loop at Anytime

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

// Loop Through Each String in an Array, Log Each to Console While Capitalizing the First Letter

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (const day of days) {
  let firstLetter = day.charAt(0).toUpperCase();
  let rest = day.substr(1, day.length);
  console.log(firstLetter + rest);
}

// Use the Rest Parameter to Create an average() Function that Calculates the
// Average of an Unlimited Amount of Numbers

function average(...values) {
  let count = 0;
  let sum = 0;

  for (const value of values) {
    count++;
    sum += value;
  }
  return count ?  sum / count : 0
}


console.log(average(2, 6));
console.log(average());