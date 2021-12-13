import { IconButton, Checkbox } from '@material-ui/core'
import {LabelImportantOutlined,  StarBorderOutlined } from '@material-ui/icons'
import React from 'react';
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function EmailRow({id, title, subject, description, timestamp}) {
    
    const history = useHistory();
    const dispatch = useDispatch();


    const openMail = () => {
        
        //payload
        
        dispatch(
            selectMail({
            id,
            title,
            subject,
            description,
            timestamp
        }));

        history.push("/mail");
    }

    return (
        <div onClick={openMail} className="emailRow">
            
            <div className="emailRow__options">
                <Checkbox/>

                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>

                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>

            <div className="emailRow__title">
                    {title}
            </div>

            <div className="emailRow__message">
                    <h4> {subject} {" "}
                        
                        <span className="emailRow__description"> -
                            {description}
                        </span>

                    </h4>
            </div>

            <p className="emailRow__timestamp">
                    {timestamp}
            </p>
        </div>
    )
}

export default EmailRow
