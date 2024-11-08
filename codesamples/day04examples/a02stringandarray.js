// 1. String and Array Initialization
let sentence = "JavaScript is a new language for us";
let wordsArray = sentence.split(" ");  // Splitting the sentence into an array of words

console.log("Original Sentence:", sentence);  
console.log("Words Array:", wordsArray);      

// 2. String Manipulation
// Convert the sentence to uppercase
let upperCaseSentence = sentence.toUpperCase();
console.log("Uppercase Sentence:", upperCaseSentence);  

// Replace a word in the sentence
let newSentence = sentence.replace("new", "versatile");
console.log("Modified Sentence:", newSentence);  

// 3. Array Manipulation
// Adding an element to the end of the array using push()
wordsArray.push("and fun!");
console.log("Updated Words Array:", wordsArray);  

// Removing an element from the array using pop()
let removedWord = wordsArray.pop();
console.log("Removed Word:", removedWord);  // Output: and fun!
console.log("Words Array After Pop:", wordsArray);  

// Accessing specific elements in the array
let firstWord = wordsArray[0];
let lastWord = wordsArray[wordsArray.length - 1];
console.log("First Word:", firstWord);  
console.log("Last Word:", lastWord);    

// Loop through the array and create a new sentence
let newSentenceArray = "";
for (let i = 0; i < wordsArray.length; i++) {
    newSentenceArray += wordsArray[i] + " ";
}
console.log("Reconstructed Sentence from Array:", newSentenceArray.trim());  // Output: JavaScript is a powerful language

// 4. Combining Strings and Arrays
// Join the words back into a single sentence using join()
let finalSentence = wordsArray.join(" ");
console.log("Final Sentence:", finalSentence);  

// 5. Template Literals with Arrays
let wordCount = wordsArray.length;
let sentenceLength = sentence.length;
let result = `The sentence "${sentence}" contains ${wordCount} words and is ${sentenceLength} characters long.`;
console.log(result);

