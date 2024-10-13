import React, { useState } from 'react';
import './cssfiles/RemoveProduct.css';
function RemoveProduct({ removeProduct }) {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm('Are you sure you want to remove this item?');

    if (isConfirmed) {
      const result = removeProduct(id);
      if (result.success) {
        setMessage(`Item ${result.product.name} has been removed from the inventory!`);
      } else {
        setMessage('Item not found!');
      }
    } else {
      setMessage('Item removal canceled.');
    }

    setId('');
  };

  return (
    <div className="remove-product">
      <h2>Remove Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" required />
        <button type="submit">Remove Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RemoveProduct;
