import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'
import Search from "../components/SearchBar";
import { useState } from "react";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [isSearch, setIsSearch] = useState(false);

  console.log(products);

  // const filteredProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
  //   );
  // });

  return (
    <div>
      <Hero />

      <section className="py-20">
      <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
      <Search setIsSearch={setIsSearch} />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {/* {!isSearch && products.map((product) => {
              return (
                <Product product={product} key={product.id} />
              );
            })} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
