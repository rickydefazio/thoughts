import React, { useState } from 'react';
import { generateId, getRandomEmoji } from '../utils/utilities';
import { IThought } from '../types';

interface ThoughtFormProps {
  addThought: (thought: IThought) => void;
}

export default function ThoughtForm(props: ThoughtFormProps) {
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.length > 0) {
      const newThought = {
        id: generateId(),
        text,
        emoji: getRandomEmoji(),
      };

      props.addThought(newThought);
    }

    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='thought-form flex-no-wrap flex flex-col sm:flex-row'
    >
      <input
        value={`${text}`}
        onChange={handleTextChange}
        type='text'
        autoFocus
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        className='flex-grow	appearance-none p-6 text-base focus:outline-none sm:text-xl'
      />
      <input
        type='submit'
        value='Send'
        className='cursor-pointer appearance-none bg-stone-300 p-2 text-xl active:bg-stone-400 sm:px-4'
      />
    </form>
  );
}
