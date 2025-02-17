// PREKU EXPORT AMA GI STAVASH FUNKCIITE VO NEGO

export { words, getRandomWord };

const words = {
  helloVariants: ["Hi", "Hello", "What's Up"],
  goodbyeVariants: ["Bye", "Goodbye", "Cheers", "See you soon"],
};

function getRandomWord(wordArray) {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}

// PREKU KLUCHNOTO ZBORCHE "EXPORT"

// export const words = {
//     helloVariants: ["Hi", "Hello", "What's Up"],
//     goodbyeVariants: ["Bye", "Goodbye", "Cheers", "See you soon"],
// }

// export function getRandomWord(wordArray){
// return wordArray[Math.floor(Math.random() * [wordArray.length - 1])]
// }
