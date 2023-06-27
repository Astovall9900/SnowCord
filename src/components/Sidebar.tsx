import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import { SignalCellularAlt, InfoOutlined, Call } from '@material-ui/icons';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <h3>Snowcord Server Hub Name</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="channels">
                <div className="channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="add-channel"/>
                </div>
            <div className="channels-list">
                <SidebarChannel id={1} channel={"Youtube"}/>
                <SidebarChannel id={2} channel={"Youtube"}/>
                <SidebarChannel id={3} channel={"Youtube"}/>
                <SidebarChannel id={4} channel={"Youtube"}/>
            </div>
            </div>
            <div className="sidebar-voice">
                <SignalCellularAlt
                className='voice-icon'
                fontSize='large'
                />
                <div className="sidebar-voice-info">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar-voice-icons">
                    <InfoOutlined/>
                    <Call/>
                </div>
            </div>

            <div className="sidebar-profile">
                <Avatar />
                <div className="sidebar-profile-info">
                    <h3>@user</h3>
                    <p>#userId</p>
                </div>
                <div className="sidebar-profile-icons">
                    
                </div>
            </div>

        </div>
    )
}

export default Sidebar