import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { listedProducts } from "../../../assets/data/data";
import { useDispatch } from "react-redux";
import { CartActions } from "../../../redux/slice/cartSlice";


export const ItemDetail = () => {
    const navigate = useNavigate()


  const { productId } = useParams();
  const product = listedProducts.find(
    (product) => product.id === parseInt(productId)
  );
  // console.log(listedProducts.find((p)=>p.id === 1))

  const { id, title, images, price, description, discount, rating, color } =
    product;

  //   console.log("htt...", product);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const dispatch = useDispatch()

  const discountPrice = price[0].value - (price[0].value * discount) / 100;
  const addToCart = () => {
      dispatch(CartActions.addToCart({id,title,price: discountPrice,images}))
  }


  return (
    <>
      <section style={{minHeight : "80vh"}} className='container mt-20 flex justify-center items-center relative'>
        <div className="contain rounded-lg flex overflow-hidden">
          <div
            className="flex justify-center w-80 bg-white max-h-fit py-5"
            key={productId}
          >
            <div className="image pt-5 h-96 lg:w-1/2 flex">
              <div>
                {product.images.map((image, i) => (
                  <img
                    src={image.image}
                    alt="Product Image"
                    key={i}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white h-auto w-80 flex flex-col items-start justify-center gap-5">
            <div className="gap-5 flex flex-col">
              <h3 className="text-black bolder">{product.title}</h3>
              {discount && (
                <p className="text-xl text-black">discount: {discount}</p>
              )}
            </div>
            <div className="price">
              {/* <p className="text-black">Price: {product.price}</p> */}
            </div>
            <div className="desc">
              {description && (
                <p className="text-black">Description: {product.description}</p>
              )}
              <NavLink to={`/Cart`}>
                <button onClick={addToCart}  className="h-10 p-2 bg-black rounded-md mt-5 w-20">To Cart</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
