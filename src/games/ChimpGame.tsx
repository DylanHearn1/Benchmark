const ChimpGame = () => {
  const squares = Array.from({ length: 40 });

  return (
    <>
      <p>yo</p>
      <div className="flex flex-wrap gap-4">
        {squares.map((_, index) => (
          <div className="border-gradient px-10 py-10" key={index}></div>
        ))}
      </div>
    </>
  );
};

export default ChimpGame;
