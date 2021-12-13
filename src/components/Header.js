import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useSelector} from "react-redux";
import {selectUser, logout} from "../features/userSlice"
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { auth } from "../Firebase";

function Header() {
    const user = useSelector(selectUser);

    const history = useHistory();
    const dispatch = useDispatch();


    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
        
    }

 

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>

            </div>

            <div className="header__middle">
                 <input placeholder="Search Mail" type="text"/>
                 <ArrowDropDownIcon className="headerInputCaret"/>
                 <SearchIcon/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>

                <Avatar src={user?.photoUrl} onClick={signOut} className="avatar"/>
            </div>

            <div className="emailList__sections">
                
            </div>

        </div>
    )
}

export default Header
