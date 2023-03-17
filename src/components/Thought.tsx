import React, { useEffect } from 'react';
import { IThought } from '../types';

interface ThoughtProps {
  thought: IThought;
  removeThought: (id: number) => void;
}

export default function Thought({ thought, removeThought }: ThoughtProps) {
  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    return () => {
      clearTimeout(timeout);
    };
  }, [thought, removeThought]);

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        {thought.text} {thought.emoji}
      </div>
    </li>
  );
}
