import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { formValues } from './RegisterPage';
import logo from './../assets/logo.png';
import eye from './../assets/eye-regular.svg';

const validate = (values: formValues) => {
  const errors: { username?: string; password?: string } = {};
  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const LoginPage = () => {
  const loginUrl = `${import.meta.env.VITE_BACKEND_URL}login`;

  let navigate = useNavigate();

  const { setLoggedIn, setUsername } = useAuthContext();

  const [loginStatus, setLoginStatus] = useState({ status: '' });
  const [showPassword, setShowPassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      const response = await fetch(loginUrl, {
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
      setLoginStatus(data);
      if ('token' in data) {
        navigate('/');
        localStorage.clear();
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setUsername(data.username);
      }
    },
  });

  return (
    <>
      <div className="bg-black min-h-dvh">
        <aside className="bg-white md:w-1/2 lg:w-1/3 2xl:w-1/4 h-dvh my-auto flex flex-col justify-center text-p px-10 space-y-10">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate('/')}
            width={'50px'}
            className="absolute top-5 left-5 cursor-pointer"
          />
          <h1 className="font-medium text-2xl text-center">Log in</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="text-black flex flex-col space-y-10 w-full"
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
                className="py-2 px-3 border-input"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="font-medium opacity-75">
                  Password
                </label>
                <img
                  src={eye}
                  alt=""
                  width={'20px'}
                  className="opacity-50 cursor-pointer hover:opacity-75 ease-in duration-100"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <input
                type={showPassword ? 'password' : 'text'}
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="py-2 px-3 border-input"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-white border-2 w-20 bg-anchor-gradient py-1 hover-"
            >
              Login
            </button>
          </form>
          <div>
            <p className="text-red-500">{loginStatus.status}</p>
            <p className="text-center pt-10">
              Don't have an account? <br />
              <Link
                to="/register"
                className="text-blue-500 font-medium cursor-pointer"
              >
                Register
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default LoginPage;
