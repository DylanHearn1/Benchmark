import './App.scss';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <LandingPage />
        </div>
      </main>
      <footer className="py-8">
        <p className="text-white">hi</p>
      </footer>
    </>
  );
}

export default App;
