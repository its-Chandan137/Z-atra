import React from 'react'
import { menulists } from '../.././assets/data/data'
import { CustomeLink,CustomeNavLink, Badges } from './CustomComponents'
import { IoIosSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
// import LogoImg from './src/assets/common/LogoImg.png'



export const Header = () =>{
  return (
    <>
      <header className='header px-12 py-3 bg-black relative z-20'>
              <nav className='p-4 flex justify-between item-center relative'>
                  <div className='flex item-center gap-14'>
                    <div>
                      <CustomeNavLink href='/'><img src='../image/product/Z-atra.png' alt="L-o-g-o" className='h-10 cursor-pointer'/></CustomeNavLink>
                    </div>
                  </div>
                <div className="hidden lg:flex item-center justify-between gap-8">
                  {menulists.map((list)=>(
                    <li key={list.id} className='uppercase list-none'>
                      <CustomeNavLink href={list.path}>{list.link}</CustomeNavLink>
                    </li>
                  ))}
                </div>

                <div className="flex item-center gap-8 icon">
                  <div className='uppercase hidden lg:block text-inherit relative z-20 '>
                    <CustomeNavLink href='/Login'>Login</CustomeNavLink>
                    <span className=''>/</span>
                    <CustomeNavLink href='/Register'>Register</CustomeNavLink>
                  </div>
                  <div className='icon flex item-center justify-center gap-6'>
                    <IoIosSearch  size={23} className=" fill-white"/>

                    <div className='relative z-20'>
                    <FaOpencart size={23} className=" fill-white"/>

                    <div className="absolute -top-3 -right-1.5">
                      <Badges color="bg-sky-400">0</Badges>
                    </div>
                    </div>
                  </div>
                </div>
              </nav>
      </header>
    </>
  )
}
