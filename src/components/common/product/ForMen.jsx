import React, { useState } from "react";
import { listedProducts } from '../../../assets/data/data'
import { ProductCard } from './ProductCard'

export const ForMen = () => {
  return (
    <section className="container mt-36 mb-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {listedProducts.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          title={product.title}
          description={product.description}
          images={product.images}
          price={product.price}
          discount={product.discount}
          rating={product.rating}
          featured={product.featured}
          color={product.color}
        />
      ))}
    </section>
  );
};
