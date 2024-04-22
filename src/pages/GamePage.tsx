import GameCard from '../components/GameCard';
import regularSquare from './../assets/square-regular.svg';
import verballogo from './../assets/a-solid.svg';

const GamePage = () => {
  return (
    <div className="w-1280px mx-auto flex flex-wrap text-white justify-around">
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
        image={regularSquare}
        url="/pattern-memory"
      />
      <GameCard
        title="Verbal Memory"
        description="Recall an increasing amount of words, with three lives."
        image={verballogo}
        url="/verbal-memory"
      />
      <GameCard
        title="Chimp Test"
        description="Memorize the order of squares from ascending order."
        image={verballogo}
        url="/chimp"
      />
    </div>
  );
};

export default GamePage;
