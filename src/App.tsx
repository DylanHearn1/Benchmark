import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

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
    </>
  );
}

export default App;
