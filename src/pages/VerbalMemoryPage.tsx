import SingleGame from '../components/SingleGame';
import VerbalMemoryGame from '../games/VerbalMemoryGame';

const VerbalMemoryPage = () => {
  return (
    <>
      <SingleGame
        title="Verbal Memory"
        description="Remember the words displayed, then recite it."
        game={<VerbalMemoryGame />}
        gameName="verbalMemory"
      />
    </>
  );
};

export default VerbalMemoryPage;
