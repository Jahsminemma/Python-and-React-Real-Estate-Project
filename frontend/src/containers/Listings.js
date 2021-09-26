import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import Card from '../components/Card'
import Pagination from '@material-ui/lab/Pagination'
import "./css/Listings.css"
import Footer from '../components/Footer'

const Listings = () => {
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)

    const [listingPerPage, setListingPerPage] = useState(3)
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)

    const fetchListings = () => {
        axios.get(`http://localhost:7000/api/listings/?page=${page}`)
        .then(result => { 
            setListings(result.data.results)
            setCount(result.data.count)
            window.scrollTo(0,0)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchListings()

    }, [page])
    return (
            <div className="listing">
            <div className="listing_header">
                <div className="header__container"> <Header/></div>
                <div class="listing-breadcrumb-nav d-flex hidden-xs">
                    <ul className="container-fluid breadcrumb listing-breadcrumb">
                        <li><Link className="breadcrumb_link" to='/'>Home</Link></li>
                        <li className="active">Listings</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="page_description">
                <h2 className="text-secondary">Discover your desired home</h2>
                <p className="text-grey">With complete and perfect source of homes for sell and rent</p>
                </div>
                <div className="listings_container">
                {loading ?
                    <div className='contact__form__loader text-center pt-5'>
                        <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                        />
                    </div>:   
                <>  
                <div className="flex listing_row">
                {listings && listings.map(listing =>{
                     const {sale_type, title, main_image, address, price, city, home_type, state, id} = listing
                     return (
                     
                         <Card sale_type ={sale_type} 
                         img_url = {main_image} home_type = {home_type} 
                         address ={address} id = { id }
                         price = {price.toLocaleString()} title = {title}
                         location = {city +" "+ state} key = {id} />
                     )
                })
                }
                </div>   
               {count > listings.length && 
                    <div className="pagination mt-5">
                        <Pagination
                            count={count / listings.length}
                            defaultPage = {page}
                            onChange = {(event, value) => setPage(value)}
                            color="secondary" />
                    </div>
                    
                }
                </>
                }
                </div>
            </div>
            <div className="listing_footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Listings
