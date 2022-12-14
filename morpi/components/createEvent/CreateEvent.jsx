import React, { useState, useEffect } from 'react'
import TextEditor from "../../utils/quill/TextEditor";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useRouter } from "next/router"
import FormControl from '@mui/material/FormControl';

const CreateEvent = ({ nextLink }) => {

    const eventColors = [
        {
            color: "bg-violet-600",
            borderColor: "border-violet-600",
            name: "Violet",
        },
        {
            color: "bg-red-500",
            borderColor: "border-red-500",
            name: "Red",
        },
        {
            color: "bg-red-400",
            borderColor: "border-red-400",
            name: "Light pink",
        },
        {
            color: "bg-fuchsia-500",
            borderColor: "border-fuchsia-500",
            name: "Magenta",
        },
        {
            color: "bg-blue-500",
            borderColor: "border-blue-500",
            name: "Blue",
        },
        {
            color: "bg-cyan-300",
            borderColor: "border-cyan-300",
            name: "Cyan",
        },
        {
            color: "bg-green-400",
            borderColor: "border-green-400",
            name: "Green",
        },
        {
            color: "bg-lime-300",
            borderColor: "border-lime-300",
            name: "Lime",
        },
        {
            color: "bg-yellow-300",
            borderColor: "border-yellow-300",
            name: "Yellow",
        },
        {
            color: "bg-orange-400",
            borderColor: "border-orange-400",
            name: "Orange",
        },

    ]

    const [selectColor, setSelectColor] = useState({
        bg: "bg-violet-600",
        border: "border-violet-600"
    });

    const handleColorsChange = (bg, border) => {
        setSelectColor({
            bg,
            border
        })
    }


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
        <div className='w-screen h-screen grid place-items-center' >
            <div className={`w-[1000px] transition-all shadow-default rounded-md bg-white border-2 ${selectColor.border} flex flex-col justify-between`} >
                {/* head */}
                <div className='border-y border-stone-300 flex justify-between items-center px-[20px] py-[10px]' >
                    <div className='flex gap-3' >
                        <div className={`w-[22px] h-[22px] rounded-full ${selectColor.bg}`} ></div>
                        <div>
                            <p className='text-[15px] text-stone-700' >What event is this?</p>
                            <p className='text-[13px] text-stone-500' >No location given</p>
                        </div>
                    </div>

                    <div className='flex gap-3' >
                        <button className='border text-[15px] text-stone-600 hover:underline' >Cancel</button>
                        <button onClick={nextPage} className={`border text-[14px] ${selectColor.bg} rounded-full w-[70px] h-[35px] text-white grid place-items-center hover:opacity-80 transition-all`} >Next</button>
                    </div>

                </div>
                {/* body */}
                <div className='px-[55px] w-[550px] py-[35px] flex gap-6 flex-col h-[calc(75vh)]' >
                    {/* event name */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Event name
                        </label>
                        <TextField
                            className='w-full mt-2'
                            id="name"
                            label="Name"
                            placeholder="Event name"
                            size='small'

                        />
                    </div>
                    {/* event location */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Event Location
                        </label>
                        <FormControl
                            size='small'
                            className='w-full mt-2'
                        >
                            <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Location"
                                value=""
                                MenuProps={{ disableScrollLock: true, }}

                            >
                                <MenuItem value="">In-person meeting</MenuItem>
                                <MenuItem value={""}>Phone call</MenuItem>
                                <MenuItem value={""}>Google meet</MenuItem>
                                <MenuItem value={""}>Zoom</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* event description */}
                    <div className='' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]`}
                        >
                            Description/Instructions
                        </label>

                        <div className='mt-2' >
                            <TextEditor />
                        </div>
                    </div>

                    {/* event link */}
                    <div className='w-full' >
                        <label
                            htmlFor=""
                            className={`text-stone-800 font-bold text-[14px]  mb-8`}
                        >
                            Event link
                        </label>
                        <p className='text-[15px] text-stone-500' >calendly.com/muneebsafeer/</p>
                        <TextField
                            className='w-full mt-2'
                            id="link"
                            label="Link"
                            size='small'
                            placeholder="calendly.com/muneebsafeer/"

                        />
                    </div>

                    {/* event colors */}
                    <div className='w-full' >
                        <p className={`text-stone-800 font-bold text-[14px] mb-2`}>Event color</p>
                        <div className='grid grid-cols-10 gap-1' >
                            {eventColors.map((i, index) => (
                                <div
                                    onClick={() => handleColorsChange(i.color, i.borderColor)}
                                    key={index}
                                    className='relative cursor-pointer'
                                >

                                    <div className={`w-[35px] h-[35px] rounded-full grid place-items-center text-white font-bold ${i.color}`} >
                                        {selectColor.bg === i.color &&
                                            <p className='select-none' >
                                                ✔
                                            </p>
                                        }
                                    </div>
                                </div>
                            ))
                            }


                        </div>
                    </div>


                </div>
                {/* footer */}
                <div className='border-y border-stone-300 flex justify-end items-center px-[20px] py-[10px]' >
                    <div className='flex gap-3' >
                        <button className='border text-[15px] text-stone-600 hover:underline' >Cancel</button>
                        <button onClick={nextPage} className={`border text-[14px] ${selectColor.bg} rounded-full w-[70px] h-[35px] text-white grid place-items-center hover:opacity-80 transition-all`} >Next</button>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default CreateEvent