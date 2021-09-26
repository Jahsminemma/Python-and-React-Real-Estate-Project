import React from 'react'
import './css/footer.css'
import { Link }from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <h2>HomeSp<span style={{color:"white"}}>o</span>t</h2>
            </div>
            <div className="flex">
                <div className="about">
                    <h3>About HomeSpot</h3>
                    <p className="large-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum consequatur? 
                        Amet voluptatum libero minus distinctio iste! Molestiae, amet cupiditate!
                    </p>
                </div>
                <div className="newsletter">
                    <h3>Subscribe to our newsletter</h3>
                    <form >
                        <input placeholder="Enter your email address" type="text"/>
                        <button type="submit">Submit</button> 
                    </form>
                    <div className="social-links">
                        <h3>follow us:</h3>
                        <ul className="links">
                            <li><Link to='#'><FacebookIcon/></Link></li>
                            <li><Link to='#'><InstagramIcon/></Link></li>
                            <li><Link to='#'><TwitterIcon/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-text">
                <p>Copyright 2020 All right reserved | <Link to="#"> HomeSpot inc</Link></p>
            </div>
        </div>
        
 )
}

export default Footer
