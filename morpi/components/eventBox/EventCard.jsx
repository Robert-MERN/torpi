import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import SettingsIcon from '@mui/icons-material/Settings';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from 'next/link'
import { useRouter } from 'next/router';
import EventCardSettingModal from '../../utils/modals/EventCardSettingModal';

const EventCard = ({ title, time }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const cardSettingOpen = (e) => {
    setAnchorEl(e.currentTarget);
  }


  const router = useRouter();
  const navigate = () => {
    router.push(`/edit-event/${"12134787"}`)
  }
  return (
    <div id="parent-container-event-card" className='w-[330px] h-fit overflow-hidden rounded-md shadow-default border-t-[6px] border-blue-700 bg-white select-none'>
      <div className='flex justify-between items-center py-1 px-2' >
        <Checkbox />
        <div onClick={cardSettingOpen} aria-describedby="eventSettingPop" className='px-2 py-2 hover:bg-gray-300 rounded-md cursor-pointer transition-all' >
          <SettingsIcon className='scale-75' />
        </div>
        <EventCardSettingModal
          anchorEl={anchorEl}
          close={() => setAnchorEl(null)}
        />
      </div>
      <div className='flex flex-col gap-6' >


        <div>

          <div onClick={navigate} className='px-5 cursor-pointer' >
            <p className='text-[20px] text-stone-800 w-[170px] overflow-hidden text-ellipsis whitespace-nowrap' >{title}</p>
            <p className='text-[15px] text-stone-500' >{time}</p>
          </div>
          <Link className='hover:underline transition-all' href={`schedule/safeer`} >
            <p className='text-blue-700 mt-2 cursor-pointer px-5' >View Booking page</p>
          </Link>
        </div>


        <div className='flex justify-between items-center border px-5 py-2' >
          <div className='flex items-center cursor-pointer' >
            <ContentCopyIcon className='scale-[.60] text-blue-700' />
            <p className='text-[14px] text-blue-700 select-none' >Copy link</p>
          </div>
          <button className='border text-[14px] border-blue-700 rounded-full px-6 py-[.20rem] text-blue-700' >Share</button>
        </div>
      </div>
    </div>
  )
}

export default EventCard