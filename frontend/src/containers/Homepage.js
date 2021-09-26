import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import PageviewIcon from '@material-ui/icons/Pageview';
import "./css/Homepage.css"
import axios from 'axios';
import ListingForm from '../components/ListingForm';
import Card from '../components/Card'
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core' 
import { useSelector } from 'react-redux';




const Homepage = () => {
const [Listings, setListings] = useState([])
const [loading, setLoading] = useState(true)
const [hotDeals, setHotDeals] = useState([])
const [featuredListings, setFeaturedListings] = useState([])
const account_type = useSelector(state => state.auth.account_type)


const fetchListings = () => {
    axios.get("http://localhost:7000/api/listings/?page=1")
    .then(result => { 
        const listings = result.data.results
        setListings(listings)
        const featuredListing = listings.filter(res => res.featured_listing)
        setFeaturedListings(featuredListing)
        setLoading(false)
    })
    .catch(err => console.log(err))
}
console.log(Listings)

const getHotDealsListings = () =>{
    const hotDeals = Listings.filter(listing => listing.special_deal)
    setHotDeals(hotDeals)
    setFeaturedListings([])
}

const getFeaturedListings = () => {
    const featuredListing = Listings.filter(listing => listing.featured_listing)
    setFeaturedListings(featuredListing)
    setHotDeals([])
}


    
useEffect(()=>{
    fetchListings()
},[])

    return (
        <div className="home">
            <div className="hero">
                <Header />
                <div className="hero_content">
                    <div className="logo">
                        <h1>HomeSp<span className="logo_inner">o</span>t</h1>
                    </div>
                    <div className="hero_txt">
                        <p>Find the best Listings in Nigeria</p>
                    </div>
                    <div className="search_input">
                        <input type="search" name="search" placeholder="Search for listings" />
                        <PageviewIcon/>
                    </div>
                </div>
            </div>
            <div className="listing_form"><ListingForm/></div>
            <div className="deals container">
                <div className="row">
                    <h2 style = { featuredListings.length === 0 ? {color: '#a09c9c'} : {color: 'rgba(250, 19, 58, 0.8)'}} onClick = { getFeaturedListings }>Featured Listings</h2>
                    <h2 style = { hotDeals.length === 0 ? {color: '#a09c9c'} : {color: 'rgba(250, 19, 58, 0.8)'}} onClick = { getHotDealsListings }>Hot Deals</h2>
                </div>
            </div>
            <div className="listings container">
                <div className="listing_row">
                    {!!loading ? <Loading/> : featuredListings.map((Listing) =>{
                        const {sale_type, title, main_image, address, price, city, home_type, state, id} = Listing
                        return (
                        
                            <Card sale_type ={sale_type} 
                            img_url = {main_image} home_type = {home_type} 
                            address ={address} id = { id }
                            price = {price.toLocaleString()} title = {title}
                            location = {city +" "+ state} key = {id} />
                        )
                    })}

                    { hotDeals.length === -1 ? <Loading/> : hotDeals.map((Listing) =>{
                        const {sale_type, title, main_image, address, price, city, home_type, state, id} = Listing
                        return (
                            <Card sale_type ={sale_type} 
                            img_url = {main_image} home_type = {home_type} 
                            address ={address} id = { id }
                            price = {price.toLocaleString()} title = {title}
                            location = {city +" "+ state} key ={id}/>
                        )
                    })}
                        
                </div>
            </div>
            <div className="featured_brand">
                <div className="featured_text">
                    <h3>We've been featured in</h3>
                    <div className="line"></div>
                </div>
            <ul className="press-links">
                    <li>
                        <a href="http://www.forbes.com/sites/mfonobongnsehe/2015/02/05/30-most-promising-young-entrepreneurs-in-africa-2015/3/" rel="noreferrer" target="_blank">
                            <img src="data:image/png;base64,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" alt="Feature in BBC News"/>
                            <span className="visibility-hidden">Homespot Feature in BBC News</span>
                        </a>
                    </li>
                    <li className="last">
                        <a href="https://www.newsweek.com/2014/05/30/money-move-251883.html" rel="noreferrer" target="_blank">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7A3JZkI9hR6giAxG3rfCsnW89tDyHobHnw&usqp=CAU" alt=" Feature in Forbes News" />
                            <span className="visibility-hidden">Homespot Feature in Forbes News</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://itweb.africa/content/mQwkoq6Kxnlv3r9A" rel="noreferrer"  target="_blank">
                            <img src="https://www.webafrica.co.za/blog/wp-content/uploads/2017/09/logo_new.png" alt="Feature in ITWeb Africa News"/>
                            <span className="visibility-hidden">HomeSpot Feature in ITWeb Africa News</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://itweb.africa/content/mQwkoq6Kxnlv3r9A" rel="noreferrer" target="_blank">
                            <img src="https://mk0resourcesechfwobs.kinstacdn.com/wp-content/uploads/2020/07/newsweek-logo-black.png" alt=" Feature in Newsweek" />
                            <span className="visibility-hidden">HomeSpot Feature in Newsweek</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="hotel-owners p-3 text-center">
            <div className="container">
                <h2 className="h2">Get More Sales & Rents  for Your Listings</h2>
                <p>Find out why over 12,997 home agents trust HomeSpot</p>
               {account_type === "Agent" ? 
               <Button variant = 'contained' color='secondary'><Link to ="/addlisting">Add Your Listing</Link></Button>
            : <Button variant = 'contained' color='secondary'><Link to ="/authpage">Become an Agent</Link></Button> }
            </div>
        </div>
            <Footer/>
        </div>
    )
}

export default Homepage
