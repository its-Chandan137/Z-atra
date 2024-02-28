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
        <div onClick={()=>navigate("/Register")} className="productCard bg-white">
            <div className="images h-72 relative">
                {images.map((cover, i)=>(
                    <img 
                        key={i}
                        src={cover?.image}
                        alt={id}
                        className='w-full h-full object-contain pt-10 pb-5'/>
                ))}
                <div className="flex justify-between w-full p-5 absolute top-0 left-0">
                    {discount && <button className='discount-btn bg-black w-10 h-10 text-xl'>{discount}</button>}
                    {featured && <button className='featured-btn right-0 bg-green-800 text-sm w-20'>
                        {featured==true && "featured"}</button>}
                </div>
            </div>
        </div>
    </>
  )
}