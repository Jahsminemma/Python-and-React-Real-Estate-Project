import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./css/Addlisting.css"

// Converting to dashboard where users can:
// View, edit and remove listings 
// see user messages on each listings
// Add more listings
// See user request on each listings 

const AddListing = () => {
    const agent = useSelector(state => state.auth.full_name)
    return (
        <div className="addListingForm">
            <div className="addListing_header">
                <div className="header__container"> <Header/></div>
                <div class="add-hotel-breadcrumb-nav d-flex hidden-xs">
                    <ul className="container-fluid breadcrumb add-hotel-breadcrumb">
                        <li><Link className="breadcrumb_link" to='/'>Home</Link></li>
                        <li className="active">Add Your Hotel</li>
                        <li className="agent"><marquee behavior="" direction="">Welcome back { agent }!</marquee> </li>
                    </ul>
                </div>
            </div>
            <div className="container">

            </div>
        </div>
    )
}

export default AddListing
