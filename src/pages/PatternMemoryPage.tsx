import SingleGame from '../components/SingleGame';
import PatternMemoryGame from '../games/PatternMemoryGame';

const PatternMemoryPage = () => {
  return (
    <>
      <SingleGame
        title="Pattern Memory"
        description="Remember the pattern displayed, then recite it."
        game={<PatternMemoryGame />}
        gameName="patternMemory"
      />
    </>
  );
};

export default PatternMemoryPage;
