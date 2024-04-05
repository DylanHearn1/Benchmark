import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface formValues {
  username: string;
  password: string;
}

const validate = (values: formValues) => {
  const errors: { username?: string; password?: string } = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 6) {
    errors.username = 'Must be at least 6 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 10) {
    errors.password = 'Must be at least 10 characters';
  }
  return errors;
};

const RegisterPage = () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}register`;

  const [registerStatus, setRegisterStatus] = useState({ status: '' });

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
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-white border-2 rounded-lg w-1/4 bg-anchor-gradient py-1 hover:text-white"
            >
              Register
            </button>
            <p className="text-red-500">{registerStatus.status}</p>
            <p className="text-center pt-10">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-500 font-medium cursor-pointer"
              >
                Login
              </Link>
            </p>
          </form>
        </aside>
      </div>
    </>
  );
};

export default RegisterPage;
