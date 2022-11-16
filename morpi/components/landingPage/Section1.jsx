import React from 'react'
import Image from "next/image";
import illustration from "../../public/images/illustration3.png";
import styles from '../../styles/Home.module.css'
import Link from "next/link"



const Section1 = () => {
    return (
        <div
            className='w-screen h-screen bg-wave-1 bg-bottom lg:bg-right bg-contain bg-no-repeat mb-40'
        >

            <div className='flex flex-col lg:flex-row w-screen h-screen lg:pt-[120px] lg:px-[300px] px-[12px]' >
                <div className='flex-1 pt-20 lg:px-12'>
                    <div className='mb-6 lg:mb-8' >

                        <span className={`text-stone-800 text-[36px] lg:text-[62px] leading-tight  font-bold whitespace-normal`} >
                            Build strong
                            relationships with </span>
                        <span className={`text-violet-700 text-[36px] lg:text-[62px] leading-tight   font-bold whitespace-normal`} > clients</span>
                    </div>
                    <p
                        className={`text-gray-500 text-[19px] lg:text-[24px] leading-tight mb-10`}
                    >
                        A complete suite of communication tools for building the best business relationships. No technical skills needed
                    </p>
                    <Link href="/signup" >
                        <button className='px-20 py-[10px] text-white rounded-full text-[17px] font-medium bg-gradient-to-r from-violet-700 to-sky-500 hover:opacity-[0.8] transition-all duration-300' >
                            Get started
                        </button>
                    </Link>
                </div>

                <div className='flex-1 placeholder:lg:p-12 flex justify-center items-center' >

                    <Image
                        alt='illustration'
                        src={illustration}
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
        </div>
    )
}

export default Section1