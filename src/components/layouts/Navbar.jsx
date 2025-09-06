import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();
  const dispatchTotal = useTotalPriceDispatch();

  useEffect(() => {
    const sumQty = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sumQty);

    const sumPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

    dispatchTotal({
      type: "UPDATE",
      payload: { total: sumPrice },
    });
  }, [cart, dispatchTotal]);

  // useEffect(() => {
  //   const sum = cart
  //     .filter((item) => item.qty > 0)
  //     .reduce((acc, item) => {
  //       return acc + item.qty;
  //     }, 0);
  //   setTotalCart(sum);
  // }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div
      className={`flex justify-between items-center h-14 bg-gray-800 text-white px-10 ${
        isDarkMode && "bg-white"
      }`}
    >
      {/* Title && Total Item */}
      <div className="flex items-center gap-3">
        <Link to={"/product"}>
          <h1 className={`text-lg font-bold ${isDarkMode && "text-gray-800"}`}>
            Fake Store API
          </h1>
        </Link>
        <div
          className={`bg-gray-800 px-3  text-sm py-1 rounded ${
            isDarkMode && "bg-white text-gray-800"
          }`}
        >
          <span
            className={`font-bold capitalize text-sm ${
              isDarkMode ? "text-gray-800" : "text-white"
            }`}
          >
            {username}{" "}
          </span>{" "}
          Total Items : {totalCart} | Total Price :{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Toggle Dark/Light */}
        <button
          className={`bg-gray-800 px-3 py-1 rounded text-sm ${
            isDarkMode && "bg-white text-gray-800"
          }`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>

        {/* Logout Button */}
        <Button
          classname={`ml-2 bg-gray-600  px-3 py-1 rounded ${
            isDarkMode && "bg-gray-800"
          }`}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
