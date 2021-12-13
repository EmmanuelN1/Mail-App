import React from 'react'
import './SidebarOption.css'
function SidebarOption({Icon, title, number, selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption__active"}`}>
            <Icon/>
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
