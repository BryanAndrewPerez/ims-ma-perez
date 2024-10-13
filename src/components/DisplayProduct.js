import React, { useState } from 'react';
import './cssfiles/display.css';

function DisplayProduct({ products }) {
  const [categoryMode, setCategoryMode] = useState(false); 
  const [category, setCategory] = useState(''); 

  const filteredProducts = categoryMode
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="display-container">
      <h2 className="display-title">
        {categoryMode ? 'Display Items by Category' : 'Display All Items'}
      </h2>
      <div className="toggle-container">
        <button
          className={`toggle-button ${!categoryMode ? 'active' : ''}`}
          onClick={() => setCategoryMode(false)}
        >
          Display All
        </button>
        <button
          className={`toggle-button ${categoryMode ? 'active' : ''}`}
          onClick={() => setCategoryMode(true)}
        >
          Display by Category
        </button>
      </div>

      {categoryMode && (
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Clothing">Clothing</option>
        </select>
      )}

      {filteredProducts.length === 0 ? (
        <p className="no-items-message">No items to display</p>
      ) : (
        <table className="items-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayProduct;
