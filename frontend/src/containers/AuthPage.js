import React, { useState } from "react"
import './css/Authpage.css'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Signup from "../components/Signup";
import Login from "../components/Login";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    }
}))

const AuthPage = () => {
    const classes = useStyles()
    const [loginTab, setLoginTab] = useState(true)
    const [signUpTab, setSignupTab] = useState(false)

    const showLoginTab = () =>{
      setSignupTab(false)
      setLoginTab(true)
    }

    const showSignupTab = () =>{
      setLoginTab(false)
      setSignupTab(true)
    }
  return (
    <div className="authpage">
      <Header className="header"/>
    <div className="authpage__container">
        <div className="authpage__image">HomeSpot</div>
        <div className='container'>
            <div className="authpage__tab">
                <Avatar className={classes.avatar}/>
                <div className="tab__row">
                    <div style = {!!loginTab ? {borderBottomWidth:"4px", borderBottomStyle:"solid", borderBottomColor:"#fa133a"}:{}} onClick = {showLoginTab} className="login__tab">Login</div>
                    <div style = {!!signUpTab ? {borderBottomWidth:"4px", borderBottomStyle:"solid", borderBottomColor:"#fa133a"}:{}} onClick= {showSignupTab} className="signup__tab">Signup</div>
                </div>  
                <div className="tab__border__line"></div>
                <div className="authpage__text mt-4 mx-3">
                <h4>Welcome to HomeSpot</h4>
            </div> 
            </div>
            {!!loginTab && <Login/>}
            {!!signUpTab && <Signup/>}   
        </div>
    </div>
    </div>
  )
}

export default AuthPage