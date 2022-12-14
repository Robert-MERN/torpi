import React, { useTransition } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import times from '../../utils/time';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const TimesSelect = ({ day, setTime, data }) => {
    const ITEM_HEIGHT = 40;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        disableScrollLock: true,
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            },
        },
    };


    const Hour12Convert = (time) => {
        return new Date(new Date(new Date().setMinutes(time.split(":")[1])).setHours(time.split(":")[0])).toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    }


    const [isPending, startTransition] = useTransition();
    const handletimeSlotsChanged = (e, key) => {
        startTransition(() => {
            setTime(prev => (
                {
                    ...prev,
                    [day]: {
                        ...prev[day],
                        [key]: {
                            hour12: Hour12Convert(e.target.value),
                            hour24: e.target.value,
                            minutes: e.target.value.split(":")[1]
                        }
                    }
                }))
        })
    }

    const deleteTime = () => {
        startTransition(() => {
            setTime(prev => ({ ...prev, [day]: { ...prev[day], checked: false } }));
        })
    }
    return (
        <div className='flex items-center gap-3' >
            <FormControl size='small' className='w-fit'>
                <Select
                    className=''
                    MenuProps={MenuProps}
                    value={data[day].time1.hour24}
                    onChange={e => handletimeSlotsChanged(e, "time1")}
                >
                    {times.map((i, index) => (
                        <MenuItem key={index} value={i}>
                            {
                                Hour12Convert(i)
                            }
                        </MenuItem>
                    ))

                    }
                </Select>
            </FormControl>
            <p className='font-bold text-stone-400' >-</p>

            <FormControl size='small' className='w-fit'>
                <Select
                    className=''
                    MenuProps={MenuProps}
                    value={data[day].time2.hour24}
                    onChange={e => handletimeSlotsChanged(e, "time2")}
                >
                    {times.map((i, index) => (
                        <MenuItem key={index} value={i}>
                            {
                                Hour12Convert(i)
                            }
                        </MenuItem>
                    ))

                    }
                </Select>
            </FormControl>

            <IconButton onClick={deleteTime}>
                <DeleteIcon />
            </IconButton>

        </div>
    )
}

export default TimesSelect