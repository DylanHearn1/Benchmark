import GamePage from './GamePage';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="bg-black min-h-dvh flex flex-col justify-center items-center text-5xl text-white w-full fixed">
          <div className="w-1280px mx-auto text-center">
            <p className="font-semibold">Mind</p>
            <span className="text-gradient font-semibold">Benchmark</span>
          </div>
          <div className="absolute bottom-8 w-40 h-12 animate-bounce">
            <div className="w-full h-1.5 bg-white rounded-full opacity-75 absolute bottom-0"></div>
          </div>
        </div>
        <div className="min-h-dvh flex flex-col top-screen absolute bg-black border-top-2 border-slate-800 rounded-3xl w-full">
          <GamePage />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
