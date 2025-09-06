import CardProduct from "../fragments/cardProduct";
import Button from "../elements/button";
import Counter from "../fragments/Counter";
import { use, useContext, useEffect, useRef, useState } from "react";
import { getProducts } from "../../services/products.service";
import { getUsername } from "../../services/auth.service";
import { data } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import TableCart from "../fragments/TableCart";
import Navbar from "../layouts/Navbar";
import { DarkMode } from "../../context/DarkMode";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const ProductPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  // UseEffect langsung rerender data berubah
  // ComponentDid Mount dimana data pertama kali dimunculkan ketika halaman dibuka
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // ComponentDidUpdate ketika terjadi dependensi perubahan data cart maka akan menjalankan perubahan juga

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // useReff gak langsung rerender tampilan gak berubah
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  // document.getElementById useRef bisa kayak DOM

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-3  ${isDarkMode && "bg-gray-800"}`}
      >
        <div className="w-full justify-center flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  src={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/2 mx-3">
          <h1 className="text-2xl text-gray-800 font-extrabold py-3">
            Shopping Cart
          </h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
