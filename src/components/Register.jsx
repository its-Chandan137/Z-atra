import React, { useEffect, useRef } from 'react'
import { CustomeLink,CustomeNavLink, Badges } from '/src/components/common/CustomComponents.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Register=()=> {
    const ref = useRef()
    const navigate = useNavigate()

    // const [passStore,setPassStore] = useState("")
    // const [confirmPass,setConfirmPass] = useState("")

    // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    const [colF,setColF] = useState("grey")
    const [colT,setColT] = useState("grey")

    const [email,setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)

    const [name,setName] = useState("")
    const [nameError, setNameError] = useState(false)

    const [password,setPassword] = useState("")
    const [passwordError,setPasswordError] = useState(false)

    const [confirmPass,setConfirmPass] = useState("")
    const [confPassError, setConfPassError] = useState(false)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



    const handleName = (e)=>{
        const name = e.target.value;
        if(name.length < 3)
        {
            setNameError(true)
            setColT("red")
        }
        else
        {
            setNameError(false)
            setColT("grey")
        }
        setName(name)
    }
    const handleEmail = (e)=>{
        const email = e.target.value
        if(!email.match(emailRegex))
        {
            setEmailError(true)
            setColT("red")
        }
        else
        {
            setEmailError(false)
            setColT("grey")
        }
        setEmail(email)
    }
    const handlePassword = (e)=>{
        const password = e.target.value
        if(password == "")
        {
            setPasswordError(true)
        }
        else
        {
            setPasswordError(false)
        }
        setPassword(password)
    }
    const handleConfPassword = (e)=>{
        const Cpassword = e.target.value
        setConfirmPass(Cpassword)
        if(confirmPass == password)
        {
            setConfPassError(true)
        }
        else
        {
            setConfPassError(false)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target[0].value;
        if(name.length < 3)
        {
            setNameError(true)
            setColT("red")
        }
        else
        {
            setNameError(false)
            setColT("grey")
        }
        const email = e.target[1].value
        if(!email.match(emailRegex))
        {
            setEmailError(true)
            setColT("red")
        }
        else
        {
            setEmailError(false)
            setColT("grey")
        }
        const password = e.target[2].value
        if(password == "")
        {
            setPasswordError(true)
        }
        else
        {
            setPasswordError(false)
        }
        const Cpassword = e.target[3].value
        if(confirmPass == password)
        {
            setConfPassError(false)
        }
        else
        {
            setConfPassError(true)
        }

        if((!name.length < 3)&&(email.match(emailRegex))&&(password!="")&&(password==confirmPass))
        {
            alert("Submitted")
        }
    }

  return (
<div className="container2">
        <div className="nav flex items-center justify-center">
            <div>
                <CustomeNavLink href='/'><img src='../image/product/Z-atra.png' alt="L-o-g-o" className='h-10 cursor-pointer'/></CustomeNavLink>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto" noValidate>
        <div className="mb-5">
            <label htmlFor="username-success" className= {`block mb-2 text-sm font-medium text-${colT}-700 dark:text-${colT}-500`}>Your name</label>

            <input onChange={handleName} defaultValue = {name} type="text" id="username-success" className={`bg-${colT}-50 border border-${colT}-500 text-${colT}-900 dark:text-${colT}-400 placeholder-grey-700 dark:placeholder-grey-500 text-sm rounded-lg focus:ring-${colT}-500 focus:border-${colT}-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${colT}-500`} placeholder="Little Demon..." required/>

            {nameError? <p className="mt-2 text-sm text-red-600 dark:text-red-500"> User name required!</p>:""}

        </div>
        <div className="mb-5">
            <label htmlFor="email" className={`block mb-2 text-sm font-medium text-${colT}-700 dark:text-${colT}`}>Your email</label>

            <input onChange={handleEmail} type="email" id="email" className={`shadow-sm bg-${colT}-50 border border-${colT}-300 text-${colT}-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${colT}-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"`} placeholder="little@demon.com" required/>

            {emailError? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium"></span> Email required!</p> : ""}

        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>

            <input onChange={handlePassword} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>

            {passwordError? <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex gap-2"> Password required!<div className="font-small flex justify-center pl-0.5 w-5 h-5 rounded-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 i-button" data-tooltip="Password length should be minimum 8 characters long, should contain a special character, a number and an uppercase letter">!</div></p> : ""}

        </div>

        <div className="mb-5">
            <label htmlFor="repeat-password" className={`block mb-2 text-sm font-medium text-${colF}-900 dark:text-white`}>Confirm password</label>
            <input onChange={handleConfPassword} type="password" id="repeat-password" className={`bg-${colF}-50 border border-${colF}-500 text-${colF}-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-${colF}-500 block w-full p-2.5 dark:text-${colF}-500 dark:placeholder-red-500 dark:border-${colF}-500`} required/>

            {confPassError? <p className="mt-2 text-sm text-red-600 dark:text-red-500"> Password doesn't match!</p> : ""}

        </div>
        
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Already logged In ? <a onClick={()=>navigate("/Login")} className="text-blue-600 hover:underline dark:text-blue-500"> LogIn</a></label>
        </div>
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>
</div>
  )
}

export default Register


{/* <p style={{display: colT == "green" ? 'block' : 'none'}} className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}