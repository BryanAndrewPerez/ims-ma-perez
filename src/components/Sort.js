import React, { useState } from 'react';
import './cssfiles/sort.css';

function Sort({ products }) {
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');

  const sortedProducts = [...products].sort((a, b) => {
    const valueA = sortField === 'quantity' ? a.quantity : a.price;
    const valueB = sortField === 'quantity' ? b.quantity : b.price;
    return sortOrder === 'ascending' ? valueA - valueB : valueB - valueA;
  });

  return (
    <div className="sort-container">
      <h2 className="sort-title">Sort Items</h2>
      <form className="sort-form">
        <label className="sort-label">
          Sort by:
          <select
            className="sort-select"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            required
          >
            <option value="">Select field</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </label>

        <label className="sort-label">
          Order:
          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            required
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
      </form>

      {sortedProducts.length === 0 ? (
        <p className="no-items-message">No items to display</p>
      ) : (
        <table className="items-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Sort;
