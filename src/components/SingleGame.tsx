import { ReactElement, useEffect, useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import TopThreeScore from './TopThreeScore';
import { useAuthContext } from '../hooks/useAuthContext';
import TopThreeSkeleton from './TopThreeSkeleton';

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
  fetchHighscores?: boolean;
}
const SingleGame = ({
  title,
  description,
  game,
  gameName,
  fetchHighscores,
}: SingleGameProps) => {
  const [globalHighScores, setGlobalHighScores] = useState<userData[]>([]);
  const [waitingResults, setWaitingResults] = useState(true);

  const url = `${import.meta.env.VITE_BACKEND_URL}userscore`;
  const { username, loggedIn } = useAuthContext();

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
        setWaitingResults(false);
      } catch (e) {
        console.log(e);
        setWaitingResults(false);
      }
    };
    fetchGlobal();
  }, [fetchHighscores]);

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-5">
            {waitingResults ? (
              <TopThreeSkeleton />
            ) : (
              globalHighScores
                .slice()
                .sort(
                  (a, b) => (b[gameName] as number) - (a[gameName] as number)
                )
                .map((user, index) => (
                  <React.Fragment key={index}>
                    {user.name === username &&
                      (localStorage.setItem(`${gameName}`, `${user[gameName]}`),
                      null)}
                    {index <= 2 && (
                      <TopThreeScore
                        name={user.name}
                        score={user[gameName] as number}
                        position={index + 1}
                      />
                    )}
                    {index > 2 && (
                      <div className="col-span-1 md:col-span-3">
                        <div
                          className={
                            user.name === username && loggedIn
                              ? 'border-gradient text-white text-center items-center py-3 px-10'
                              : 'text-white text-center items-center py-3 px-10'
                          }
                        >
                          <div className="flex justify-between flex-wrap">
                            <p>#{index + 1}</p>
                            <p>{user.name}</p>
                            <h1>SCORE: {user[gameName]}</h1>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleGame;
