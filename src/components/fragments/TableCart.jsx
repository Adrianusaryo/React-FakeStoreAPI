import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`${
        isDarkMode && "text-white"
      } w-full border border-gray-300 text-center`}
    >
      <thead className="bg-gray-800 text-sm">
        <tr>
          <th className="py-2 text-white px-2 border-b border-gray-300 font-semibold ">
            Product Name
          </th>
          <th className="py-2 text-white px-2 border-b border-gray-300 font-semibold ">
            Price
          </th>
          <th className="py-2 text-white px-2 border-b border-gray-300 font-semibold ">
            Quantity
          </th>
          <th className="py-2 text-white px-2 border-b border-gray-300 font-semibold ">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id} className="text-sm">
                <td className="py-2 font-medium px-2 border-b border-gray-200">
                  {product.title}
                </td>
                <td className="py-2 font-medium px-2 border-b border-gray-200 ">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </td>
                <td className="py-2 font-medium px-2 border-b border-gray-200 ">
                  {item.qty}
                </td>
                <td className="py-2 font-medium px-2 border-b border-gray-200 ">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.qty * product.price)}
                </td>
              </tr>
            );
          })}
        <tr
          className="text-white font-semibold bg-gray-800"
          ref={totalPriceRef}
        >
          <td colSpan={3} className="py-2 px-3 text-sm text-left font-bold">
            Total Price
          </td>
          <td className="py-2 px-3 text-sm text-right font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(total)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
