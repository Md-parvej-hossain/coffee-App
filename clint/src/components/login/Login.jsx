import React, { useContext } from 'react';
import { Link } from 'react-router';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from './../../firebase/AuthProvider';
const Login = () => {
  const { logInUser, googleLogin } = useContext(AuthContext);
  const handaleUser = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const sigUser = Object.fromEntries(formData.entries());
    const { email, password } = sigUser;
    logInUser(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        const userInfo = {
          email,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };
        fetch('http://localhost:5000/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col max-w-6/12 mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handaleUser}
        noValidate=""
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              to={'/register'}
              rel="noopener noreferrer"
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </Link>
            .
          </p>
          <div className="">
            <button
              onClick={googleLogin}
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md bg-primary dark:text-gray-50 flex items-center justify-center btn"
            >
              Sign in with Google<FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
