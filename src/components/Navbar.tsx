import AnchorGradient from './AnchorGradient';
import { Link } from 'react-router-dom';
import user from './../assets/user.svg';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { loggedIn, setLoggedIn, username } = useAuthContext();
  const [showSignOut, setShowSignOut] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black">
        <div className="w-1280px mx-auto px-5">
          <ul className="flex items-center justify-between">
            <div onClick={() => navigate('/')} className="cursor-pointer">
              logo
            </div>
            {loggedIn ? (
              <>
                <div
                  className="flex space-x-3 bg-anchor-gradient px-2 py-1"
                  onClick={() => setShowSignOut((prev) => !prev)}
                >
                  <img src={user} alt="" width={'20px'} className="invert" />
                  <p>{username}</p>
                  {showSignOut && (
                    <button
                      className="absolute top-20"
                      onClick={() => setLoggedIn(false)}
                    >
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
