import { useEffect, useRef, useState } from 'react';
import { IThought } from '../types';
import { writeText } from '../utils/utilities';

interface ThoughtProps {
  thought: IThought;
  removeThought: (id: number) => void;
}

export default function Thought({ thought, removeThought }: ThoughtProps) {
  const indexRef = useRef(0);
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (indexRef.current < thought.text.length) {
      intervalId = setInterval(
        () => writeText(thought.text, setGeneratedText, indexRef),
        100
      );
    }

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (indexRef.current >= thought.text.length) {
      const duration = 5 * 1000;

      timeoutId = setTimeout(() => {
        removeThought(thought.id);
      }, duration);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [thought, removeThought, generatedText]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className='flex justify-between flex-row-reverse p-4 mb-4 rounded-sm bg-stone-100'>
      <button
        aria-label='Remove thought'
        className='text-2xl leading-4 hover:text-white hover:bg-black cursor-pointer w-6 rounded-sm bg-transparent'
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div>
        {generatedText} {thought.emoji}
      </div>
    </li>
  );
}
