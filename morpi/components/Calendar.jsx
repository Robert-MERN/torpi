import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = () => {
    useEffect(() => {
        const button = document.querySelector(".MuiPickersCalendarHeader-labelContainer");
        if (button) {
            button.parentNode.removeChild(button)
        }
        const container = document.querySelector(".MuiPickersCalendarHeader-root");
        if (container.childNodes.length < 2) {
            // Create an "li" node:
            const node = document.createElement("p");
            // Create a text node:
            const textnode = document.createTextNode("November 2022");
            // Append the text node to the "li" node:
            node.appendChild(textnode);
            container.appendChild(node);

        }
        container.classList.add("flex", "flex-row-reverse", "justify-between")
    });
    const [value, setValue] = useState(dayjs('2022-04-07'));
    return (
        <div className='w-full' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}

                />
            </LocalizationProvider>
        </div>
    )
}

export default Calendar