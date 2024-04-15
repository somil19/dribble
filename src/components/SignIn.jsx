/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUserEmail } from "../features/userSlice";
import Button from "./Button";
/* eslint-disable react/no-unescaped-entities */
export default function SignIn({ setSignIn, users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notFound, setNotFound] = useState(false);
  const emailExist = users.map((user) => user.email).includes(email);
  const passwordExist = users.map((user) => user.password).includes(password);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emptyInput = !email || !password;
  const handleSignIn = (e) => {
    e.preventDefault();
    if (emailExist && passwordExist) {
      dispatch(setCurrentUserEmail(email));
      navigate("/home");
    } else {
      setNotFound(true);
    }
  };

  return (
    <form
      className="bg-white shadow-2xl rounded-2xl overflow-hidden border-4 lg:w-3/4 w-full border-blue-400 "
      onSubmit={handleSignIn}
    >
      <div className="px-6 md:px-10 py-8 md:py-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
          Welcome Back!
        </h2>

        {notFound ? (
          <p className="text-red-500 mt-2 md:mt-3 text-center ">
            Incorrect login credentials i.e. email or password!{" "}
          </p>
        ) : (
          <p className="text-center text-zinc-600  mt-2 md:mt-3">
            We missed you, sign in to continue.
          </p>
        )}

        <div className="mt-8">
          <div className="relative">
            <label
              className="block mb-2 md:mb-3 text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="you@example.com"
              className="block w-full px-4 py-3 mt-1 text-sm md:text-base text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block mb-2 md:mb-3 text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="••••••••"
              className="block w-full px-4 py-3 mt-1 text-sm md:text-base text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <Button
              content="Let's Go"
              type={"submit"}
              disabled={emptyInput}
              className={"w-full"}
            />
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 py-4 bg-blue-200 dark:bg-zinc-800">
        <div className="text-sm md:text-base text-blue-900 dark:text-blue-300 text-center">
          Don't have an account?
          <a
            className="font-medium underline"
            href="#"
            onClick={() => setSignIn(false)}
          >
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
}
