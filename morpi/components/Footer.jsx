import React, { useState } from 'react'
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../styles/Home.module.css'
import Logo from '../utils/Logo';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';



const Footer = () => {
  const icons = [
    {
      icon: <TwitterIcon />,
      name: "icon-2",
      link: "https://twitter.com/torpi",
    },
    {
      icon: <InstagramIcon />,
      name: "icon-3",
      link: "https://www.instagram.com/torpi/",
    },
    {
      icon: <MailIcon />,
      name: "icon-4",
      link: "mailto:torpi@gmail.com",
    }
  ]
  const [hover, sethover] = useState({
    'icon-1': false,
    'icon-2': false,
    'icon-3': false,
  });
  // hover function
  const hoverIcon = (bool, key) => {
    sethover((prev) => ({ ...prev, [key]: bool }))
  }
  return (
    <div className='pt-12 pb-8 px-[348px] w-full border-t border-stone-300 flex flex-col gap-16 bg-white' >
      <div className='w-full flex justify-between' >
        <div className='flex-1 flex flex-col gap-6 pr-8' >
          <Logo />
          <p className='text-[20px] text-stone-700 font-medium'>We take the work out of connecting with others so you can accomplish more.</p>
        </div>
        <div className='flex-1 border-x border-stone-300 flex flex-col gap-6 px-8 ' >
          <Link href="/about" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >About</p>
          </Link>
          <Link href="/privacy-policy" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Privacy & Policy</p>
          </Link>
          <Link href="/terms-conditions" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Terms & Conditions</p>
          </Link>
          <Link href="/contact-us" >
            <p className='text-[18px] text-stone-700 font-medium hover:text-black transition-all' >Contact-us</p>
          </Link>
        </div>
        <div className='flex-1 flex flex-col gap-6 pl-8' >
          <div className='flex gap-3 items-center' >
            {/* icons */}
            {
              icons.map((i, index) => (
                <a href={i.link} target="__blank" key={index} onMouseOver={() => hoverIcon(true, i.name)} onMouseLeave={() => hoverIcon(false, i.name)} className={`w-[50px] h-[50px] relative rounded-full bg-glare overflow-hidden cursor-pointer border border-stone-300 ${styles.tapHighlight}`} >
                  <div className={`absolute inset-0 w-full h-full grid place-content-center text-stone-800 transition-all rounded-full duration-[400ms] ${hover[i.name] ? "opacity-0" : "opacity-100"}`} >
                    {i.icon}
                  </div>
                  <div className={`absolute inset-0 w-full h-full grid place-content-center bg-gradient-to-bl to-violet-700 from-sky-400 text-gray-300  transition-all duration-[400ms] rounded-full ${hover[i.name] ? "scale-[1]" : "scale-0"}`} >
                    {i.icon}
                  </div>
                </a>
              ))}
          </div>
          <a rel="noreferrer noopener" href="tel:647-660-1776" className=" text-stone-700 font-medium hover:text-black transition-all">
            <CallIcon className='mr-3' ></CallIcon> <span>647-660-1776</span>
          </a>
          <a rel="noreferrer noopener" href="mailto:torpi@gmail.com.com" className=" text-stone-700 font-medium hover:text-black transition-all">
            <MailIcon className='mr-3' ></MailIcon> <span>morpi@gmail.com</span>
          </a>
        </div>

      </div>
      <div className='w-full flex justify-center' >
        <p className='text-[15px] text-stone-500 font-medium' > © Copyright 2022. All Rights Reserved by Morpi.</p>
      </div>
    </div>

  )
}

export default Footer