import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { setAlert } from '../redux/actions/actionTypes';
import Loader from 'react-loader-spinner';
import './css/Contact.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
            const body = JSON.stringify(formData)
        setLoading(true);
        console.log(body)
        axios.post('http://localhost:7000/api/contacts/', {
            "name":"Okonkwo Emmanuel",
            "email":"JAHS@gmail.com",
            "subject":"This start is",
            "message":"thiis siusi shsh yssh hsjiua"
            
            }, config)
        .then(res => {
            setAlert('Message Sent', 'success');
            setLoading(false);
            window.scrollTo(0, 0);
            console.log(res.data)
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
            setLoading(false);
            console.log(err)
            window.scrollTo(0, 0);
        })
    };

    return (
        <div className='contact'>
            <Helmet>
                <title>Realest Estate - Contact</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <div className="contact__header">
                <Header/>
            </div>
            <section className="form">
            <form className='contact__form'>
                <h1>Contact us</h1>
                <label className='contact__form__label' htmlFor='name'>Name*</label>
                <input 
                    className='contact__form__input' 
                    name='name' 
                    type='text' 
                    placeholder='Full Name' 
                    onChange={e => onChange(e)} 
                    value={name} 
                    required 
                />
                <label className='contact__form__label' htmlFor='email'>Email*</label>
                <input 
                    className='contact__form__input' 
                    name='email' 
                    type='email' 
                    placeholder='example@gmail.com' 
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
                <label className='contact__form__label' htmlFor='subject'>Subject*</label>
                <input 
                    className='contact__form__input' 
                    name='subject' 
                    type='text' 
                    placeholder='Buying Home' 
                    onChange={e => onChange(e)} 
                    value={subject} 
                    required 
                />
                <label className='contact__form__label' htmlFor='message'>Message</label>
                <textarea 
                    className='contact__form__textarea'
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder='Message'
                    onChange={e => onChange(e)} 
                    value={message} 
                />
                {loading ?
                    <div className='contact__form__loader'>
                        <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                        />
                    </div> :
                    <button onClick={onSubmit} className='contact__form__button' htmltype='submit'>Send</button>
                }
            </form>
            </section>
            <Footer/>
        </div>
    );
};

export default Contact;
