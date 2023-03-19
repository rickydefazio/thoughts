import { MutableRefObject } from 'react';
import { emojis } from './emojis';

export function getNewExpirationTime() {
  return Date.now() + 10 * 1000;
}

let nextId = 0;
export function generateId() {
  return nextId++;
}

export function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

export function getInitialThoughts() {
  return [
    {
      id: generateId(),
      text: 'I am grateful for...',
      expiresAt: getNewExpirationTime(),
      emoji: '🙏',
    },
    {
      id: generateId(),
      text: 'I am proud of...',
      expiresAt: getNewExpirationTime(),
      emoji: '💪',
    },
    {
      id: generateId(),
      text: 'I wish I could...',
      expiresAt: getNewExpirationTime(),
      emoji: '🚀',
    },
    {
      id: generateId(),
      text: 'I hate when...',
      expiresAt: getNewExpirationTime(),
      emoji: '😡',
    },
    {
      id: generateId(),
      text: "I can't believe...",
      expiresAt: getNewExpirationTime(),
      emoji: '🤯',
    },
  ];
}

export function writeText(
  text: string,
  setGeneratedText: (text: string) => void,
  indexRef: MutableRefObject<number>
) {
  setGeneratedText(text.slice(0, indexRef.current));
  indexRef.current += 1;
}
