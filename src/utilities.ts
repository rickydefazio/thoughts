import { emojis } from './emojis';

export function getNewExpirationTime() {
  return Date.now() + 5 * 1000;
}

let nextId = 0;
export function generateId() {
  return nextId++;
}

export function getRandomEmoji() {
  const amountRepeated = Math.floor(Math.random() * 3) + 1; // min 1, max 3
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex].repeat(amountRepeated);
}
