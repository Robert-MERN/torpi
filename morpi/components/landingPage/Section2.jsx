import React from 'react'
import Image from "next/image";
import illustration from "../../public/images/illustration2.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Section2 = () => {
    return (
        <div className='w-screen h-fit flex flex-col items-center' >
            <h1 className={`w-[700px] text-stone-800 text-[36px] lg:text-[50px] leading-[60px] font-bold whitespace-normal text-center`} >
                We make scheduling for you easier than ever
            </h1>
            <div className='flex flex-col lg:flex-row w-full lg:px-[300px] px-[12px] h-[65vh]' >
                <div className='flex-1  lg:pl-12 lg:pr-20 flex flex-col justify-center items-start'>
                    <div className='mb-6 lg:mb-8' >
                        <h1 className={`text-stone-800 text-[36px] lg:text-[40px] leading-tight font-medium whitespace-normal`} >Share your Morpi availability with others</h1>
                    </div>
                    <p className={`text-gray-500 text-[19px] lg:text-[24px] leading-tight  mb-10`}>
                        Grow your business with scheduling automation. Simply email, text, or add your Morpi availability to your website – and watch prospects and recruits book high-value meetings with you.
                    </p>
                    <button className='flex items-center gap-2 text-violet-700 rounded-full text-[20px] hover:text-stone-800 transition-all duration-300' >
                        Learn more
                        <ArrowForwardIcon />
                    </button>
                </div>

                <div className='flex-1 flex justify-center items-start' >
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

export default Section2