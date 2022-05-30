/* RE-WRITE PROBLEM
I need to make an "isPalindrome" function that returns wither "true" or "false". When the input string is the same forwards and backwards, I should return "true". That means that if the input string is the same after I reverse it, I should return true. For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", so my solution should return "true" for these cases. "Hi" in reverse is "ih", so my soluton should return "false" for this case.
*/

/* PSUEDOCODE
If the input string is the same after I reverse it, I should return true.
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

function reverseString(word) {
  return word.split("").reverse().join("");
  // create an array from the input string, reverse the array, create a string from the reversed array, return the reversed string
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word)

  // compare the reversed string to the input
  return word === reversedWord;
}


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abc"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
