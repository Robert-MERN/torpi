import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Calendar from '../Calendar';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';
import MuiPhoneNumber from 'material-ui-phone-number';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStateContext from '../../context/ContextProvider';
import TimeZoneSelect from '../../utils/TimeZoneSelect';

const SelectDate = () => {
    const { anchorEl, openTimeZonePopover, closeTimeZonePopover } = useStateContext();

    const handleOnChange = (value) => {
        console.log(value)
    }
    return (
        <div className='w-screen flex justify-center pb-14' >
            <div className='w-[800px] h-[70vh] flex shadow-default rounded-md mt-24' >
                <div className='flex-1 border-r border-stone-200 p-6' >
                    <IconButton className='text-blue-500 mb-6' >
                        <ArrowBackIcon className='scale-[1.2] text-blue-500' />
                    </IconButton>
                    <p className='font-bold text-zinc-500' >
                        Elon musk
                    </p>
                    <p className='font-bold text-[28px] text-stone-700 mb-4' >
                        Tesla Sales Meeting
                    </p>
                    <p className='flex items-center gap-2 mt-3 text-stone-600' >
                        <AccessTimeIcon />
                        15 min
                    </p>
                    <p className='flex items-center gap-2 mt-3 text-stone-600'>
                        <CallIcon />
                        Phone call
                    </p>
                </div>

                <div className='flex-[1.3]' >
                    <p className='font-bold text-[22px] text-stone-700 p-6' >
                        Select a Date & Time
                    </p>
                    <Calendar />
                    <p className='font-bold text-[16px] text-stone-700 px-6' >
                        Time Zone
                    </p>
                    <p
                        onClick={(e) => openTimeZonePopover(e, "popover3")}
                        aria-describedby={"timezone-popover3"}
                        className='flex items-center gap-2 mt-2 text-[14px] text-stone-800 px-6 select-none cursor-pointer p-2 hover:bg-stone-200' >
                        <PublicIcon className='scale-75'
                        />
                        Pakistan, Maldives Time (8:08am)
                    </p>
                    <TimeZoneSelect
                        ID="timezone-popover3"
                        anchorEl={anchorEl}
                        popoverName={"popover3"}
                        close={closeTimeZonePopover}
                    />
                </div>


                {/* <div className="flex-[1.3] p-6">
                    <p className='font-bold text-[22px] text-stone-700 mb-6' >
                        Enter Details
                    </p>
                    <div className='w-full flex flex-col gap-6' >

                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Name
                            </label>
                            <TextField
                                className='w-full mt-2'
                                id="name"
                                label="Name"
                                placeholder="Name"
                                size='small'

                            />
                        </div>

                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Email
                            </label>
                            <TextField
                                className='w-full mt-2'
                                id="name"
                                label="Email"
                                placeholder="Email"
                                size='small'

                            />
                        </div>

                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Phone number
                            </label>

                            <MuiPhoneNumber
                                className='w-full mt-2'
                                onChange={handleOnChange}
                                variant='outlined' size='small'
                                defaultCountry={'us'}
                            />
                        </div>

                        <div className='w-full' >
                            <label
                                htmlFor=""
                                className={`text-stone-800 font-bold text-[14px]`}
                            >
                                Please share anything that will help prepare for our meeting.
                            </label>

                            <TextField
                                id="outlined-multiline-static"
                                className='w-full mt-2'
                                multiline
                                rows={3}
                                size="small"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SelectDate