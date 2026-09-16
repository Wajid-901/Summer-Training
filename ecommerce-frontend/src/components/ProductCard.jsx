import { Link } from "react-router-dom";
import "../styles/product-card.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <h4>${product.price}</h4>

        <Link
          to={`/products/${product.id}`}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;