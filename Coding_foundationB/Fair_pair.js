const pair = (words) => {
  //code here
  const wordCount = {};
  const pairs = [];

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
      if (wordCount[word] % 2 === 0) {
        pairs.push(word);
      }
    }else{
      wordCount[word] = 1;
    }
  }

  return pairs;

  

};

const words = ["red", "blue", "black", "red", "black", "red", "red", "black"];
const wordsa = ["Ben", "Benjamin", "ben", "benT", "ben", "Benjo"];
const wordsb = ["This", "this", "that", "this", "this", "When"];
const wordsc = ["Jen", "Benjo", "Jen", "benT", "Jen", "Benjo", "Jen", "Jen"];

const pairs = pair(words);
const pairsa = pair(wordsa);
const pairsb = pair(wordsb);
const pairsc = pair(wordsc);

console.log(pairs);
console.log(pairsa);
console.log(pairsb);
console.log(pairsc);