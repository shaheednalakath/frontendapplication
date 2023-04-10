import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div>
      <div className='product-card'>
        {data.product.map((product) => (
          <div key={product.slug}>
            <div className='product-card-set'>
              <div className='product-image'>
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='product-image-resize'
                  />
                </Link>
              </div>
              <Link to={`/product/${product.slug}`}>
                <div className='product-link'>clik here</div>
              </Link>
              <div className='product-name'>
                <strong>{product.name}</strong>
              </div>
              <div className='product-prize'>${product.prize}</div>
              <div className='cart-button'>
                <button>add to cart</button>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
export default HomeScreen;
