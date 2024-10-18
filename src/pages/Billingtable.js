import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

function Billingtable() {
    const [products, setProducts] = useState([]);

    // Example product scanning function
    const handleScan = (product) => {
      setProducts((prevProducts) => [
        ...prevProducts,
        product,
      ]);
    };
  
    // Example of how you might scan a product (you can replace this with your scanning logic)
    const scanProduct = () => {
      const newProduct = {
        id: Date.now(), // Use a unique ID for each product
        name: 'Product Name', // Replace with the actual product name
        quantity: 1, // Replace with actual quantity scanned
        price: 10, // Replace with actual price
      };
      handleScan(newProduct);
    };
  
    return (
      <div>
        <button onClick={scanProduct}>Scan Product</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default Billingtable
