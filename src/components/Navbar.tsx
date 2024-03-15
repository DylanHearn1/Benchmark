import AnchorGradient from './AnchorGradient';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Navbar = () => {
  return (
    <>
      <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black">
        <div className="w-1280px mx-auto">
          <ul className="flex items-center justify-between">
            <a href="#">Logo</a>
            <div className="items-center flex space-x-5">
              <Link to={'/login'}>Login</Link>
              <li>
                <AnchorGradient href="#" text="Register" />
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
