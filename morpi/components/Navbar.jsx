import React from 'react'
import Logo from '../utils/Logo'
import { useState, useEffect } from 'react'
import Link from "next/link"



const Navbar = () => {
  const [showNavBG, setShowNavBG] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY < 180) {
      setShowNavBG(true);
    } else {
      setShowNavBG(false);

    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, []);
  return (
    <div
      className={`w-screen h-[80px] lg:px-[348px] px-[12px] fixed  flex items-center justify-between z-[15] transition-all duration-300 ${!showNavBG ? "bg-white drop-shadow-md" : "bg-transparent"}`}
    >
      <Logo />
      <div className='flex gap-12' >
        <button className=' text-stone-900 text-[15px] hover:text-violet-800 font-bold cursor-pointer transition-all duration-300' >About</button>
        <button className=' text-stone-900 text-[15px] hover:text-violet-800 font-bold cursor-pointer transition-all duration-300' >{"Terms & conditions"}</button>
        <button className=' text-stone-900 text-[15px] hover:text-violet-800 font-bold cursor-pointer transition-all duration-300' >{"Privacy & policy"}</button>
        <button className=' text-stone-900 text-[15px] hover:text-violet-800 font-bold cursor-pointer transition-all duration-300' >Contact-us</button>

      </div>
      <div className='flex gap-6 items-center' >
        <Link href="/login" >
          <button className=' text-stone-900 text-[15px] hover:text-violet-800 font-bold cursor-pointer transition-all duration-300' >Login</button>
        </Link>
        <Link href="/signup" >
          <button className='px-8 py-[10px] text-white rounded-full  font-medium bg-gradient-to-r from-violet-700 to-sky-500 hover:opacity-[0.8] transition-all duration-300' >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar