import React, { useTransition, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import TimesSelect from './TimesSelect'
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EventCopyTimeModal from "../../utils/modals/EventCopyTimeModal";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const AvailableTimes = ({ day, data, set }) => {
    const [isPending, startTranstion] = useTransition();
    const [accountBtnHover, setAccountBtnHover] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);


    const handleCopyTimetPop = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCheckBox = (e) => {
        startTranstion(() => {
            set(prev => ({ ...prev, [day]: { ...prev[day], checked: e.target.checked } }));
        })
    }
    return (
        <div className='w-full py-[20px] border h-fit px-[55px]' >
            <div className='w-full flex justify-between' >
                <div className='flex items-start gap-6' >
                    <div className='flex items-center w-[75px]' >
                        <Checkbox
                            onChange={e => handleCheckBox(e)}
                            checked={data[day].checked}
                        />
                        <p className='font-medium text-stone-700' >{day}</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center h-full' >
                        {data[day].checked ?
                            <TimesSelect day={day} data={data} setTime={set} />
                            :
                            <p className='text-[15px] text-stone-500' >Unavailable</p>
                        }
                    </div>
                </div>
                <div className='flex items-start' >
                    <Tooltip
                        title={`Copy times for ${day}`}
                        placement="top"
                        TransitionComponent={Zoom}
            
                    >
                        <IconButton
                            onClick={handleCopyTimetPop}
                            aria-describedby='eventTimeCopyModal'
                        >
                            <ContentCopyIcon className='scale-[.80] text-stone-600' />
                        </IconButton>
                    </Tooltip>
                    <EventCopyTimeModal
                        anchorEl={anchorEl}
                        day={day}
                        close={() => setAnchorEl(null)}
                    />
                </div>
            </div>
            {data[day].time1.hour24 >= data[day].time2.hour24 &&
                <p className='text-red-500 text-[14px]' >Time is overlapping</p>
            }
        </div>


    )
}

export default AvailableTimes