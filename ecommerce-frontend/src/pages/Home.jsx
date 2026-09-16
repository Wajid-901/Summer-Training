import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productSlice";
import ProductCard from "../components/ProductCard";

import "../styles/home.css";

function Home() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>

          <p>Discover quality products at affordable prices.</p>

          <Link to="/products">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        <div className="products-container">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
