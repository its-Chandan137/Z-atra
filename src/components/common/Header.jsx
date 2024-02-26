import React from 'react'
import { menulists } from '../.././assets/data/data'
import { CustomeLink } from './CustomComponents'
// import LogoImg from './src/assets/common/LogoImg.png'



function Header() {
  return (
    <>
      <header className='header px-12 py-3 bg-white-100 relative z-20 '>
              <nav className='p-4 flex justify-between item-center relative'>
                  <div className='flex item-center gap-14'>
                    <div>
                      <img src='src/assets/common/logoD.png' alt="_L-ogoo" className='h-7 cursor-pointer'/>
                    </div>
                  </div>
                <div className="hidden lg:flex item-center justify-between gap-8">
                  {menulists.map((list)=>(
                    <li key={list.id} className='uppercase list-none'>
                      <a href={list.path}>{list.link}</a>
                    </li>
                  ))}
                </div>

                <div className="flex item-center gap-8 icon">
                  <div className='uppercase hidden lg:block text-inherit relative z-20'>
                    <CustomeLink>Login</CustomeLink>
                    <span className=''>/</span>
                    <CustomeLink>Register</CustomeLink>
                  </div>
                </div>
              </nav>
      </header>
    </>
  )
}

export default Header