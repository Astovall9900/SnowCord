import React from 'react'
import './SidebarChannel.css'

interface Props {
    id: number;
    channel: string;
}

const SidebarChannel = (props: Props) => {
  return (
    <div className="sidebar-channel">
        <h4><span className="sidebar-hash">{props.id}</span>{props.channel}</h4>
    </div>
  )
}

export default SidebarChannel