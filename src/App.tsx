import './App.scss';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import PatternMemoryPage from './pages/PatternMemoryPage';
import VerbalMemoryPage from './pages/VerbalMemoryPage';
import ChimpPage from './pages/ChimpPage';

export const logInContext = createContext<logInInterface>(null!);

export interface logInInterface {
  loggedIn: boolean;
  setLoggedIn: (param: boolean) => void;
  username: string;
  setUsername: (param: string) => void;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [navbarSkeleton, setNavbarSkeleton] = useState(false);

  const tokenUrl = `${import.meta.env.VITE_BACKEND_URL}checkToken`;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setNavbarSkeleton(true);
      const checkToken = async () => {
        try {
          const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: localStorage.getItem('token') }),
          });

          if (response.status === 200) {
            const data = await response.json();
            setLoggedIn(true);
            setUsername(data.username);
            setNavbarSkeleton(false);
          } else {
            setLoggedIn(false);
            setNavbarSkeleton(false);
          }
        } catch (e) {
          console.error(e);
          setLoggedIn(false);
          setNavbarSkeleton(false);
        }
      };
      checkToken();
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <logInContext.Provider
        value={{ loggedIn, setLoggedIn, username, setUsername }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<LandingPage navbarSkeleton={navbarSkeleton} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pattern-memory" element={<PatternMemoryPage />} />
            <Route path="/verbal-memory" element={<VerbalMemoryPage />} />
            <Route path="/chimp" element={<ChimpPage />} />
          </Routes>
        </BrowserRouter>
      </logInContext.Provider>
    </>
  );
}

export default App;
