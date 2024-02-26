import React from 'react'
import { CustomeLink,CustomeNavLink, Badges } from '/src/components/common/CustomComponents.jsx'
import { useState } from 'react'


export const Register=()=> {

    const [passStore,setPassStore] = useState("")
    const [confirmPass,setConfirmPass] = useState("")

    const handlePassword = ()=>{
        if(passStore != confirmPass)
        {
            alert("Wrong...")
        }
        // console.log(passStore)
        // console.log(confirmPass)
    }
    const handleChange = (e)=>{
        e.preventDefault()
    }

  return (
<form onSubmit={(e)=>{handleChange(e)}} className="container2">
        <div className="nav flex items-center justify-center">
            <div>
                <CustomeNavLink href='/'><img src='src/assets/common/Z-atra.png' alt="L-o-g-o" className='h-10 cursor-pointer'/></CustomeNavLink>
            </div>
        </div>
        <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your name</label>
            <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Little Demon" formNoValidate/>

            <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>

        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="little@demon.com" required/>
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={(e)=>setPassStore(e.target.value)} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
        </div>
        <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input onChange={(e)=>setConfirmPass(e.target.value)} type="password" id="repeat-password" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" required/>

            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Password doesn't match!</p>

        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Already logged In ? <a href="/Login" className="text-blue-600 hover:underline dark:text-blue-500"> LogIn</a></label>
        </div>
        <button onClick={()=>handlePassword()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>
</form>
  )
}

export default Register













{/* <div className='Register shadow-2xl'>
        <div className="head">
            <h2>Register</h2>
        </div>
        <div className="body">
            <label>UserName</label>
            <input type="text" required/>
            <label>Email</label>
            <input type="email" required/>
            <label>Password</label>
            <input type="password" required/>
            <label>Confirm Password</label>
            <input type="password" required/>
        </div>
        <div className="tail">
            <button>Resister</button>
            <div>
            <label>Already logged In ?</label><a href="/Login">LogIn</a>
            </div>
        </div>
    </div> */}