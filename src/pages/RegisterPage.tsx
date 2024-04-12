import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/logo.png';
import eye from './../assets/eye-regular.svg';
import { useAuthContext } from '../hooks/useAuthContext';

export interface formValues {
  username: string;
  password: string;
}

const validate = (values: formValues) => {
  const errors: { username?: string; password?: string } = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 5) {
    errors.username = 'Must be at least 5 characters';
  } else if (values.username.length > 20) {
    errors.username = 'Must be less than 20 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be at least 8 characters';
  } else if (values.password.length > 30) {
    errors.password = 'Must less than 40 characters';
  }

  return errors;
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_BACKEND_URL}register`;

  const [registerStatus, setRegisterStatus] = useState({ status: '' });
  const [showPassword, setShowPassword] = useState(true);
  const { setLoggedIn, setUsername } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setRegisterStatus(data);
      await new Promise((res) => setTimeout(res, 1000));
      setLoggedIn(true);
      setUsername(data.username);
      navigate('/');
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
          <h1 className="font-medium text-2xl text-center">Register</h1>
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
                className="py-2 px-3 border-input "
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-white border-2 rounded-lg w-1/4 bg-anchor-gradient hover:text-white"
            >
              Register
            </button>
            <div>
              <p className="text-red-500">{registerStatus.status}</p>
              <p className="text-center pt-10">
                Already have an account? <br />
                <Link
                  to="/login"
                  className="text-blue-500 font-medium cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
};

export default RegisterPage;
