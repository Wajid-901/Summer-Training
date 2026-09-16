import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { fetchProductById } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";

import "../styles/product-details.css";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));

    toast.success("Product added to cart!");
  };

  return (
    <main className="details-page">
      <div className="details-image">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
      </div>

      <div className="details-content">
        <p className="category">
          {selectedProduct.category}
        </p>

        <h1>{selectedProduct.title}</h1>

        <p className="description">
          {selectedProduct.description}
        </p>

        <h2>${selectedProduct.price}</h2>

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;