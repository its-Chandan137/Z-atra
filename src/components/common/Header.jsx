import React from "react";
import { menulists } from "../.././assets/data/data";
import { CustomeLink, CustomeNavLink, Badges } from "./CustomComponents";
import { IoIosSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { ModelCart } from "./Cart/ModelCart";
import CartTab from "./Cart/CartTab";
// import LogoImg from './src/assets/common/LogoImg.png'

export const Header = () => {
  return (
    <>
      <header className="header px-12 py-3 bg-black relative z-20">
        <nav className="p-4 flex justify-between item-center relative">
          <div className="flex item-center gap-14">
            <div>
              <CustomeNavLink href="/Home">
                <img
                  src="../image/product/Z-atra.png"
                  alt="L-o-g-o"
                  className="h-10 cursor-pointer"
                />
              </CustomeNavLink>
            </div>
          </div>
          <div className="hidden lg:flex item-center justify-between gap-8">
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomeNavLink href={list.path}>{list.link}</CustomeNavLink>
              </li>
            ))}
          </div>

          <div className="flex item-center gap-8 icon">
            <div className="uppercase hidden lg:block text-inherit relative z-20 ">
              <CustomeNavLink href="/Login">Login</CustomeNavLink>
              <span className="">/</span>
              <CustomeNavLink href="/Register">Register</CustomeNavLink>
            </div>
              <ModelCart/>
              <CartTab/>
          </div>
        </nav>
      </header>
    </>
  );
};
