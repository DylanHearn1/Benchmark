interface GameCardProps {
  title: string;
  description: string;
  image: string;
}

const GameCard = ({ title, description, image }: GameCardProps) => {
  return (
    <div className="border border-1 flex flex-col justify-center text-center">
      <img src={image} alt="game card image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default GameCard;
