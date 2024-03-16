import axios from 'axios';
import React, { useState } from "react";
import Product from '../components/Product'

const Search = () => {

  const [prompt, setPrompt] = useState("");
  const [products, setProducts] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('You clicked me hehe', prompt);
    await getProducts();
    console.log(products);
    console.log("Done searching products")
  }

  const getProducts = async () => {
    try {
      const url = `https://ai-ecommerce-server.onrender.com/api/ai`;
      console.log("Processing prompt: ", prompt);
      const response = await axios.post(url, { "prompt": prompt });
      console.log(response);
      const product_array = response.data["products"];
      setProducts(product_array.map((product) => {
        return {
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          image: product.images[0]
        }
      }));
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <form class="max-w-md py-20 mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>

      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return (
                <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
