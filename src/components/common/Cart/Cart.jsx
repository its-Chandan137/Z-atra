import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { listedProducts } from "../../../assets/data/data";

export const Cart = () => {
  const { productId } = useParams();
  const product = listedProducts.find(
    (product) => product.id === parseInt(productId)
  );
  // console.log(listedProducts.find((p)=>p.id === 1))

  const { title, images, price, description, discount, rating, color } =
    product;

  //   console.log("htt...", product);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <header className="h-20 text-white flex justify-center items-center bg-white">
        <img src="../image/product/CartImage.jpg" alt="Cart" className="h-20 cursor-pointer mix-blend-multiply"/>
      </header>
      <section className="mt-20 h-auto self-center">
        <div className="w-full h-full bg-green-300 flex flex-wrap justify-around">
            <div className="w-80 h-80 bg-white">
                {product.images.map((image, i) => (
                <img
                src={image.image}
                alt="Product Image"
                key={i}
                className="w-full h-full object-contain"
                  />
                ))}
            </div>
            <div className="w-80 h-80 bg-black flex flex-col gap-4 justify-center items-center flex-wrap p-4">
                    <h2>Title : {product.title}</h2>
                    <p>Description : <br />{product.description}</p>
            </div>
            <div className="w-96 h-96 bg-white"></div>
        </div>
      </section>
    </>
  );
};
