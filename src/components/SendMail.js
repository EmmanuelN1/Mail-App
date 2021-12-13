import React from 'react';
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { closeSendMessage } from '../features/mailSlice';
import {db} from "../Firebase";
import firebase from "firebase";

function SendMail() {
        const {register, handleSubmit, watch, errors} = useForm();
        const dispatch = useDispatch();

        const onClick = (formData) => {
            db.collection("emails").add(
                {
                    to: formData.to,
                    subject: formData.subject,
                    message: formData.message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()  
                }
            );
                    dispatch(closeSendMessage());
        }
    return ( 
        <div className="sendmail">
            <div className="sendmail__header">
                    <h3>New Message</h3>
                    <CloseIcon 
                        onClick = {() => dispatch(closeSendMessage())}
                        className="sendmail__close"
                        />
            </div>

                <form onSubmit={handleSubmit(onClick)} >
                    <input {...register("to", { required: true })} placeholder="To" type="email" name="to"
                    />
                               
                    <input placeholder="Subject" type="text" name="subject" {...register("subject", { required: true })} />
                    
                    <input placeholder="Message..." type="text" className="sendmail__message" name="message"
                    {...register("message", { required: true })} />
                    

                    <div className="sendmail__options">
                        <Button 
                        className="sendmail__send"
                        variant="contained"
                        color="primary"
                        type="submit" 
                        
                        > Send </Button>
                    </div>
                </form>


        </div>
    )
}

export default SendMail
