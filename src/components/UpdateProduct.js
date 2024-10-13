import React, { useState } from 'react';
import './cssfiles/UpdateProduct.css'
function UpdateProduct({ updateProduct }) {
  const [id, setId] = useState('');
  const [field, setField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = updateProduct(id, field, parseFloat(newValue));
    if (result.success) {
      setMessage(`Item ${result.product.name}'s ${field} updated successfully!`);
    } else {
      setMessage('Item not found!');
    }
    setId('');
    setField('');
    setNewValue('');
  };

  return (
    <div className="update-product">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" required />
        <select value={field} onChange={(e) => setField(e.target.value)} required>
          <option value="">Select Field</option>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} placeholder="New Value" required />
        <button type="submit">Update Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateProduct;
