import SingleGame from '../components/SingleGame';
import VerbalMemoryGame from '../games/VerbalMemoryGame';

const VerbalMemoryPage = () => {
  return (
    <>
      <SingleGame
        title="Verbal Memory"
        description="Recall an increasing amount of words, with three lives."
        game={<VerbalMemoryGame />}
        gameName="verbalMemory"
      />
    </>
  );
};

export default VerbalMemoryPage;
