import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddItem from './components/AddProduct';
import UpdateItem from './components/UpdateProduct';
import RemoveItem from './components/RemoveProduct';
import DisplayItems from './components/DisplayProduct';
import SearchItem from './components/Search';
import SortItems from './components/Sort';
import LowStockItems from './components/LowStock';
import './style.css';

function App() {
  const [products, setProducts] = useState([]);

  
  const addProduct = (newProduct) => {
    const isDuplicate = products.some(product => product.id === newProduct.id);

    if (isDuplicate) {
      alert("A product with this ID already exists. Please use a unique ID.");
      return;
    }

    setProducts([...products, newProduct]);
  };

  
  const updateProduct = (id, field, newValue) => {
    const product = products.find(product => product.id === id);
    if (product) {
      const updatedProducts = products.map(product =>
        product.id === id ? { ...product, [field]: newValue } : product
      );
      setProducts(updatedProducts);
      return { success: true, product };
    }
    return { success: false };
  };

  
  const removeProduct = (id) => {
    const product = products.find(product => product.id === id);
    if (product) {
      setProducts(products.filter(product => product.id !== id));
      return { success: true, product };
    }
    return { success: false };
  };

  return (
    <Router>
      <div>
        <h1>Inventory Management System</h1>
        <nav>
          <Link to="/add" className="button-17">Add Item</Link>
          <Link to="/update" className="button-17">Update Item</Link>
          <Link to="/remove" className="button-17">Remove Item</Link>
          <Link to="/display" className="button-17">Display Items</Link>
          <Link to="/search" className="button-17">Search Item</Link>
          <Link to="/sort" className="button-17">Sort Items</Link>
          <Link to="/low-stock" className="button-17">Low Stock Items</Link>
        </nav>

        <Routes>
          <Route path="/add" element={<AddItem addProduct={addProduct} products={products} />} />
          <Route path="/update" element={<UpdateItem updateProduct={updateProduct} />} />
          <Route path="/remove" element={<RemoveItem removeProduct={removeProduct} />} />
          <Route path="/display" element={<DisplayItems products={products} />} />
          <Route path="/search" element={<SearchItem products={products} />} />
          <Route path="/sort" element={<SortItems products={products} />} />
          <Route path="/low-stock" element={<LowStockItems products={products} />} />
          <Route path="/" element={<h2 className='welcome-message'>Welcome to the Inventory Management System!</h2>} />
          <Route path="*" element={<h2 className='welcome-message'>Page not found. Welcome to the Inventory Management System!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
