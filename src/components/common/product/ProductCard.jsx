import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

export const ProductCard = (
    {
        id,
        key,
        title,
        description,
        images,
        price,
        discount,
        rating,
        featured,
        color,
    }
) => {

    const navigate = useNavigate()
  return (
    <>
        <div className="productCard bg-white h-full relative">
            <div className="images h-72 relative">
                {images.map((cover, i)=>(
                    <img 
                        key={i}
                        src={cover?.image}
                        alt={id}
                        className='w-full h-full object-contain pt-10'/>
                ))}
                <div className="flex justify-between w-full p-5 absolute top-0 left-0">
                    {discount && <button className='discount-btn bg-black w-10 h-10 text-xl'>{discount}</button>}
                    {featured && <button className='featured-btn right-0 bg-green-800 text-sm w-20'>
                        {featured==true && "featured"}</button>}
                </div>
                <div className="details gap-2 flex items-center flex-col bg-black justify-center absolute top-0">
                    <NavLink to={`/product-details/${id}`}>
                        <p>{title}</p>
                    </NavLink>
                </div>
            </div>
            <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 m-5 right-0 left-0">
                <button  onClick={()=>navigate(`/product-details/${id}`)} className='quick-view-btn product-btn bg-black h-8 w-36'>Quick View</button>
            </div>
        </div>
    </>
  )
}