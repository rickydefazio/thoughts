import { useEffect, useRef, useState } from 'react';
import { IThought } from '../types';
import { writeText } from '../utilities';

interface ThoughtProps {
  thought: IThought;
  removeThought: (id: number) => void;
}

export default function Thought({ thought, removeThought }: ThoughtProps) {
  const indexRef = useRef(0);
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    let intervalId: number;
    if (indexRef.current < thought.text.length) {
      intervalId = setInterval(
        () => writeText(thought.text, setGeneratedText, indexRef),
        100
      );
    }

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timeoutId: number;

    if (indexRef.current >= thought.text.length) {
      const timeRemaining = thought.expiresAt - Date.now();

      timeoutId = setTimeout(() => {
        removeThought(thought.id);
      }, timeRemaining);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [thought, removeThought, generatedText]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className='thought'>
      <button
        aria-label='Remove thought'
        className='remove-button'
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className='text'>
        {generatedText} {thought.emoji}
      </div>
    </li>
  );
}
