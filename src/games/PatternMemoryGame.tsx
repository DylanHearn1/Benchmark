import { useState, useEffect } from 'react';

const PatternMemory = () => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [correctSequence, setCorrectSequence] = useState<Number[]>([]);
  const [attemptSequence, setAttemptSequence] = useState<Number[]>([]);
  const [activeSquare, setActiveSquare] = useState<Number>(10);
  const [clickedSquare, setClickedSquare] = useState<Number>(10);

  const startRound = () => {
    setCorrectSequence((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };

  const handleNumberClick = async (input: number) => {
    setAttemptSequence((prev) => [...prev, input]);
    setClickedSquare(input);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setClickedSquare(10);
  };

  useEffect(() => {
    const highlightSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      for (let i = 0; i < correctSequence.length; i++) {
        setActiveSquare(correctSequence[i]);
        await new Promise((resolve) => setTimeout(resolve, 800));
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
        }
      } else {
        setCorrectSequence([]);
        setAttemptSequence([]);
      }
    }
  }, [attemptSequence]);

  return (
    <div className="text-white bg-black">
      <div className="grid grid-cols-3 gap-4">
        {squares.map((_, index) => (
          <button
            className={
              activeSquare === index
                ? 'border-square bg-blue-500'
                : clickedSquare === index
                ? 'border-square bg-white'
                : 'border-square'
            }
            key={index}
            onClick={() => handleNumberClick(index)}
          ></button>
        ))}
      </div>
      <button onClick={() => startRound()}>Start</button>
    </div>
  );
};

export default PatternMemory;
