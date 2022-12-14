import React, { useState } from 'react'
import AvailableTimes from './AvailableTimes'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useRouter } from "next/router";

const SoccerScheduleAvailability = () => {
    const [availableTime, setAvailableTime] = useState({
        Sun: {
            checked: false,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Mon: {
            checked: true,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Tue: {
            checked: true,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Wed: {
            checked: true,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Thu: {
            checked: true,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Fri: {
            checked: true,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        },
        Sat: {
            checked: false,
            time1: {
                hour12: "09:00 AM",
                hour24: "09:00",
                minutes: "00"
            },
            time2: {
                hour12: "05:00 PM",
                hour24: "17:00",
                minutes: "00"
            },
        }
    });

    const router = useRouter();
    const nextPage = () => {
        router.push({
            pathname: `/event/new/${nextLink}`,
            query: {
                data: ""
            }
        }, `/event/new/${nextLink}`)
    }

    return (
        <div className='w-screen flex justify-center pb-[80px] mt-[80px]' >
            <div className='w-[1000px] shadow-default rounded-md bg-white border-2 border-violet-600 flex flex-col justify-between' >
                {/* head */}
                <div className='border-y border-stone-300 flex justify-between items-center px-[20px] py-[10px]' >
                    <div className='flex gap-3' >
                        <div className={`w-[22px] h-[22px] rounded-full bg-violet-700`} ></div>
                        <div>
                            <p className='text-[15px] text-stone-700' >When can people book this event?</p>
                            <p className='text-[13px] text-stone-500' >{"15 Min"}</p>
                        </div>
                    </div>


                    <div className='flex gap-3' >
                        <button className='border text-[15px] text-stone-600 hover:underline' >Cancel</button>
                        <button onClick={nextPage} className='border text-[14px] bg-violet-700 rounded-full w-[70px] h-[35px] text-white grid place-items-center' >Next</button>
                    </div>

                </div>


                {/* body */}
                <div className='flex w-full px-[55px] my-10'>
                    <div className='flex-1' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Duration
                        </label>
                        <FormControl
                            size='small'
                            className='w-full mt-2'
                        >
                            <Select
                                value="15 Min"
                                MenuProps={{ disableScrollLock: true, }}
                            >
                                <MenuItem value="15 Min">15 Min</MenuItem>
                                <MenuItem value={""}>30 Min</MenuItem>
                                <MenuItem value={""}>45 Min</MenuItem>
                                <MenuItem value={""}>60 Min</MenuItem>
                                <MenuItem value={""}>Custom</MenuItem>
                            </Select>
                        </FormControl>


                    </div>
                    <div className='flex-1 pl-[30px]' >
                        <p className='text-stone-400 text-[15px]' >Define how long your event will be. It can be as long as 12 hours.</p>
                    </div>
                </div>
                <div className='flex w-full px-[55px] my-10'>
                    <div className='flex-1 flex flex-col gap-6' >
                        <div>
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                How do you want to offer your availability for this event type?
                            </label>
                            <div className='flex gap-4 my-2' >
                                <div className='px-[16px] py-[6px] border-stone-300 border-2 hover:border-blue-700 rounded-md text-stone-700 select-none cursor-pointer transition-all' >
                                    Use an existing schedule
                                </div>
                                <div className='px-[16px] py-[6px] border-stone-300 border-2 hover:border-blue-600 rounded-md text-stone-600 select-none cursor-pointer transition-all' >
                                    Set custom hours
                                </div>
                            </div>

                        </div>

                        <div>
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Which schedule do you want to use?
                            </label>
                            <FormControl
                                size='small'
                                className='w-full mt-2'
                            >
                                <Select
                                    label=""
                                    value="Working hours"
                                    MenuProps={{ disableScrollLock: true, }}
                                >
                                    <MenuItem value="Working hours">Working hours</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='flex-1 pl-[30px]' >
                        <p className='text-stone-400 text-[15px]' >
                            Select one of your schedules or define custom hours specific to this type of event.
                        </p>

                    </div>
                </div>
                <div className='px-[55px] mb-10' >
                    <div className='w-full border border-stone-300 rounded-md' >
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Sun"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Mon"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Tue"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Wed"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Thu"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Fri"
                        />
                        <AvailableTimes
                            set={setAvailableTime}
                            data={availableTime}
                            day="Sat"
                        />
                    </div>
                </div>

                {/* footer */}
                <div className='border-y border-stone-300 flex justify-end items-center px-[20px] py-[10px]' >
                    <div className='flex gap-3' >
                        <button className='border text-[15px] text-stone-600 hover:underline' >Cancel</button>
                        <button onClick={nextPage} className='border text-[14px] bg-violet-700 rounded-full w-[70px] h-[35px] text-white grid place-items-center' >Next</button>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default SoccerScheduleAvailability