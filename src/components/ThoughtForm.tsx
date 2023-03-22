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
      className='thought-form flex flex-no-wrap flex-col sm:flex-row'
    >
      <input
        value={`${text}`}
        onChange={handleTextChange}
        type='text'
        autoFocus
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        className='focus:outline-none	appearance-none p-6 text-base flex-grow sm:text-xl'
      />
      <input
        type='submit'
        value='Send'
        className='bg-stone-300 appearance-none cursor-pointer p-2 sm:px-4 text-xl hover:animate-pulse active:bg-stone-400'
      />
    </form>
  );
}
