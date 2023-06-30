// One parameter as placeholder of the real value that we input
function add7(number) {
  return number + 7;
}

console.log(add7(3));

// Use 2 parameter so we can input 2 value
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 5));

// Find index 0 then change to upercase
// Find index 1 then change to lowercase for the rest of the word
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("hello"));
console.log(capitalize("HELLO"));
console.log(capitalize("hElLo"));

// using chatAt to target the first letter - 1 so it can be last letter
function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(lastLetter("Hello"));
