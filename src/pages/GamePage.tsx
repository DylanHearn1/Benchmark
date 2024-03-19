import GameCard from '../components/GameCard';
import regularSquare from './../assets/square-regular.svg';

const GamePage = () => {
  return (
    <div className="w-1280px mx-auto flex flex-wrap text-white justify-around">
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
        image={regularSquare}
        url="/pattern-memory"
      />
    </div>
  );
};

export default GamePage;
