import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

interface chimpGameProps {
  fetchHighscore: () => void;
}

const ChimpGame = ({ fetchHighscore }: chimpGameProps) => {
  const [correctSequence, setCorrectSequence] = useState<number[]>([]);
  const [selectedSquares, setSelectedSquares] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [round, setRound] = useState(3);
  const [score, setScore] = useState(0);

  const loggedIn = useAuthContext();

  const squares = Array.from({ length: 40 });
  const squareStyle =
    'md:w-20 md:h-20 h-16 w-16 grid-span-1 flex justify-center items-center text-2xl';

  const startGame = () => {
    setCorrectSequence([]);
    setSelectedSquares([]);
    setScore(0);
    setGameStarted(false);

    let randomNumber: number;

    if (correctSequence.length > 39) return;

    do {
      randomNumber = Math.floor(Math.random() * 40);
    } while (correctSequence.includes(randomNumber));

    const fillCorrect: Array<number> = [];

    while (fillCorrect.length < round) {
      const randomNumber = Math.floor(Math.random() * 40);
      if (!fillCorrect.includes(randomNumber)) {
        fillCorrect.push(randomNumber);
      }
    }

    setCorrectSequence(fillCorrect);
  };

  const handleSquareClick = (index: number) => {
    setGameStarted(true);
    setSelectedSquares((prev) => [...prev, index]);
    console.log(index);
  };

  const gameOver = () => {
    checkHighScore(score);
    setRound(3);
    setSelectedSquares([]);
    setCorrectSequence([]);
    setGameStarted(false);
    setScore(0);
  };

  useEffect(() => {
    if (correctSequence.length < 1) return;

    if (selectedSquares.length < correctSequence.length) {
      JSON.stringify(selectedSquares) !==
      JSON.stringify(correctSequence.slice(0, selectedSquares.length))
        ? gameOver()
        : console.log('getting there');
    } else if (
      JSON.stringify(selectedSquares) === JSON.stringify(correctSequence)
    ) {
      console.log('correct sequence');
      setGameStarted(false);
      setSelectedSquares([]);
      setCorrectSequence([]);
      setRound((prev) => prev + 1);
      setScore((prev) => prev + 1);
      startGame();
    }
  }, [selectedSquares]);

  const checkHighScore = async (score: number) => {
    if (loggedIn) {
      const storedValue = localStorage.getItem('chimpGame');
      const highScore = storedValue !== null ? +storedValue : 0;

      if (score > highScore) {
        const url = `${import.meta.env.VITE_BACKEND_URL}updateHighscore`;

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: localStorage.getItem('token'),
              gameName: 'chimpGame',
              score: score,
            }),
          });
          const data = await response.json();
          localStorage.setItem('chimpGame', data.chimpGame);
          fetchHighscore();
          console.log('done');
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-8 grid-cols-5 gap-4">
        {squares.map((_, index) => (
          <div
            className={
              selectedSquares.includes(index)
                ? ''
                : correctSequence.includes(index)
                ? `border-gradient ${squareStyle}`
                : `border-4 border-transparent ${squareStyle}`
            }
            key={index}
            onClick={() => handleSquareClick(index)}
          >
            {correctSequence.includes(index) &&
              !gameStarted &&
              correctSequence.indexOf(index) + 1}
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center">
        <button onClick={startGame} className="bg-anchor-gradient">
          Start
        </button>
        <p>Score: {score}</p>
      </div>
    </>
  );
};

export default ChimpGame;
