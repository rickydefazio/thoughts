import { useEffect, useState } from 'react';
import ThoughtForm from './components/ThoughtForm';
import Thought from './components/Thought';
import { generateId, getNewExpirationTime } from './utilities';

import { IThought } from './types';

export default function App() {
  const [thoughts, setThoughts] = useState<IThought[]>([]);

  useEffect(() => {
    setThoughts([
      {
        id: generateId(),
        text: 'Time for venting!',
        expiresAt: getNewExpirationTime(),
        emoji: '🤯🤯🤯',
      },
    ]);
  }, []);

  const addThought = (thought: IThought) => {
    setThoughts([thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove: number) => {
    setThoughts(thoughts.filter(thought => thought.id !== thoughtIdToRemove));
  };

  return (
    <div className='app'>
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <ThoughtForm addThought={addThought} />
        <ul className='thoughts'>
          {thoughts.map(thought => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
