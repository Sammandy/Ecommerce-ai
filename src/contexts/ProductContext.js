import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://ai-ecommerce-server.onrender.com/all-products");
    const data = response.data.products;
    console.log(data)
    setProducts(data.map((product) => {
      return {
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        image: product.images[0]
      }
    }));
  };

  useEffect(() => {
     fetchProducts();
  },[]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
