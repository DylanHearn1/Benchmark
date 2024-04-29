import { useNavigate } from 'react-router-dom';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const GameCard = ({ title, description, image, url }: GameCardProps) => {
  let navigate = useNavigate();
  return (
    <div className="border border-1 flex flex-col justify-center text-center items-center px-8 py-8 text-p space-y-8 max-w-96 bg-black mx-5 my-5">
      <img src={image} alt="game card image" className="invert w-12 h-12" />
      <h1>{title}</h1>
      <p className="opacity-75">{description}</p>

      <button
        onClick={() => navigate(`${url}`)}
        className="bg-anchor-gradient "
      >
        Play
      </button>
    </div>
  );
};

export default GameCard;
