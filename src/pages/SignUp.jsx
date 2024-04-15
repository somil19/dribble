/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import img1 from "../assets/dribble.png";
import {
  faCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setCurrentUserEmail } from "../features/userSlice";
import SignIn from "../components/SignIn";
import Button from "../components/Button";

{
  /* Radhe Radhe! */
}
export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    if (users.map((user) => user.username).includes(username)) {
      setUsernameExists(true);
    } else {
      setUsernameExists(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setValidEmail(isValidEmail(newEmail)); // Update email validity state
  };

  const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const emptyInput =
    !name || !username || !email || !password || !termsConditions;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (emptyInput) {
      return;
    }
    const userInfo = {
      name: name,
      username: username,
      email: email,
      password: password,
      avatar: "",
      usersChoices: [],
    };
    dispatch(addUser(userInfo));
    dispatch(setCurrentUserEmail(email));
    navigate("/welcome");
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="lg:flex flex-wrap w-full">
      <div
        className="hidden lg:block  h-screen bg-cover lg:w-[35%] px-8 py-5"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="flex flex-col space-y-5 px-4 mt-8">
          <p className="text-2xl text-yellow-600 font-semibold">dribble</p>
          <h1 className="text-xl font-bold text-yellow-700 lg:text-3xl md:text-2xl ">
            Discover the world's top Designers and Creatives.
          </h1>
        </div>
        <p className="bottom-0 absolute pb-5 text-yellow-700">
          Art by <span className="underline">Peter Tarka</span>
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white lg:w-[65%]  h-full py-5 px-8  flex justify-center items-center">
        {!signIn ? (
          <div className="w-full lg:max-w-lg">
            <div className="flex justify-end my-2 space-x-1 ">
              <a href="#" className="text-black">
                Already a member?
              </a>
              <span
                className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </span>
            </div>
            <div className=" lg:my-10">
              <h1 className="font-bold text-2xl lg:text-3xl ">
                Sign up to Dribble
              </h1>
              {usernameExists && (
                <p className="text-sm text-red-500 mt-5 pl-6">
                  <FontAwesomeIcon icon={faCircle} size="2xs" /> Username has
                  been already taken
                </p>
              )}
            </div>
            <form className="mt-10 " onSubmit={handleFormSubmit}>
              <div className="lg:mb-8 mb-2 flex flex-col lg:flex-row space-x-0 lg:justify-between ">
                <div className="w-full lg:w-[45%] mb-6 lg:mb-0">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-md font-bold text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-sm leading-tight text-black font-semibold  rounded-lg  focus:outline-none bg-gray-100"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full lg:w-[45%] mb-4 lg:mb-0  ">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-md font-bold text-black"
                  >
                    {usernameExists && (
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        color="orange"
                      />
                    )}{" "}
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="off"
                    className={`w-full px-4 py-3 ${
                      usernameExists && "bg-red-200"
                    } text-sm leading-tight text-black font-semibold  rounded-lg  focus:outline-none bg-gray-100`}
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="lg:mb-8 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-bold text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-3 text-sm leading-tight text-black font-semibold  rounded-lg  focus:outline-none bg-gray-100"
                  placeholder="Enter Email"
                  required
                />
                {!validEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email
                  </p>
                )}
              </div>
              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full px-4 py-3 text-sm leading-tight text-black font-semibold  rounded-lg  focus:outline-none bg-gray-100"
                  placeholder="6+ characters"
                  required
                />
              </div>
              <div className="mb-8 flex space-x-8 items-center">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  value={termsConditions}
                  onChange={() => setTermsConditions(!termsConditions)}
                  className="mr-2 h-5 w-8 absolute"
                />
                <label htmlFor="agree" className="text-sm text-gray-600">
                  Creating an account means you're okay with our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  , and our default{" "}
                  <a href="#" className="text-blue-600 underline">
                    Notification Settings
                  </a>
                  .
                </label>
              </div>
              {/* <button
                type="submit"
                className="w-1/2 px-4 py-2 my-2 text-white font-semibold bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none"
              >
                Create Account
              </button> */}
              <Button
                type="submit"
                content="Create Account"
                className={"w-1/2 my-2"}
                disabled={emptyInput}
              />
            </form>
            <div className="mt-4 text-xs text-gray-600 w-2/3">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>{" "}
              apply.
            </div>
          </div>
        ) : (
          <SignIn setSignIn={setSignIn} users={users} />
        )}
      </div>
    </div>
  );
}
