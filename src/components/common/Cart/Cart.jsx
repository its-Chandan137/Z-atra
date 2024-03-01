import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../../redux/slice/cartSlice";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);
  const cartItems = useSelector((state) => state.cart.items);

  const openModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "hidden";
    document.body.classList.toggle("showcart");
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handelTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container mt-36">
      <div className="cart w-full">
        <h2>Cart</h2>
        <div className="listCart">
          <div className="item">
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                cover={item.cover}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className="total flex item-center justify-between mt-10 px-4">
          <p level={6}>Subtotal:</p>
          <p level={6}>{totalPrice}</p>
        </div>
        <div className="btn"></div>
      </div>
    </div>
  );
};

export const CartProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <div>
      <div className="mt-5 border-b-2 border-grey-200 pb-5">
        <div className="flex item-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => (
              <img
                src={images?.image}
                alt=""
                key={i}
                className="w-full h-full object-contain"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <p>{name}</p>
            <p className="text-green-400">
              {quantity} x Rs. {price}
            </p>
          </div>
          <div className="remove">
            <button onClick={removeCartItem} className=" text-red-400 text-sm ">
              Remove
            </button>
          </div>
          {/* <div className="quantityx">
            <span className="minus">-</span>
            <span>{totalQuantity}</span>
            <span className="plus">+</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
