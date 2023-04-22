import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import '../css/ProductPage.css'; // import the CSS file

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5050/api/v1/product').then((response) => {
      setProducts(response.data.data)
      setError(null);
    })
    .catch((error) => {
        setError(error.message)
    });
  }, []);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Products</h1>
        <ProductForm onAddProduct={handleAddProduct} />
      </div>
      <div className="vertical-line"></div>
      <div className="right-panel">
        <h1>All Products</h1>
        {error && <div className="error">{error}</div>}
        <div className="product-list-container">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
