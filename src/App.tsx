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
    <div className='mx-auto w-11/12 max-w-screen-sm'>
      <header className='my-8 text-center'>
        <h1 className='ml-2 w-full animate-pulse text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Thoughts
        </h1>
      </header>
      <main>
        <ThoughtForm addThought={addThought} />
        <ul className='mt-1 list-none p-0 sm:text-xl'>
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
