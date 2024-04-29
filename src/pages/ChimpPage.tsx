import SingleGame from '../components/SingleGame';
import ChimpGame from '../games/ChimpGame';
import { useState } from 'react';

const ChimpPage = () => {
  const [fetchScores, setFetchScores] = useState(false);

  const fetchHighscores = () => {
    setFetchScores((prev) => !prev);
  };

  return (
    <>
      <SingleGame
        title="Chimp Game"
        description="Memorize the order of squares from ascending order."
        game={<ChimpGame fetchHighscore={fetchHighscores} />}
        gameName="chimpGame"
        fetchHighscores={fetchScores}
      />
    </>
  );
};

export default ChimpPage;
