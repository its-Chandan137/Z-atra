import React from 'react'
import { listedProducts } from '../../../assets/data/data'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <>
        <section className='py-20 bg-white-100 '>
            <div className="container">
                <h4>Men's Products</h4>
                
                {listedProducts.map((product)=>(
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
            </div>
        </section>
    </>
  )
}
