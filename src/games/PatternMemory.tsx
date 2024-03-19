import { useState, useEffect } from 'react';

const PatternMemory = () => {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [correctSequence, setCorrectSequence] = useState<Number[]>([]);
  const [attemptSequence, setAttemptSequence] = useState<Number[]>([]);

  const startRound = () => {
    setCorrectSequence((prev) => [...prev, Math.floor(Math.random() * 9)]);
  };

  const handleNumberClick = (input: number) => {
    setAttemptSequence((prev) => [...prev, input]);
  };

  // after start startRound
  // function, loops over correct sequence
  // settimeout of 500ms
  // settimeout includes adding classlist to square
  //

  useEffect(() => {
    if (correctSequence.length > 0) {
      // CHECK IF GAME HAS STARTED
      if (
        JSON.stringify(attemptSequence) ===
        JSON.stringify(correctSequence.slice(0, attemptSequence.length))
      ) {
        if (attemptSequence.length === correctSequence.length) {
          alert('correct');
          setAttemptSequence([]);
          startRound();
        }
      } else {
        alert('wrong');
        setCorrectSequence([]);
        setAttemptSequence([]);
      }
    }
  }, [attemptSequence]);

  return (
    <>
      <div>
        <div className="flex">
          {correctSequence.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
        </div>
        <div className="flex">
          {attemptSequence.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {squares.map((square, index) => (
          <>
            <button
              className=" bg-blue-500"
              key={index}
              onClick={() => handleNumberClick(index)}
            >
              {square}
            </button>
          </>
        ))}
      </div>
      <button onClick={() => startRound()}>Start</button>
    </>
  );
};

export default PatternMemory;
