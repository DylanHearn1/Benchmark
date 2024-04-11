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
      <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black">
        <div className="w-1280px mx-auto px-5">
          <ul className="flex items-center justify-between">
            <div onClick={() => navigate('/')} className="cursor-pointer">
              <img src={logo} alt="logo" width={'40px'} />
            </div>
            {skeleton ? (
              <>
                <div className="flex space-x-4">
                  <ButtonSkeleton hollow={false} />
                  <ButtonSkeleton hollow={true} />
                </div>
              </>
            ) : loggedIn ? (
              <>
                <div
                  className="flex bg-anchor-gradient py-1 space-x-3 px-3"
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
              </>
            ) : (
              <div className="items-center flex space-x-5">
                <Link to={'/login'}>Login</Link>
                <li>
                  <AnchorGradient href="/register" text="Register" />
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
