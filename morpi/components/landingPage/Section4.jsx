import React from 'react'
import Image from "next/image";
import illustration from "../../public/images/illustration5.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Section4 = () => {
    return (
        <div className='w-screen h-fit flex flex-col items-center' >
            <div className='flex flex-col lg:flex-row w-full lg:px-[300px] px-[12px] h-[65vh]' >


                <div className='flex-1  lg:pl-12 lg:pr-20 flex flex-col justify-center'>
                    <div className='mb-6 lg:mb-8' >
                        <h1 className={`text-stone-800 text-[36px] lg:text-[40px] leading-tight font-medium whitespace-normal`} >
                            Hit your number
                        </h1>
                    </div>
                    <p className={`text-gray-500 text-[19px] lg:text-[24px] leading-tight  mb-10`}>
                        High-value meetings are the lifeblood of your business. Increase revenue, retain customers, and land recruits with the #1 scheduling automation platform.
                    </p>
                    <button className='flex items-center gap-2 text-violet-700 rounded-full text-[20px] hover:text-stone-800 transition-all duration-300' >
                        Learn more
                        <ArrowForwardIcon />
                    </button>
                </div>

                <div className='flex-1' >
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

export default Section4