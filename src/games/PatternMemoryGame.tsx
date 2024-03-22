import { useState, useEffect } from 'react';

const PatternMemory = () => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [correctSequence, setCorrectSequence] = useState<Number[]>([]);
  const [attemptSequence, setAttemptSequence] = useState<Number[]>([]);
  const [activeSquare, setActiveSquare] = useState<Number>(10);
  const [clickedSquare, setClickedSquare] = useState<Number>(10);
  const [gameStatus, setGameStatus] = useState('');

  const startRound = () => {
    gameStatus && setGameStatus('');
    setCorrectSequence((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };

  const handleNumberClick = async (input: number) => {
    setAttemptSequence((prev) => [...prev, input]);
    setClickedSquare(input);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setClickedSquare(10);
  };

  useEffect(() => {
    const highlightSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      for (let i = 0; i < correctSequence.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setActiveSquare(correctSequence[i]);
        await new Promise((resolve) => setTimeout(resolve, 400));
        setActiveSquare(10);
      }
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
          setGameStatus(`Score: ${attemptSequence.length}`);
        }
      } else {
        setGameStatus(`Incorrect, game reset!`);
        setCorrectSequence([]);
        setAttemptSequence([]);
      }
    }
  }, [attemptSequence]);

  return (
    <div className="text-white bg-black text-p">
      <div className="grid grid-cols-3 gap-4">
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
            onClick={() => handleNumberClick(index)}
          ></button>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <button
          onClick={() => startRound()}
          className="bg-anchor-gradient px-2"
        >
          New game
        </button>
        <p>{gameStatus}</p>
      </div>
    </div>
  );
};

export default PatternMemory;
