import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './css/ListingForm.css'
import Button from '@material-ui/core/Button'
import { searchFail, searchSuccess , searchStart} from '../redux/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ListingForm = () => {
    const [formData, setFormData] = useState({
        sale_type: 'For Sale',
        price: 'N0+',
        bedrooms: '0+',
        home_type: 'House',
        bathrooms: '0+',
        sqft: '1000+',
    });

    const {sale_type, sqft, price, bedrooms, has_photos, home_type, bathrooms} = formData;

    const [loading, setLoading] = useState(false);
    const [searchListings, setSearchListings] = useState([])
    const dispatch = useDispatch()
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const history = useHistory()
    const listing = useSelector(state => state.listing.listing)
    const [empty, setEmpty] = useState(false)

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(searchStart())
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        setLoading(true);
        await axios.post(`http://localhost:7000/api/listings/search`, { sale_type, sqft, price, bedrooms, has_photos, home_type, bathrooms }, config)
        .then(res => {
            setLoading(false);
            dispatch(searchSuccess(res.data))
            setSearchListings(res.data)
            window.scrollTo(0,0)
        })
        .catch(err => {
            setLoading(false);
            dispatch(searchFail(err))
        })

        if(setSearchListings.length > 0){
            history.push('/search')
        }else{
            setEmpty(true)
        }
    }
    
    
   

    return (
        <form className='listingform'>
            <div className='row'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sale_type'>Sale or Rent</label>
                        <p>
                        <select className='listingform__select' name='sale_type' onChange={e => onChange(e)} value={sale_type}>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                        </p>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sqft'>Sqft</label>
                        <p><select className='listingform__select' name='sqft' onChange={e => onChange(e)} value={sqft}>
                            <option>1000+</option>
                            <option>1200+</option>
                            <option>1500+</option>
                            <option>2000+</option>
                            <option>Any</option>
                        </select>
                        </p>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='price'>Minimum Price</label>
                        <p>
                        <select className='listingform__select' name='price' onChange={e => onChange(e)} value={price}>
                            <option>N0+</option>
                            <option>N200,000+</option>
                            <option>N400,000+</option>
                            <option>N600,000+</option>
                            <option>N800,000+</option>
                            <option>N1,000,000+</option>
                            <option>N1,200,000+</option>
                            <option>N1,500,000+</option>
                            <option>Any</option>
                        </select>
                        </p>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='bedrooms'>Bedrooms</label>
                        <p>
                        <select className='listingform__select' name='bedrooms' onChange={e => onChange(e)} value={bedrooms}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                        </p>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='home_type'>Home Type</label>
                        <p>
                        <select className='listingform__select' name='home_type' onChange={e => onChange(e)} value={home_type}>
                            <option>House</option>
                            <option>Condo</option>
                            <option>Townhouse</option>
                        </select>
                        </p>
                </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='bathrooms'>Baths</label>
                        <p>
                        <select className='listingform__select' name='bathrooms' onChange={e => onChange(e)} value={bathrooms}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                        </p>
                    </div>
                    {loading ?
                        <div className='listingform__loader'>
                            <Loader
                                type="Oval"
                                color="#424242"
                                height={50}
                                width={50}
                            />
                        </div> : 
                        <div className="srchBtn">
                        <Button onClick={onSubmit}  variant="contained" color="secondary">Search</Button>
                        </div>
                    }
                    { empty ? <>Soory No Listing with the selected details</>:""}
                </div>
        </form>
    );
};



export default ListingForm;