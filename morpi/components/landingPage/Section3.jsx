import React from 'react'
import Image from "next/image";
import illustration from "../../public/images/illustration1.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Section3 = () => {
    return (
        <div className='w-screen h-fit flex flex-col items-center' >
            <div className='flex flex-col lg:flex-row w-full lg:px-[300px] px-[12px] h-[65vh]' >

                <div className='flex-1 flex justify-center items-start' >

                    <Image
                        alt='illustration'
                        src={illustration}
                        className="w-full h-full object-contain"
                    />

                </div>
                <div className='flex-1  lg:pl-20 lg:pr-12 flex flex-col justify-center'>
                    <div className='mb-6 lg:mb-8' >
                        <h1 className={`text-stone-800 text-[36px] lg:text-[40px] leading-tight font-medium whitespace-normal`} >
                            Schedule as a team
                        </h1>
                    </div>
                    <p className={`text-gray-500 text-[19px] lg:text-[24px] leading-tight  mb-10`}>
                        Morpi adapts to both you and your team's scheduling preferences. Co-host a client call with a colleague, email reminders and follow-ups, and integrate everything with your preferred software tools.
                    </p>
                    <button className='flex items-center gap-2 text-violet-700 rounded-full text-[20px] hover:text-stone-800 transition-all duration-300' >
                        Learn more
                        <ArrowForwardIcon />
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Section3