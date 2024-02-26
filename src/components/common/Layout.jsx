import React from 'react'
import {Header} from './Header'
import PropTypes from "prop-types";

export const Layout=({children}) =>{
  return (
    <div>
        <Header/>
        <main style={{minHeight : "80vh"}} className='bg-black'>{children}</main>
        <h2 className='bg-black'>Footer</h2>
    </div>
  )
}


Layout.propTypes = {
    children: PropTypes.isRequired,
  };