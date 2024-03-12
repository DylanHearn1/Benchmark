import AnchorGradient from './AnchorGradient';

const Navbar = () => {
  return (
    <nav className="fixed text-white text-p z-50 w-screen left-0 py-4 bg-black">
      <div className="w-1280px mx-auto">
        <ul className="flex space-x-5 justify-end items-center">
          <li>Login</li>
          <li>
            <AnchorGradient href="#" text="Register" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
