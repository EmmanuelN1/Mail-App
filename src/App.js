import React, {useEffect} from  'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useSelector} from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';
import {selectUser, login} from "./features/userSlice";
import Login from './components/Login';
import {useDispatch} from "react-redux";
import { auth } from './Firebase';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
//keeps the user logged in with his/her credentials
  useEffect(() => {
      auth.onAuthStateChanged( user => {
        if (user) {
            dispatch(
              login({
                displayName :  user.displayName,
                email : user.email,
                photoUrl : user.photoURL
            }))
        }
      })
  }, [])


  return ( 
    <Router>
      {!user ? (<Login/> ) :
          <div className="app">
            <Header/>
            <div className="app__body">
              <Sidebar/>

              <Switch>
                  <Route path="/mail">
                    <Mail/>
                  </Route>

                  <Route path="/">
                    <EmailList/>
                  </Route>

              </Switch>
            </div>
              
              {sendMessageIsOpen && <SendMail/>} 

          </div>
      }

    </Router>
  );
}

export default App;
