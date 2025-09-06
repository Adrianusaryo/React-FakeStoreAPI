import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const linkTo = type === "login" ? "/register" : "/login";
  const linkText = type === "login" ? "Sign Up" : "Sign In";
  return (
    <div
      className={"flex justify-center bg-gray-100 min-h-screen items-center"}
    >
      <div className="w-full max-w-sm p-8 rounded-4xl bg-white">
        <h1 className="text-gray-700 text-3xl font-bold mb-1">{title}</h1>
        <p className="font-medium text-slate-500 mb-3">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-3 text-gray-500 text-center">
          {type === "login"
            ? "Don't have an account ? "
            : "Already have an account ? "}
          <Link
            className="font-semibold hover:underline text-gray-800"
            to={linkTo}
          >
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
