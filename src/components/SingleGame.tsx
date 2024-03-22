import { ReactElement } from 'react';
import Navbar from './Navbar';

interface SingleGameProps {
  title: string;
  description: string;
  game: ReactElement;
}
const SingleGame = ({ title, description, game }: SingleGameProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="text-p">
        <div className="bg-black h-dvh text-white flex justify-center items-center">
          <div className="space-y-10">
            <div className="text-center">
              <p>{title}</p>
              <p className="opacity-75">{description}</p>
            </div>
            {game}
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleGame;
