import { useEffect, useState } from 'react';
import SingleGame from '../components/SingleGame';
import PatternMemoryGame from '../games/PatternMemoryGame';

export interface highScoresInterface {
  name: string;
  patternMemory: number;
}

const PatternMemoryPage = () => {
  const [usersHighscore, setUsersHighscore] = useState<
    Array<highScoresInterface>
  >([]);

  useEffect(() => {
    const fetchHighscores = async () => {
      try {
        const response = await fetch('http://localhost:3000/patternmemory');
        const data = await response.json();
        setUsersHighscore(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchHighscores();
  }, []);

  return (
    <>
      <SingleGame
        title="Pattern Memory"
        description="Remember the pattern displayed, then recite it."
        game={<PatternMemoryGame />}
        highscores={usersHighscore}
      />
    </>
  );
};

export default PatternMemoryPage;
