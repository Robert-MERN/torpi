import React, { useState } from 'react'
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import CastleIcon from '@mui/icons-material/Castle';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Link from "next/link";

const EventType = () => {
    const defaultOptions = {
        hoverOpt1: false,
        hoverOpt2: false,
        hoverOpt3: false,
        hoverOpt4: false,
    }
    const [options, setOptions] = useState(defaultOptions);
    const onHover = (name) => {
        setOptions({ ...defaultOptions, [name]: true })
    }
    const onLeave = (name) => {
        setOptions({ ...defaultOptions, [name]: false })
    }
    return (
        <div className='w-screen flex justify-center pb-[80px] mt-[80px]' >
            <div className='w-[600px] shadow-default bg-white rounded-md flex flex-col justify-between' >
                <Link href="/event/new/one-on-one">
                    <div onMouseLeave={() => onLeave("hoverOpt1")} onMouseOver={() => onHover("hoverOpt1")} className='w-full px-10 rounded-t-md h-32 border hover:border-violet-600 transition-all cursor-pointer flex items-center gap-10' >
                        <div>
                            <GroupsIcon className={`scale-[1.4] ${options.hoverOpt1 ? "text-violet-600" : "text-stone-700"}`} />
                        </div>
                        <div className='flex w-full justify-between items-center' >
                            <div>
                                <p className='text-[19px] text-black' >One-on-One</p>
                                <p className='text-[16px] font-bold text-stone-700' >One host <span className='font-[400] text-black' >with</span>  One invitee</p>
                                <p className='text-stone-500 text-[15px]'>Good for: The text will be provided</p>
                            </div>
                            <div>
                                <ArrowForward className={`scale-[.7] ${options.hoverOpt1 ? "text-violet-600" : "text-stone-500"}`} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/event/new/hotel-booking">
                    <div onMouseLeave={() => onLeave("hoverOpt2")} onMouseOver={() => onHover("hoverOpt2")} className='w-full px-10 h-32 border hover:border-violet-600 transition-all cursor-pointer flex items-center gap-10' >
                        <div>
                            <CastleIcon className={`scale-[1.4] ${options.hoverOpt2 ? "text-violet-600" : "text-stone-700"}`} />
                        </div>
                        <div className='flex w-full justify-between items-center' >
                            <div>
                                <p className='text-[19px] text-black' >Hotel-Booking</p>
                                <p className='text-[16px] font-bold text-stone-700' >One host <span className='font-[400] text-black' >with</span>  One invitee</p>
                                <p className='text-stone-500 text-[15px]'>Good for: The text will be provided</p>
                            </div>
                            <div>
                                <ArrowForward className={`scale-[.7] ${options.hoverOpt2 ? "text-violet-600" : "text-stone-500"}`} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/event/new/soccer-field-booking">
                    <div onMouseLeave={() => onLeave("hoverOpt3")} onMouseOver={() => onHover("hoverOpt3")} className='w-full px-10 h-32 border hover:border-violet-600 transition-all cursor-pointer flex items-center gap-10' >
                        <div>
                            <SportsVolleyballIcon className={`scale-[1.4] ${options.hoverOpt3 ? "text-violet-600" : "text-stone-700"}`} />
                        </div>
                        <div className='flex w-full justify-between items-center' >
                            <div>
                                <p className='text-[19px] text-black' >Soccer-Field-Booking</p>
                                <p className='text-[16px] font-bold text-stone-700' >One host <span className='font-[400] text-black' >with</span>  One invitee</p>
                                <p className='text-stone-500 text-[15px]'>Good for: The text will be provided</p>
                            </div>
                            <div>
                                <ArrowForward className={`scale-[.7] ${options.hoverOpt3 ? "text-violet-600" : "text-stone-500"}`} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/event/new/barber-booking">
                    <div onMouseLeave={() => onLeave("hoverOpt4")} onMouseOver={() => onHover("hoverOpt4")} className='w-full px-10 rounded-b-md h-32 border hover:border-violet-600 transition-all cursor-pointer flex items-center gap-10' >
                        <div>
                            <ContentCutIcon className={`scale-[1.4] ${options.hoverOpt4 ? "text-violet-600" : "text-stone-700"}`} />
                        </div>
                        <div className='flex w-full justify-between items-center' >
                            <div>
                                <p className='text-[19px] text-black' >Barber-Booking</p>
                                <p className='text-[16px] font-bold text-stone-700' >One host <span className='font-[400] text-black' >with</span>  One invitee</p>
                                <p className='text-stone-500 text-[15px]'>Good for: The text will be provided</p>
                            </div>
                            <div>
                                <ArrowForward className={`scale-[.7] ${options.hoverOpt4 ? "text-violet-600" : "text-stone-500"}`} />
                            </div>
                        </div>
                    </div>
                </Link>


            </div>
        </div >
    )
}

export default EventType