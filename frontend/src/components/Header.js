import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core' 
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../redux/actions/auth'
import './css/Header.css'
import Alerts from './Alert'


const Header = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()
    const [scrollHeight, setScrollHeight] = useState(window.scrollBy)
    const checkScrollHeight = () =>{
        setScrollHeight(window.scrollY)
    }
        
    useEffect(()=>{
        document.addEventListener('scroll', checkScrollHeight)
        return () => {
            window.removeEventListener('scroll', checkScrollHeight)
        }
    },[])
    return (
        <div style = { scrollHeight > 100 ? {position:"fixed", backgroundColor:"rgb(3, 12, 43, 0.5)"} : {position:"relative", backgroundColor:"transparent"}} className="app_header">
            <div className="navBar">
                <div className="logo">
                    <h2><Link className="link" to="/">HSpot</Link></h2>
                </div>
                <div className="navlink row">
                    <ul>
                        <li className="navlist"><Link className="link" to="/listings">Listings</Link></li>
                        <li className="navlist"><Link className="link" to="/contact">Contact</Link></li>
                        <li className="navlist"><Link className="link"  to="/about">About</Link></li>
                    </ul>
                <div className="btn">
                    {!isAuthenticated ? (
                    <Button variant="contained" color="secondary"><Link style={{color:"white"}} to="/authPage">Sign in</Link></Button>
                    ): <Button onClick = {() => dispatch(signout())} variant="contained" color="secondary"><Link style={{color:"white"}} to="/">Logout</Link></Button>}
                </div>
                </div>
                <Alerts/>
            </div>
        </div>
    )
}

export default Header
