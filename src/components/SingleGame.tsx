import { ReactElement, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useAuthContext } from '../hooks/useAuthContext';
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
  const { loggedIn, username } = useAuthContext();

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
        console.log(data);
        setGlobalHighScores(data);
      } catch {
        console.log('error fetchin');
      }
    };
    fetchGlobal();
  }, []);

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
        {globalHighScores
          .slice()
          .sort((a, b) => (b[gameName] as number) - (a[gameName] as number))
          .map((user, index) => (
            <>
              {index === 0 ? (
                <TopThreeScore
                  name={user.name}
                  score={user[gameName] as number}
                  position={1}
                />
              ) : index === 1 ? (
                <TopThreeScore
                  name={user.name}
                  score={user[gameName] as number}
                  position={2}
                />
              ) : (
                index === 2 && (
                  <TopThreeScore
                    name={user.name}
                    score={user[gameName] as number}
                    position={3}
                  />
                )
              )}
              {index > 2 && (
                <div key={index}>
                  <p className={user.name === username ? 'bg-blue-500' : ''}>
                    {user.name}
                  </p>
                  <p>{user[gameName]}</p>
                </div>
              )}
            </>
          ))}
        <button>test</button>
      </main>
    </>
  );
};

export default SingleGame;
