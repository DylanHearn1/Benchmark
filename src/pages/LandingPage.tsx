import GamePage from './GamePage';
import Navbar from '../components/Navbar';

interface LandingPageProps {
  navbarSkeleton: boolean;
}

const LandingPage = ({ navbarSkeleton }: LandingPageProps) => {
  return (
    <>
      <header>
        <Navbar skeleton={navbarSkeleton} />
      </header>
      <main>
        <div className="bg-black min-h-dvh flex flex-col justify-center items-center text-5xl text-white w-full fixed">
          <div className="w-1280px mx-auto text-center">
            <p className="font-semibold">Mind</p>
            <span className="text-gradient font-semibold">Benchmark</span>
          </div>
          <div className="absolute bottom-8 w-40 h-12 animate-bounce">
            <div className="w-full h-1.5 bg-white rounded-full absolute bottom-0"></div>
          </div>
        </div>
        <div className="min-h-dvh flex flex-col top-screen absolute bg-black border-top-2 rounded-3xl w-full real-shadow mt-16">
          <GamePage />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
