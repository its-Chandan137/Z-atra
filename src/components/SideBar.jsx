import React from "react";

export const SideBar = () => {
  return (
    <>
      <section >
        <div style={{display : "none"}} className="sideBar relative min-h-lvh w-80 bg-white right-0 top-0 p-2 rounded-tl-lg rounded-bl-lg">
            <div className="inner w-full h-full bg-red-300 flex flex-col justify-start">
                <div className="upper w-full h-20 bg-green-400 flex flex justify-center items-center">
                    <h2 className="text-black">Add To Cart</h2>
                </div>
                <div className="mid w-full h-40 bg-yellow-400 flex flex justify-between items-center p-8">
                    <h2 className="text-black">Items: </h2>
                </div>
            </div>
            <button  className="flex justify-center items-center w-10 h-10 bg-green-400 rounded-full absolute -left-5 top-80">
                <p className="text-black">T</p>
            </button>
        </div>
      </section>
    </>
  );
};
