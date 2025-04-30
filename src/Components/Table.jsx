import React from 'react';

function Table({ productData }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {productData.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
