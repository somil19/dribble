/* eslint-disable react/prop-types */
import {
  faArrowRightFromBracket,
  faBars,
  faMagnifyingGlass,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { handleDeleteUser, setCurrentUserEmail } from "../features/userSlice";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserEmail = useSelector((state) => state.user.currentUserEmail);
  const users = useSelector((state) => state.user.users);
  const currentUser = users.find((user) => user.email === currentUserEmail);
  // console.log(currentUser);
  const userAvatar = currentUser ? currentUser.avatar : null;
  // console.log(userAvatar);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileShowDropdown, setMobileShowDropdown] = useState(false);
  const [showLogOutDropdown, setShowLogOutDropdown] = useState(false);
  const toggleMobileDropdown = () => {
    setMobileShowDropdown(!mobileShowDropdown);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleLogOutDropdown = () => {
    setShowLogOutDropdown(!showLogOutDropdown);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  function onDeleteUser() {
    dispatch(handleDeleteUser());
    dispatch(setCurrentUserEmail(""));
    navigate("/");
  }
  function onLogOut() {
    navigate("/");
    dispatch(setCurrentUserEmail(""));
  }
  return (
    <nav className="flex justify-between py-4 px-4 md:px-8">
      <div className="flex items-center">
        <h1
          className="lg:text-3xl text-xl  ml-5 font-semibold cursor-pointer"
          onClick={() => navigate("/home")}
        >
          dribbble
        </h1>
      </div>
      {/* Hamburger menu for smaller screens */}
      <button className="bg-pink-500 text-white lg:hidden relative text-md font-bold py-1 px-2 md:px-6 rounded-lg">
        Upload
      </button>
      <div className="flex space-x-3 ">
        <button
          className="lg:hidden relative focus:outline-none text-orange-300"
          onClick={toggleMobileDropdown}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </button>
        {mobileShowDropdown && (
          <div className=" absolute top-14  lg:hidden right-4 mt-6  flex items-center text-gray-300 px-4 py-2 text-md border rounded-lg focus:outline-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 " />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none"
            />
          </div>
        )}
        <button className="lg:hidden relative" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={!menuOpen ? faBars : faXmark}
            size="2x"
            className={`transition-transform text-pink-500 duration-500 ${
              menuOpen ? "-rotate-90" : ""
            }`}
          />{" "}
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className="absolute right-0 mt-14 bg-white rounded-lg shadow-lg z-10 w-56">
          <div className="flex flex-col space-y-2 px-4 py-6 text-center">
            <Link
              to="/inspiration"
              onClick={closeMenu}
              className=" hover:font-semibold  hover:bg-pink-300 rounded-lg transition duration-300 px-2 py-1 block"
            >
              Inspiration
            </Link>
            <hr className="w-full border-slate-200 sm:mx-auto my-2" />
            <Link
              to="/find-work"
              onClick={closeMenu}
              className=" transition hover:font-semibold rounded-lg hover:bg-pink-300 duration-300 px-2 py-1 block"
            >
              Find Work
            </Link>
            <hr className="w-full border-slate-200  sm:mx-auto my-2" />
            <Link
              to="/learn-design"
              onClick={closeMenu}
              className=" transition hover:font-semibold rounded-lg hover:bg-pink-300 duration-300 px-2 py-1 block"
            >
              Learn Design
            </Link>
            <hr className="w-full border-slate-200 sm:mx-auto my-2" />
            <Link
              to="/go-pro"
              onClick={closeMenu}
              className=" hover:font-semibold hover:bg-pink-300 rounded-lg transition duration-300 px-2 py-1 block"
            >
              Go Pro
            </Link>
            <hr className="w-full border-slate-200 sm:mx-auto my-2" />
            <Link
              to="/hire-designers"
              onClick={closeMenu}
              className=" hover:font-semibold hover:bg-pink-300  rounded-lg transition duration-300 px-2 py-1 block"
            >
              Hire Designers
            </Link>
            <hr className="w-full border-slate-200 sm:mx-auto my-2" />
            <button
              className="hover:font-semibold hover:bg-pink-300  rounded-lg transition duration-300 px-2 py-1 block"
              onClick={onLogOut}
            >
              {" "}
              LogOut <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
            <hr className="w-full border-slate-200 sm:mx-auto my-2" />
            <button
              className="hover:font-semibold hover:bg-pink-300  rounded-lg transition duration-300 px-2 py-1 block"
              onClick={onDeleteUser}
            >
              {" "}
              Delete Account <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      )}

      {/* Menu items for larger screens */}
      <div className="hidden lg:flex space-x-4 ml-6 text-gray-500 lg:items-center ">
        {/* ... (same as before) ... */}
        <p className="hover:text-black transition duration-300">
          <Link to="/inspiration"> Inspiration </Link>
        </p>
        <p className="hover:text-black transition duration-300">
          <Link to="/find-work"> Find Work </Link>
        </p>
        <p className="hover:text-black transition duration-300">
          <Link to="/learn-design"> Learn Design </Link>
        </p>
        <p className="hover:text-black transition duration-300">
          <Link to="/go-pro"> Go Pro </Link>
        </p>
        <p className="hover:text-black transition duration-300">
          <Link to="/hire-designers"> Hire Designers </Link>
        </p>
      </div>
      {/* Search input, user avatar, and upload button */}
      <div className="hidden lg:flex space-x-3 items-center">
        <div className="w-46 flex items-center text-gray-400 px-4 py-2 text-md border rounded-lg focus:outline-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 " />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none"
          />
        </div>
        <div className="h-14 w-14 rounded-full border-2 hover:border-pink-500 cursor-pointer">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="h-full w-full rounded-full"
            onClick={toggleLogOutDropdown}
          />
        </div>

        <Button content={"Upload"} />
      </div>
      {showLogOutDropdown && (
        <div className="absolute px-4 py-2 right-24 bg-slate-50 mt-14 shadow-md z-10 w-46">
          <button
            className="text-end w-full "
            onClick={() => setShowLogOutDropdown(false)}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="hover:bg-gray-200 rounded-full p-1"
            />
          </button>
          <button
            className="text-center p-2 w-full hover:bg-pink-200 hover:font-semibold rounded-lg "
            onClick={onLogOut}
          >
            LogOut <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
          <hr className="w-full border-slate-300  my-2" />
          <button
            className="text-center p-2 w-full hover:bg-pink-200 hover:font-semibold rounded-lg "
            onClick={onDeleteUser}
          >
            Delete Account <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
