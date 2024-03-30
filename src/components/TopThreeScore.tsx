interface TopThreeScoreProps {
  name: string;
  score: number;
  position: number;
}

const TopThreeScore = ({ name, score, position }: TopThreeScoreProps) => {
  return (
    <div className="text-white bg-yellow-500">
      <p>{position}</p>
      <h1>SCORE: {score}</h1>
      <p>{name}</p>
    </div>
  );
};

export default TopThreeScore;
