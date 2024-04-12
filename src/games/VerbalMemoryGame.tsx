import { useState, useEffect } from 'react';
import Words from '../components/words.ts';

const VerbalMemoryGame = () => {
  const [wordPool, setWordPool] = useState<string[]>([]);
  const [seenWords, setSeenWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState('');
  const [lives, setLives] = useState(3);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setGameStart(true);
    setScore(0);
    setWordPool([]);
    setSeenWords([]);
    let firstWord = Words[Math.floor(Math.random() * Words.length)];
    setWordPool([firstWord]);
    setCurrentWord(firstWord);
  };

  useEffect(() => {
    if (!lives) {
      setGameOver(true);
      setGameStart(false);
      setLives(3);
    }
  }, [lives]);

  useEffect(() => {
    let current;

    if (wordPool.length > 1) {
      do {
        current = wordPool[Math.floor(Math.random() * wordPool.length)];
      } while (current === currentWord);

      setCurrentWord(current);
    }
  }, [wordPool]);

  const handleSeenWord = () => {
    if (seenWords.includes(currentWord)) {
      console.log('correct');
      setScore((prevScore) => prevScore + 1);
      updateWordPool();
    } else {
      console.log('wrong');
      setLives((prev) => prev - 1);
      updateWordPool();
    }
  };

  const handleNewWord = () => {
    if (seenWords.includes(currentWord)) {
      setLives((prev) => prev - 1);
      console.log('wrong');
      updateWordPool();
    } else {
      console.log('correct');
      setScore((prevScore) => prevScore + 1);
      setSeenWords((prev) => [...prev, currentWord]);
      updateWordPool();
    }
  };

  const updateWordPool = () => {
    let newWord;
    do {
      newWord = Words[Math.floor(Math.random() * Words.length)];
    } while (wordPool.includes(newWord));

    console.log(newWord);
    setWordPool((prev) => [...prev, newWord]);
  };

  return (
    <>
      {gameStart ? (
        <div className="text-center">
          <p className="text-white text-4xl my-32">
            {currentWord[0].toUpperCase() + currentWord.slice(1)}
          </p>
          <div className="space-x-10 my-10">
            <button
              className="border-gradient text-p px-3 py-1"
              onClick={handleSeenWord}
            >
              Seen
            </button>
            <button
              className="border-gradient text-p px-3 py-1"
              onClick={handleNewWord}
            >
              New
            </button>
          </div>
          <div className="flex space-x-5 justify-center flex-wrap">
            <p>Lives: {lives}</p>
            <p>Score: {score}</p>
          </div>
        </div>
      ) : gameOver ? (
        <>
          <p className="text-center text-p">Score: {score}</p>
          <button
            className="bg-blue-500 flex mx-auto bg-anchor-gradient text-p"
            onClick={startGame}
          >
            Restart
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 flex mx-auto bg-anchor-gradient text-p"
          onClick={startGame}
        >
          Start
        </button>
      )}
    </>
  );
};

export default VerbalMemoryGame;
