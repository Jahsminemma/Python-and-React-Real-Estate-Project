import React from 'react'
import { useHistory } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import "./css/Card.css"


const Card = ({sale_type, img_url, home_type, address, price, title, location, id}) => {

    const history = useHistory()
    const viewListing = () =>{
        if (id)
            history.push(`/listing/${id}`)
    }
    

    return (
        <div className="listing_card" key = {id}>
            <div className="card_row">
                <div className="img">
                    <img src={img_url} alt="" />
                </div>
                <div className="listing_info">
                    <p className="types">
                        <small >{sale_type}</small>
                        <small className="home_type">{home_type}</small>
                    </p>
                    <h2 className ='card__listinginfo__title'>{title.length < 30 ? title : title.slice(0, 29) + "..."}</h2>
                    <p>{address}</p>
                    <h3>N{price}</h3>
                    <div className="row">
                        <LocationOnIcon color="secondary" variant="contained"/>
                        {location}
                        <button onClick = {viewListing} className = "card_btn">View details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
