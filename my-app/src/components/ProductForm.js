import React, { useState } from 'react';
import axios from 'axios';
import '../css/ProductForm.css'; // import the CSS file

const initialErrors = {
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    brand: '',
    message: ''
  };

function ProductForm({ onAddProduct }) {
    const [data, setData] = useState({
      name: '',
      price: 0,
      quantity: 0,
      description: '',
      category: '',
      brand: '',
    });
    const [errors, setErrors] = useState(initialErrors);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
      axios
        .post('http://localhost:5050/api/v1/product', data)
        .then((response) => {
          onAddProduct(response.data.data);
          setData({
            name: '',
            price: 0,
            quantity: 0,
            description: '',
            category: '',
            brand: '',
          });
          const notify = {} 
          notify.message = "Successfully Created"
          setErrors(notify);
        })
        .catch((error) => {
            const reqError = {}
            reqError.message = error.message
            setErrors(reqError)
        });
        }
    }

    const validateForm = () => {
        const formErrors = {};
        if (!data.name) {
          formErrors.name = 'Required.';
        }
        if (!data.description) {
          formErrors.description = 'Required.';
        }
        if (!data.price || data.price < 0) {
          formErrors.price = 'Price > 0';
        }
        if (!data.quantity || data.quantity < 0) {
          formErrors.quantity = 'Quantity > 0';
        }
        if (!data.category) {
          formErrors.category = 'Required.';
        }
        if (!data.brand) {
          formErrors.brand = 'Required.';
        }
        return formErrors;
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    return (
      <form onSubmit={handleSubmit}>
    <table>
    <tbody>
      <tr>
        <th><label htmlFor="name">Name:</label></th>
        <td>
        <input type="text" id="name" name="name" value={data.name} onChange={handleChange}/>
        </td>
      </tr>
      {errors.name && <tr><td colSpan="2" className="error">{errors.name}</td></tr>}
      <tr>
        <th><label htmlFor="description">Description:</label></th>
        <td><input type="text" id="description" name="description" value={data.description} onChange={handleChange} /></td>
      </tr>
      {errors.description && <tr><td colSpan="2" className="error">{errors.description}</td></tr>}
      <tr>
        <th><label htmlFor="price">Price:</label></th>
        <td><input type="number" id="price" name="price" value={data.price} onChange={handleChange} /></td>
      </tr>
      {errors.price && <tr><td colSpan="2" className="error">{errors.price}</td></tr>}
      <tr>
        <th><label htmlFor="quantity">Quantity:</label></th>
        <td><input type="number" id="quantity" name="quantity" value={data.quantity} onChange={handleChange} /></td>
      </tr>
      {errors.quantity && <tr><td colSpan="2" className="error">{errors.quantity}</td></tr>}
      <tr>
        <th><label htmlFor="category">Category:</label></th>
        <td><input type="text" id="category" name="category" value={data.category} onChange={handleChange} /></td>
      </tr>
      {errors.category && <tr><td colSpan="2" className="error">{errors.category}</td></tr>}
      <tr>
        <th><label htmlFor="brand">Brand:</label></th>
        <td><input type="text" id="brand" name="brand" value={data.brand} onChange={handleChange} /></td>
      </tr>
      {errors.brand && <tr><td colSpan="2" className="error">{errors.brand}</td></tr>}
      <tr>
        <td colSpan="2"><button type="submit">Add Product</button></td>
      </tr>
      {errors.message && <tr><td colSpan="2" className="error">{errors.message}</td></tr>}
    </tbody>
    </table>
    </form>
    );
}

export default ProductForm;
