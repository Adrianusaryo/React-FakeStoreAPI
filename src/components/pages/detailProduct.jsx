import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/products.service";
import Navbar from "../layouts/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { addToCart, removeFromCart } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-3xl mx-auto p-8 my-4">
          <div className="grid md:grid-cols-2 gap-6 bg-white shadow-md rounded-3xl p-6">
            {/* Gambar Produk */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-9/12 object-contain"
              />
            </div>

            {/* Detail Produk */}
            <div className="flex flex-col">
              <div className="mb-3">
                <h1 className="text-xl text-center font-bold text-gray-800 mb-3">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-center gap-4">
                  <span className="inline-block capitalize font-semibold text-sm bg-gray-800 text-gray-100 px-4 py-2 rounded-full mb-3 ">
                    {product.category}
                  </span>
                  <p className="text-2xl font-bold text-gray-800 ">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-center gap-3 py-2">
                  <button
                    className=" bg-gray-300 w-full items-end text-gray-800 font-bold py-2 rounded-md"
                    onClick={() => dispatch(removeFromCart({ id: product.id }))}
                  >
                    <FontAwesomeIcon icon={faTrashArrowUp} /> Remove
                  </button>
                  <button
                    className=" bg-gray-300 w-full items-end text-gray-800 font-bold py-2 rounded-md"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          price: product.price,
                          qty: 1,
                        })
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faTags} /> Increase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductPage;
