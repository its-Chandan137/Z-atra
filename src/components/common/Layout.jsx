import React from 'react'
import {Header} from './Header'
import PropTypes from "prop-types";
import { SideBar } from '../SideBar';

export const Layout=({children}) =>{
  return (
    <div>
        <Header/>
        <main style={{minHeight : "80vh"}} className=' flex justify-center items-center relative'>
          {children}
          <SideBar/>
          </main>
        <h2 className='bg-black'>Footer</h2>
    </div>
  )
}


Layout.propTypes = {
    children: PropTypes.isRequired,
  };