import { ReactElement } from 'react';
import Navbar from './Navbar';
import { highScoresInterface } from '../pages/PatternMemoryPage';

interface SingleGameProps {
  title: string;
  description: string;
  game: ReactElement;
  highscores: Array<highScoresInterface>;
}
const SingleGame = ({
  title,
  description,
  game,
  highscores,
}: SingleGameProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="text-p bg-black text-white">
        <div className="h-dvh  flex justify-center items-center">
          <div className="space-y-10">
            <div className="text-center">
              <p>{title}</p>
              <p className="opacity-75">{description}</p>
            </div>
            {game}
          </div>
        </div>
        {highscores.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.patternMemory}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default SingleGame;
