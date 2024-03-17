import AnchorGradient from './AnchorGradient';
import { Link } from 'react-router-dom';
import user from './../assets/user.svg';
import { useContext, useState } from 'react';
import { logInContext } from '../App';

const Navbar = () => {
  const [loggedInContext, setLoggedInContext] = useContext(logInContext);
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <>
      <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black">
        <div className="w-1280px mx-auto">
          <ul className="flex items-center justify-between">
            <a href="#">Logo</a>
            {loggedInContext ? (
              <>
                <div
                  className="flex space-x-3 bg-anchor-gradient px-2 py-1"
                  onClick={() => setShowSignOut((prev) => !prev)}
                >
                  <img src={user} alt="" width={'20px'} className="invert" />
                  <p>Dylan</p>
                  {showSignOut && (
                    <button
                      className="absolute top-20"
                      onClick={() => setLoggedInContext(false)}
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
