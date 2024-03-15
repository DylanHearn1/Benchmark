import './App.scss';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  useEffect(() => {
    async function helloWorld() {
      const response = await fetch('http://localhost:3000');
      const data = await response.json();
      console.log(data);
    }
    helloWorld();
  }, []);

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
