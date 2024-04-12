import AnchorGradient from './AnchorGradient';
import { Link } from 'react-router-dom';
import user from './../assets/user.svg';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/logo.png';
import ButtonSkeleton from './ButtonSkeleton';

interface NavbarProps {
  skeleton?: boolean;
}

const Navbar = ({ skeleton }: NavbarProps) => {
  const { loggedIn, setLoggedIn, username, setUsername } = useAuthContext();
  const [showSignOut, setShowSignOut] = useState(false);

  let navigate = useNavigate();

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername('');
    localStorage.clear();
  };

  return (
    <>
      <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black top-0">
        <div className="w-1280px mx-auto px-5">
          <ul className="flex items-center justify-between">
            <li>
              <div onClick={() => navigate('/')} className="cursor-pointer">
                <img src={logo} alt="logo" width={'40px'} />
              </div>
            </li>
            {skeleton ? (
              <li>
                <div className="flex space-x-4">
                  <ButtonSkeleton hollow={false} />
                  <ButtonSkeleton hollow={true} />
                </div>
              </li>
            ) : loggedIn ? (
              <li>
                <div
                  className="flex bg-anchor-gradient space-x-3 "
                  onClick={() => setShowSignOut((prev) => !prev)}
                >
                  <img
                    src={user}
                    alt="user icon"
                    width={'20px'}
                    className="invert"
                  />
                  <p>{username}</p>
                  {showSignOut && (
                    <button className="absolute top-20" onClick={handleSignOut}>
                      Sign out
                    </button>
                  )}
                </div>
              </li>
            ) : (
              <li className="items-center flex space-x-5">
                <Link to={'/login'}>Login</Link>

                <AnchorGradient href="/register" text="Register" />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
