import './App.scss';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';

export const logInContext = createContext([false, () => {}]);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <logInContext.Provider value={[loggedIn, setLoggedIn]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </logInContext.Provider>
    </>
  );
}

export default App;
