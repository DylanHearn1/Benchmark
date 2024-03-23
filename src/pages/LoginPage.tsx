import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const LoginPage = () => {
  const url = 'http://localhost:3000/login';
  let navigate = useNavigate();

  const { setLoggedIn, setUsername } = useAuthContext();

  const [loginStatus, setLoginStatus] = useState({ status: '' });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Server couldn't respond");
      }

      const data = await response.json();
      console.log(data);
      setLoginStatus(data);
      if ('token' in data) {
        navigate('/');
        setLoggedIn(true);
        setUsername(data.username);
      }
    },
  });

  return (
    <>
      <div className="bg-black min-h-dvh">
        <aside className="bg-white w-1/4 h-dvh my-auto flex items-center text-p">
          <form
            onSubmit={formik.handleSubmit}
            className="text-black flex flex-col space-y-10 w-full px-10"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="username" className="font-medium opacity-75">
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="py-2 px-3 border-input "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="font-medium opacity-75">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="py-2 px-3 border-input"
              />
            </div>
            <button
              type="submit"
              className="bg-white border-2 rounded-lg w-1/4 bg-anchor-gradient py-1"
            >
              Login
            </button>
            <p className="text-red-500">{loginStatus.status}</p>
            <p className="text-center pt-10">
              Don't have an account?{' '}
              <p
                onClick={() => navigate('/register')}
                className="text-blue-500 font-medium cursor-pointer"
              >
                Register
              </p>
            </p>
          </form>
        </aside>
      </div>
    </>
  );
};

export default LoginPage;
