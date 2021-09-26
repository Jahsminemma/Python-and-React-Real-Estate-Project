import React from 'react'
import Header from '../components/Header'
import ListingForm from '../components/ListingForm'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import './css/Search.css'

const Search = () => {
    const listings = useSelector(state => state.listing.listing)
   
    return (
        <div className="search">
            <div className="page__header">
                <Header/>
            </div>
            <div className="search__listingform container">
                <h2>Search</h2>
                <ListingForm/>
            </div>
            <div className ="search__listing container">
                {listings !== null && listings.length > 0 ? listings.map(listing =>{
                    const {sale_type, title, main_image, address, price, city, home_type, state, id} = listing
                    return (
                        <Card sale_type ={sale_type} 
                        img_url = {main_image} home_type = {home_type} 
                        address ={address} id = { id }
                        price = {price.toLocaleString()} title = {title}
                        location = {city +" "+ state} key = {id} />
                    )
                }): <h3>No listing with the searched details</h3>}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Search
