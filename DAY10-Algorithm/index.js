//palindrome

let palindrome = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxzy"; //alphabet for filter
//palindrome filter for alphabet only
palindrome = palindrome.split("").filter((letter) => {
  return arrAlpha.includes(letter);
});
palindrome = palindrome.join("");
console.log(palindrome);
//reversed variable for palindrome
let reversed = palindrome.split("").reverse("");
reversed = reversed.filter((letter) => {
  return arrAlpha.includes(letter);
});
reversed = reversed.join("");

console.log(reversed === palindrome);
