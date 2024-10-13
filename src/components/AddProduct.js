import React, { useState } from 'react';
import './cssfiles/AddProduct.css'; 

function AddProduct({ addProduct, products }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isExistingProduct = products.some(product => product.id === id);
    
    if (isExistingProduct) {
      setMessage('Error: A product with this ID already exists.');
    } else {
      const newProduct = { id, name, quantity: parseInt(quantity), price: parseFloat(price), category };
      addProduct(newProduct);
      setMessage('Item added successfully!');
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" required />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Clothing">Clothing</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
      {message && <p className="add-product-message">{message}</p>}
    </div>
  );
}

export default AddProduct;
