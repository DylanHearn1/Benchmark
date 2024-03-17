import GamePage from './GamePage';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="bg-black min-h-dvh flex items-center text-5xl text-white w-full fixed">
          <div className="w-1280px mx-auto text-center">
            <p className="font-semibold">Human</p>
            <span className="text-gradient font-semibold">Benchmark</span>
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
