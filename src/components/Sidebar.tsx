import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
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
            </div>
            </div>

        </div>
    )
}

export default Sidebar