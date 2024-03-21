import SingleGame from '../components/SingleGame';
import PatternMemoryGame from '../games/PatternMemoryGame';

const PatternMemoryPage = () => {
  return (
    <>
      <SingleGame
        title="Pattern Memory"
        description="remember"
        game={<PatternMemoryGame />}
      />
    </>
  );
};

export default PatternMemoryPage;
