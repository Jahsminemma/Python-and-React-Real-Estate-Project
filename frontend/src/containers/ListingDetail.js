import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Button } from '@material-ui/core';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel'
import './css/ListingDetails.css'
import Loading from '../components/Loading';
import Footer from '../components/Footer';

const ListingDetail = (props) => {
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState(0);
    const token = useSelector(state => state.auth.token)
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const { id } = useParams()

const getDetailListing = () => {
    const config = {
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Token ${token}`
        }
    };
        axios.get(`http://localhost:7000/api/listings/${id}`, config)
        .then(res => {
            setListing(res.data)
            setPrice(numberWithCommas(res.data.price));
            setLoading(false)
        })
        .catch(err => {

        });
}


useEffect(() => {
    getDetailListing()
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}, [id])
console.log(listing)
    return (
        <div className='listingdetail'>
            <div className="header"> <Header/></div>
            {loading ? <div className="loading"><Loading/></div>  : <>
            <div className='listingdetail__breadcrumb'>
                <div className="row">
                     <p><Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {listing.title}</p>
                     <div className="agent">
                         <Button variant ="contained" color="secondary"><PersonPinIcon/><a href={"tel:234" + listing?.agent?.phone_number.slice(1, 11)}>Call agent</a></Button>
                     </div>
                </div>
            </div>
            <div className='listingdetail__header'>
                <h1 className='listingdetail__title'>{listing.title}</h1>
                <p className='listingdetail__location'> <LocationOnIcon color="secondary" variant="contained"/> {listing?.city}, {listing?.state}</p>
            </div>
            <div className='listingdetail__display'>
                <img className='listingdetail__display__image'src={listing?.main_image} alt='' />
            </div>
            <div className="listingdetail__info">
                <h2>Listing Details</h2>
                <h3 className="listingdetail__price">Price : N{price}</h3>
                <h3 className="listingdetail__agent__name">Agent name : {listing?.agent?.full_name}</h3>
                <div className="listingdetail__description">
                    <p>{listing.description}</p>
                </div>
            </div>
            <div className="row">
                <div className='col'>
                        <p className='listingdetail__list__item'>Home Type: <small>{listing?.home_type}</small> </p>
                        <p className='listingdetail__list__item'>Bedrooms:  <small>{listing?.bedrooms}</small></p>
                        <p className='listingdetail__list__item'>Bathrooms: <small>{listing?.bathrooms}</small></p>
                        <p className='listingdetail__list__item'>Square Feet: <small> {listing?.sqft}</small></p>
                </div>
                <div className='col'>
                        <p className='listingdetail__list__item'>Sale Type: <small>{listing?.sale_type}</small> </p>
                        <p className='listingdetail__list__item'>Address: <small>{listing?.address}</small></p>
                        <p className='listingdetail__list__item'>City: <small>{listing?.city}</small></p>
                        <p className='listingdetail__list__item'>State: <small> {listing?.state}</small></p>
                </div>
                <div className="agent_image col">
                    <img height = "100%" width ="100%" src={listing?.agent.profile_image} alt="" />
                </div>
            </div>
            <div className='Carousel container'>
                    <Carousel>
                        {listing?.listing_images.map(image =>{
                            return (
                                    <Carousel.Item>
                                    <img
                                    src={image}
                                    height = "400px"
                                    width ="100%"
                                    alt="First slide"
                                    />
                                    </Carousel.Item>
                        ) 
                        }) }
                    </Carousel>
                </div>
            </>}
            <Footer/>
        </div>
    );
};

export default ListingDetail;
