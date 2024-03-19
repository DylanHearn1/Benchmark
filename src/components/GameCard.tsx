interface GameCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const GameCard = ({ title, description, image, url }: GameCardProps) => {
  return (
    <div className="border border-1 flex flex-col justify-center text-center items-center px-8 py-8 text-p space-y-8">
      <img src={image} alt="game card image" className="invert w-12" />
      <h1>{title}</h1>
      <p className="opacity-75">{description}</p>
      <a href={url} className="bg-anchor-gradient py-1 px-5">
        go
      </a>
    </div>
  );
};

export default GameCard;
