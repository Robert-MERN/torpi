import { createContext, useContext, useState, useTransition } from 'react'
import { Data } from "../utils/timezoneName";

const StateContext = createContext();




export const ContextProvider = ({ children }) => {

    const [isPending2, startTransition2] = useTransition();
    const defaultAnchor = {
        popover1: null,
        popover2: null,
        popover3: null
    }
    const [anchorEl, setAnchorEl] = useState(defaultAnchor);
    const openTimeZonePopover = (e, name) => {
        setAnchorEl({ ...defaultAnchor, [name]: e.currentTarget });

        startTransition2(() => {
            console.log("i'm in transition check if I render first")
            const Africa = Data.filter((i) => i.zoneName.includes("Africa"));
            const America = Data.filter((i) => i.zoneName.includes("America"));
            const Antartica = Data.filter((i) => i.zoneName.includes("Antartica"));
            const Asia = Data.filter((i) => i.zoneName.includes("Asia"));
            const Atlantic = Data.filter((i) => i.zoneName.includes("Atlantic"));
            const Europe = Data.filter((i) => i.zoneName.includes("Europe"));
            const Indian = Data.filter((i) => i.zoneName.includes("Indian"));
            const Pacific = Data.filter((i) => i.zoneName.includes("Pacific"));
            setTimeZone((prev) => ({
                ...prev,
                America,
                Africa,
                Antartica,
                Asia,
                Atlantic,
                Europe,
                Indian,
                Pacific,
            }));
        })
    }
    const closeTimeZonePopover = (name) => {
        setTimeZone({});
        startTransition2(() => {
            setAnchorEl({ ...defaultAnchor, [name]: null });
        })
    }

    // language switch
    const [language, setLanguage] = useState("english");


    // timezones
    const [timeZone, setTimeZone] = useState({});



    // modals
    const defaultModals = {
        logout: false,
        deleteEvent: false
    }
    const [modals, setModals] = useState(defaultModals);
    const openModal = (key) => {
        setModals({ ...defaultModals, [key]: true });
    }
    const closeModal = (key) => {
        setModals({ ...defaultModals, [key]: false });
    }

    return (
        <StateContext.Provider
            value={{
                anchorEl, openTimeZonePopover, closeTimeZonePopover,
                language, setLanguage,
                timeZone, setTimeZone, isPending2,
                modals, openModal, closeModal
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

const useStateContext = () => useContext(StateContext);
export default useStateContext;