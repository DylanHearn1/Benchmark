import './App.scss';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import PatternMemoryPage from './pages/PatternMemoryPage';

export const logInContext = createContext<logInInterface | null>(null!);

export interface logInInterface {
  loggedIn: boolean;
  setLoggedIn: (param: boolean) => void;
  username: string;
  setUsername: (param: string) => void;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <>
      <logInContext.Provider
        value={{ loggedIn, setLoggedIn, username, setUsername }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pattern-memory" element={<PatternMemoryPage />} />
          </Routes>
        </BrowserRouter>
      </logInContext.Provider>
    </>
  );
}

export default App;
