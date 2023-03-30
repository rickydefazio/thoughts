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
    <li className='mb-4 flex flex-row-reverse justify-between rounded-sm bg-stone-100 p-4'>
      <button
        aria-label='Remove thought'
        className='w-6 cursor-pointer rounded-sm bg-transparent text-2xl leading-4 hover:bg-black hover:text-white'
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
