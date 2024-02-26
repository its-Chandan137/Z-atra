import React from 'react'
import {lazy,suspense} from 'react'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout, Home} from './router';
// const Login = lazy(()=> import('./components/common/Login'))
import { Login } from './components/common/Login';
import {Register} from './components/Register';

export const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={
            <Layout>
              <Home index/>
            </Layout>
          }
        />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
};

export default App