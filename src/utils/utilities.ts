import { MutableRefObject } from 'react';
import { emojis } from './emojis';

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
      emoji: '🙏',
    },
    {
      id: generateId(),
      text: 'I am proud of...',
      emoji: '💪',
    },
    {
      id: generateId(),
      text: 'I wish I could...',
      emoji: '🚀',
    },
    {
      id: generateId(),
      text: 'I hate when...',
      emoji: '😡',
    },
    {
      id: generateId(),
      text: "I can't believe...",
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
