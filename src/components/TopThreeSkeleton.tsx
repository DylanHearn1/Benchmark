const TopThreeSkeleton = () => {
  return (
    <>
      <div className="flex flex-col justify-center border-gradient px-5 py-10 md:px-10 md:py-20 mb-10">
        <div className="mb-20 bg-white/10 animate-pulse w-16 h-12 mx-auto"></div>
        <div className="flex-wrap flex justify-between">
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center border-gradient px-5 py-10 md:px-10 md:py-20 mb-10">
        <div className="mb-20 bg-white/10 animate-pulse w-16 h-12 mx-auto"></div>
        <div className="flex-wrap flex justify-between">
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center border-gradient px-5 py-10 md:px-10 md:py-20 mb-10">
        <div className="mb-20 bg-white/10 animate-pulse w-16 h-12 mx-auto"></div>
        <div className="flex-wrap flex justify-between">
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
          <div className=" bg-white/10 animate-pulse w-24 h-8"></div>
        </div>
      </div>
    </>
  );
};

export default TopThreeSkeleton;
