

/*
 Criteria 
 There should be a thing which randomly generates 5 characters until they create the word Sadra. 

*/


// function generateSequence() {
//   const targetSequence = ['S', 'A', 'D', 'R', 'A'];
//   let sequence = '';
//   let iterations = 0;
//   let targetIndex = 0;

//   while (true) {
//     const randomAlphabet = String.fromCharCode(65 + Math.floor(Math.random() * 26));
//     sequence += randomAlphabet;
//     iterations++;

//     // Check if the current alphabet matches the target alphabet
//     if (randomAlphabet === targetSequence[targetIndex]) {
//       targetIndex++; // move on to the next target alphabet
//       if (targetIndex >= targetSequence.length) {
//         console.log(`Target sequence reached after ${iterations} iterations.`);
//         return;
//       } else if (targetIndex % 5 === 0) {
//         console.log(sequence); // log the sequence of alphabets generated so far
//         sequence = ''; // reset the sequence
//       }
//     } else {
//       // If the current alphabet does not match the target, but we have already added 5 alphabets,
//       // we should still show the sequence generated so far and reset it to start a new sequence
//       if (sequence.length % 5 === 0) {
//         console.log(sequence); // log the sequence of alphabets generated so far
//         sequence = ''; // reset the sequence
//       }
//     }
//   }
// }
// generateSequence();






let name /* true false number string {} [] */

/* 
Math.random() generates a random number between 0 and 1
*/


/* 
  Exercise 1 (Easy)
  Create a function that randomly generates your name.
  Final results ['S', 'A', 'D', 'R', 'A']
  Calculate the number of iterations. How many iterations does it take each time?
  Hint: 
  Use while loops
  Exercise 2
  Create a function that takes any name and tries to randomly generate the name. Calculate how many iterations it takes.
  Try bigger names and short names and compare them.
*/

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateRandomIntegerUpto26() {
  return Math.floor(Math.random() * 25)
}

function generateRandomLetter() {
  const letterIndex = generateRandomIntegerUpto26(); 
  return alphabet[letterIndex];
}

function generateFiveRandomLetters() {
  return [
    generateRandomLetter(), 
    generateRandomLetter(),
    generateRandomLetter(), 
    generateRandomLetter(),
    generateRandomLetter(),
  ]
}

let numIterations = 0;

let firstLetter  = "" // This should become S
let secondLetter = "" // this should become a 
let thirdLetter  = "" // this should become d
let fourthLetter = "" // this should become r 
let fifthLetter  = "" // this should become a 


// while (firstLetter !== "S") {
//   firstLetter = generateRandomLetter();
//   numIterations++;
// }

// while (secondLetter !== "A") {
//   secondLetter = generateRandomLetter();
//   numIterations++;
// }

// while (thirdLetter !== "D") {
//   thirdLetter = generateRandomLetter();
//   numIterations++;
// }

// while (fourthLetter !== "R") {
//   fourthLetter = generateRandomLetter();
//   numIterations++;
// }

// while (fifthLetter !== "A") {
//   fifthLetter = generateRandomLetter();
//   numIterations++;
// }

// while (firstLetter !== "S" && secondLetter !== "A" && thirdLetter !== "D" && fourthLetter !== "R" && fifthLetter !== "A" ) {
//   while(firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter !== "SADRA") {
//   firstLetter   = generateRandomLetter();
//   secondLetter  = generateRandomLetter();
//   thirdLetter   = generateRandomLetter();
//   fourthLetter  = generateRandomLetter();
//   fifthLetter   = generateRandomLetter();
//   numIterations++;
// }

// console.log("Number of Iterations: ", numIterations);
// console.log(firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter);


function takesAnyWord(word) {
  const upperCaseWord = word.toUpperCase();
  // a function that takes any combination of characters and generates random letters until it reaches the target word
  let specifiedWord = upperCaseWord.split('');
  let targetWord = ""
  let numIterations = 0
  while (targetWord !== upperCaseWord) { // iter 1
    let tempWord = ""; // tempWord = ""
    for (let i = 0; i < upperCaseWord.length; i++) { // i=4
      tempWord = tempWord + generateRandomLetter();
       //tempWord="SADR"
    }
    targetWord = tempWord;
    numIterations += 1;
  }
  // we need while loop that generates different letters. 
  //  
  

  console.log(specifiedWord);
  console.log({ results: specifiedWord.join(''), numIterations })
}



// takesAnyWord("Sadra") 