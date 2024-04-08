import { useState } from 'react';
import SingleGame from '../components/SingleGame';
import PatternMemoryGame from '../games/PatternMemoryGame';

const PatternMemoryPage = () => {
  const [fetchScores, setFetchScores] = useState(false);

  const fetchHighscores = () => {
    setFetchScores((prev) => !prev);
  };

  return (
    <>
      <SingleGame
        title="Pattern Memory"
        description="Remember the pattern displayed, then recite it."
        game={<PatternMemoryGame fetchHighscore={fetchHighscores} />}
        gameName="patternMemory"
        fetchHighscores={fetchScores}
      />
    </>
  );
};

export default PatternMemoryPage;
