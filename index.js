 function isPalindrome(word) {
  
let trueWord = [];
for (i of word) {
trueWord.unshift(i);
}
 if (trueWord.join('') === word) {
return true
} else {return false}
}
isPalindrome('racecar')



//Write A Function With An Argument Of Word And Expect True If The "String" Is Palindrome Otherwise False
/* 
  A Palindrome is a word that's spelled the same way both forward and backward.
*/

/*
 Step 1. Convert the string into an array.
 Step 2. Iterate through each element using for loop. For each character at position i, we compare with the character at position i from the end.
 Step 3. Remove first element of array using unshift()
 Step 4. Use join to concatenate the elements together as a string.
 Step 5. If it does not equal, string is not palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
