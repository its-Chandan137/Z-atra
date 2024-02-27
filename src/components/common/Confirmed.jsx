import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmed = () => {
    const navigate = useNavigate()
  return (
    <div className='flex content-center w-1/2 h-50'>
        <h2>Registered Successfully👍😍</h2>
        <br /><hr />
        <div>
            <button onClick={()=>navigate('/Login', {replace: true})}>LogIn</button>
        </div>
    </div>
  )
}

export default Confirmed