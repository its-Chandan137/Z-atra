import React, { useState } from 'react'
import { Badges } from '../CustomComponents'
import { FaOpencart } from 'react-icons/fa6'
import { selectTotalQuantity } from '../../../redux/slice/cartSlice'
import { useSelector } from 'react-redux'


export const ModelCart=() =>{
    const [isOpen,setIsOpen] = useState(false)
    const [isClosing,setIsClosing] = useState(false)
    const [activeTab,setActiveTab] = useState("cart")
    const totalQuantity  = useSelector(selectTotalQuantity)


    const openModel = ()=>{
        setIsClosing(true)
        document.body.style.overflowX = "hidden"
        document.body.classList.toggle('showcart')
    }

    const closeModel=()=>{
        setIsClosing(true)
        document.body.style.overflowX = "auto"
        setTimeout(()=>{
            setIsOpen(false)
            setIsClosing(false)
        }, 300)
    }

    const handelTabChange = (tab)=>{
        setActiveTab(tab)
    }
  return (
    <div>
        <button onClick={openModel} className="z-20 relative">
            <FaOpencart size={23} className=" fill-white" />

            <div className="absolute -top-2 -right-1.5">
                <Badges color="bg-sky-400">{totalQuantity}</Badges>
            </div>
        </button>

        {isOpen && (
            <>
            
                <div onClick={closeModel} className="cartoverlay"></div>
                <div className={`cartmodel p-16 text-white min-h-lvh w-96 bg-white ${isClosing ? "closing" : ""}`}>cart</div>

            </>
        )}
    </div>
  )
}


