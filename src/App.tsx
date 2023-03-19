import { useCallback, useEffect, useState } from 'react';
import ThoughtForm from './components/ThoughtForm';
import Thought from './components/Thought';
import { getInitialThoughts } from './utils/utilities';
import { IThought } from './types';

const initialThoughts = getInitialThoughts();

export default function App() {
  const [thoughts, setThoughts] = useState<IThought[]>([]);

  useEffect(() => {
    setThoughts(initialThoughts);
  }, []);

  const addThought = useCallback(
    (thought: IThought) => {
      setThoughts([thought, ...thoughts]);
    },
    [setThoughts, thoughts]
  );

  const removeThought = useCallback(
    (thoughtIdToRemove: number) => {
      setThoughts(thoughts.filter(thought => thought.id !== thoughtIdToRemove));
    },
    [setThoughts, thoughts]
  );

  return (
    <div className='app'>
      <header>
        <h1>Thoughts</h1>
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
