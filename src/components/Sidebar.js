import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import {useDispatch} from "react-redux";
import { openSendMessage } from '../features/mailSlice';



function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className='sidebar'>
            <div onClick = { () => dispatch(openSendMessage()) } >
                <Button 
                className="sidebarCompose" 
                startIcon={<AddIcon
                fontSize='large'
                /> }>
                    Compose
                </Button>    
            </div>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={20}/>
        <SidebarOption Icon={AccessTimeIcon} title="Important" number={20}/>
        <SidebarOption Icon={LabelImportantIcon} title="Sent" number={15}/>
        <SidebarOption Icon={NearMeIcon} title="Draft" number={0}/>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={10}/>

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>

                <IconButton>
                    <DuoIcon/>
                </IconButton>

                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>

        </div>
    )
}

export default Sidebar;
