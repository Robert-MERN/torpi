import React from 'react'
import LogoutAskModal from '../utils/modals/LogoutAskModal'
import useStateContext from "../context/ContextProvider";
import DeleteEventAskModal from '../utils/modals/DeleteEventAskModal';

const Layout = ({ children }) => {
    const { modals, closeModal } = useStateContext();
    return (
        <div>
            <LogoutAskModal open={modals.logout} close={closeModal} />
            <DeleteEventAskModal open={modals.deleteEvent} close={closeModal} />
            {children}
        </div>
    )
}

export default Layout