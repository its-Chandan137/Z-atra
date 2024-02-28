import React, { useState } from 'react'

export const ForMen = () => {

  return (
        <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="mb-5 relative w-56 h-56 bg-red-300">
                <img src="src/components/common/product/NIVEA lotion.jpg" alt="NIVEA lotion" />
            </div>
            <div className="mb-5 relative w-56 h-56 bg-red-400">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1faDVFjv0Z3zcuux-1M8aTB7Cf9EBQtARzA&usqp=CAU" alt="some" />
            </div>
            <div className="mb-5 relative w-56 h-56 bg-blue-400"></div>
            <div className="mb-5 relative w-56 h-56 bg-blue-400"></div>
            <div className="mb-5 relative w-56 h-56 bg-blue-400"></div>
            <div className="mb-5 relative w-56 h-56 bg-yellow-400"></div>
            <div className="mb-5 relative w-56 h-56 bg-yellow-400"></div>
            <div className="mb-5 relative w-56 h-56 bg-yellow-400"></div>
        </section>
  )
}

