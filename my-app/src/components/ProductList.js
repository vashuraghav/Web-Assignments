import React from 'react';
import '../css/ProductList.css'; // import the CSS file

function ProductList({ products }) {
  return (
    <div className="product-list">
    {products.map((product) => (
      <div className="product-item" key={product._id}>
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-meta">
            <span className="product-price">${product.price}</span>
            <span className="product-brand">{product.brand}</span>
            <span className="product-category">{product.category}</span>
            <span className="product-feature">{product.feature}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductList;
