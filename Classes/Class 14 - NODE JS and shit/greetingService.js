import { words, getRandomWord } from "./messageService.js";

export function helloGreeting(name) {
  console.log(`${getRandomWord(words.helloVariants)} ${name}`);
}

export function goodByeGreeting(name) {
  console.log(`${getRandomWord(words.goodbyeVariants)} ${name}`);
}
