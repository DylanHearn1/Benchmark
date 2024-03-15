import { useFormik } from 'formik';

const LoginPage = () => {
  const url = 'http://localhost:3000/login';

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
        throw new Error('nopeee');
      }

      const data = await response.json();
      console.log(data);
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
            <p className="text-center pt-10">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-500 font-medium ">
                Register
              </a>
            </p>
          </form>
        </aside>
      </div>
    </>
  );
};

export default LoginPage;
