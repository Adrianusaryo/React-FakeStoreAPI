import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slice/cartSlice";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

const CardProduct = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { children } = props;
  return (
    <div
      className={`w-60 bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between my-2 mx-2 ${
        isDarkMode && "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src, id } = props;
  return (
    <Link to={`/detail-product/${id}`}>
      <img
        src={src}
        alt="product"
        className="p-5 rounded-t-lg h-60 w-60 object-fill"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className="px-3 pb-2 h-full">
      <a href="">
        <h5
          className={`text-lg font-semibold tracking-tight text-center pb-2 ${
            isDarkMode ? "text-gray-800" : "text-white"
          }`}
        >
          {title.substring(0, 20)}
        </h5>
        <p
          className={`text-sm capitalize font-medium text-center ${
            isDarkMode ? "text-gray-800" : "text-white"
          }`}
        >
          {children.substring(0, 100)}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, children, id } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const dispatch = useDispatch();
  return (
    <>
      <span
        className={`text-base font-bold text-center  ${
          isDarkMode ? "text-gray-800" : "text-white"
        }`}
      >
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </span>
      <div className="flex items-center justify-center gap-3 px-5 py-4">
        <Button
          classname={`bg-gray-500 text-sm${isDarkMode && "bg-gray-800"}`}
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          <FontAwesomeIcon icon={faTrashArrowUp} /> Remove
        </Button>
        <Button
          classname={`bg-gray-500 text-sm${isDarkMode && "bg-gray-800"}`}
          onClick={() => dispatch(addToCart({ id, qty: 1 }))}
        >
          <FontAwesomeIcon icon={faTags} /> Increase
        </Button>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
