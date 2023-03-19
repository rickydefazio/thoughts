import React, { useState } from 'react';
import {
  generateId,
  getNewExpirationTime,
  getRandomEmoji,
} from '../utils/utilities';
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
        text: text,
        expiresAt: getNewExpirationTime(),
        emoji: getRandomEmoji(),
      };

      props.addThought(newThought);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='thought-form'>
      <input
        value={`${text}`}
        onChange={handleTextChange}
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type='submit' value='Send' className='submit-animation ' />
    </form>
  );
}
