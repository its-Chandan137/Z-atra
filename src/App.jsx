import React from 'react'
import {lazy,suspense} from 'react'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout, Home} from './router';
// const Login = lazy(()=> import('./components/common/Login'))
import { Login } from './components/common/Login';
import {Register} from './components/Register';
import Confirmed from './components/common/Confirmed';
import {ForMen} from './components/common/product/ForMen';
import {ForWomen} from './components/common/product/ForWomen';
import { ProductList } from './components/common/product/ProductList';

export const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout><Home index/></Layout>}/>
        <Route path='/ForMen'element={<Layout><ForMen/></Layout>}/>
        <Route path='/ForWomen'element={<Layout><ForWomen/></Layout>}/>

        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path= '/Register/successful' element={<Confirmed/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
};

export default App