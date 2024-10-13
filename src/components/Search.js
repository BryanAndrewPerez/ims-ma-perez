import React, { useState } from 'react';
import './cssfiles/Search.css'; 

function Search({ products }) {
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = products.find(product => product.id === id);
    setResult(product || 'Item not found');
    setId('');
  };

  return (
    <div>
      <h2 className="search-title">Search Item</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="ID" 
          required 
          className="search-input" 
        />
        <button type="submit" className="search-button">Search Item</button>
      </form>

      {result && (
        <div className="search-result">
          {typeof result === 'string' ? (
            <p className="search-result-not-found">{result}</p>
          ) : (
            <table className="result-table">
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
                <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.quantity}</td>
                  <td>${result.price}</td>
                  <td>{result.category}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
