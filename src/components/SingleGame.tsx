import { ReactElement, useEffect, useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import TopThreeScore from './TopThreeScore';

interface userData {
  name: string;
  gameName: number;
  [key: string]: string | number;
}

interface SingleGameProps {
  title: string;
  description: string;
  game: ReactElement;
  gameName: string;
}
const SingleGame = ({
  title,
  description,
  game,
  gameName,
}: SingleGameProps) => {
  const [globalHighScores, setGlobalHighScores] = useState<userData[]>([]);

  const url = `http://localhost:3000/userscore`;

  useEffect(() => {
    const fetchGlobal = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ gameName: `${gameName}` }),
        });
        const data = await response.json();
        setGlobalHighScores(data);
      } catch {
        console.log('error fetching');
      }
    };
    fetchGlobal();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="text-p bg-black text-white px-6">
        <div className="w-1280px mx-auto">
          <div className="h-dvh  flex justify-center items-center">
            <div className="space-y-10">
              <div className="text-center">
                <p>{title}</p>
                <p className="opacity-75">{description}</p>
              </div>
              {game}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {globalHighScores
              .slice()
              .sort((a, b) => (b[gameName] as number) - (a[gameName] as number))
              .map((user, index) => (
                <React.Fragment key={index}>
                  {index <= 2 && (
                    <TopThreeScore
                      name={user.name}
                      score={user[gameName] as number}
                      position={index + 1}
                    />
                  )}
                  {index > 2 && (
                    <div className="col-span-1 md:col-span-3">
                      <div className="text-white border-gradient text-center items-center py-3 px-10">
                        <div className="flex justify-between opacity-80">
                          <p>#{index + 1}</p>
                          <p>{user.name}</p>
                          <h1>SCORE: {user[gameName]}</h1>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleGame;
