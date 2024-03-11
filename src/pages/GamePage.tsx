import GameCard from '../components/GameCard';

const GamePage = () => {
  return (
    <div className="w-1280px mx-auto flex flex-wrap text-white justify-center">
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
      />
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
      />
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
      />
      <GameCard
        title="Pattern Memory"
        description="Memorize the pattern that appears on the squares."
      />
    </div>
  );
};

export default GamePage;
