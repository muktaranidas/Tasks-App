import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/HeaderLogo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to="/">
          <img src={logo} alt="" className="headerImage" />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Add Task
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/my-task"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              My Task
            </Link>
          </li>
          <li className="flex">
            <Link
              to="completed-task"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              Completed Task
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/signin">
            <button className="self-center px-8 py-3 rounded">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Sign up
            </button>
          </Link>
          <label
            for="Toggle2"
            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
          >
            <span>Dark</span>

            <span className="relative">
              <input id="Toggle2" type="checkbox" className="hidden peer" />
              <div className="w-10 h-4 rounded-full shadow bg-gray-600 peer-checked:dark:bg-violet-400"></div>
              <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
            </span>

            <span>White</span>
          </label>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
