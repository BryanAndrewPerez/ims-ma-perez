import React from 'react';
import './cssfiles/LowStock.css';

function LowStock({ products }) {
  const lowStockProducts = products.filter(product => product.quantity <= 5);

  return (
    <div className="low-stock-container">
      <h2 className="low-stock-title">Low Stock Items</h2>
      {lowStockProducts.length === 0 ? (
        <p className="no-low-stock">No low stock items available.</p>
      ) : (
        <table className="low-stock-table">
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
            {lowStockProducts.map(product => (
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

export default LowStock;
