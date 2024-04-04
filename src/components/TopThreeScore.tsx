interface TopThreeScoreProps {
  name: string;
  score: number;
  position: number;
}

const TopThreeScore = ({ name, score, position }: TopThreeScoreProps) => {
  return (
    <div className="text-white text-center justify-center border-gradient px-5 py-10 md:px-10 md:py-20 mb-10">
      <p className="pb-20 text-2xl font-bold">#{position}</p>
      <div className="flex justify-between flex-wrap">
        <p>{name}</p>
        <h1>SCORE: {score}</h1>
      </div>
    </div>
  );
};

export default TopThreeScore;
