import SingleGame from '../components/SingleGame';
import VerbalMemoryGame from '../games/VerbalMemoryGame';
import { useState } from 'react';

const VerbalMemoryPage = () => {
  const [fetchScores, setFetchScores] = useState(false);

  const fetchHighscores = () => {
    setFetchScores((prev) => !prev);
  };

  return (
    <>
      <SingleGame
        title="Verbal Memory"
        description="Recall an increasing amount of words, with three lives."
        game={<VerbalMemoryGame fetchHighscore={fetchHighscores} />}
        gameName="verbalMemory"
        fetchHighscores={fetchScores}
      />
    </>
  );
};

export default VerbalMemoryPage;
