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
      <main>
        <div className="bg-black h-dvh text-white flex justify-center items-center">
          <div>
            <div className="text-center">
              <p>{title}</p>
              <p className="">{description}</p>
            </div>
            {game}
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleGame;
