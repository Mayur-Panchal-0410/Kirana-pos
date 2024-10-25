// import React from 'react';
// import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// const Inventory  = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: '$50', stock: 100 },
//     { id: 2, name: 'Product 2', price: '$30', stock: 200 },
//   ];

//   return (
//     <div className="products">
//       <h2>Product Management</h2>
//       <Paper elevation={3}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Product Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Stock</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>{product.name}</TableCell>
//                 <TableCell>{product.price}</TableCell>
//                 <TableCell>{product.stock}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
//   );
// };

// export default Inventory  ;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data when component mounts
    axios.get('http://localhost:9000/getallproducts')
      .then(response => {
        setProducts(response.data); 
        console.log(products);// Store fetched data in state
      })
      
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
