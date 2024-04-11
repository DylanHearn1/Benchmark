import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

interface PatternMemoryGameProps {
  fetchHighscore: () => void;
}

const PatternMemory = ({ fetchHighscore }: PatternMemoryGameProps) => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [correctSequence, setCorrectSequence] = useState<Number[]>([]);
  const [attemptSequence, setAttemptSequence] = useState<Number[]>([]);
  const [activeSquare, setActiveSquare] = useState<Number>(10);
  const [clickedSquare, setClickedSquare] = useState<Number>(10);
  const [gameScore, setGameScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const { loggedIn } = useAuthContext();

  const startRound = () => {
    setCorrectSequence((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };

  const newRound = () => {
    setCorrectSequence([]);
    setAttemptSequence([]);
    setGameScore(0);
    setCorrectSequence((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };

  const handleNumberClick = async (input: number) => {
    setAttemptSequence((prev) => [...prev, input]);
    setClickedSquare(input);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setClickedSquare(10);
  };

  const checkHighScore = async (score: number) => {
    if (loggedIn) {
      const storedValue = localStorage.getItem('patternMemory');
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
              gameName: 'patternMemory',
              score: score,
            }),
          });
          const data = await response.json();
          localStorage.setItem('patternMemory', data.patternMemory);
          fetchHighscore();
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  useEffect(() => {
    setIsGameActive(true);
    const highlightSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      for (let i = 0; i < correctSequence.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setActiveSquare(correctSequence[i]);
        await new Promise((resolve) => setTimeout(resolve, 400));
        setActiveSquare(10);
      }
      setIsGameActive(false);
    };
    highlightSequence();
  }, [correctSequence]);

  useEffect(() => {
    if (correctSequence.length > 0) {
      // CHECK IF GAME HAS STARTED
      if (
        JSON.stringify(attemptSequence) ===
        JSON.stringify(correctSequence.slice(0, attemptSequence.length))
      ) {
        if (attemptSequence.length === correctSequence.length) {
          setAttemptSequence([]);
          startRound();
          setGameScore(attemptSequence.length);
        }
      } else {
        checkHighScore(gameScore);
        setGameScore(0);
        setCorrectSequence([]);
        setAttemptSequence([]);
      }
    }
  }, [attemptSequence]);

  return (
    <div className="text-white bg-black text-p flex flex-col items-center">
      <div className="grid-cols-3 gap-4 inline-grid">
        {squares.map((_, index) => (
          <button
            className={
              activeSquare === index
                ? 'border-square bg-gradient'
                : clickedSquare === index
                ? 'border-square bg-white'
                : 'border-square'
            }
            key={index}
            onClick={() => (isGameActive ? null : handleNumberClick(index))}
          ></button>
        ))}
      </div>
      <div className="flex justify-between mt-10 space-x-10">
        <button onClick={() => newRound()} className="bg-anchor-gradient px-2">
          New game
        </button>
        <p>Score: {`${gameScore}`}</p>
      </div>
    </div>
  );
};

export default PatternMemory;
