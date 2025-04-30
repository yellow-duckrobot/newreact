import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Components/Table';

function Home() {
  const [products, setProducts] = useState([]);

  const apiData = () => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <Table productData={products} />
    </>
  );
}

export default Home;
