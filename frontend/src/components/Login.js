import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Alerts from './Alert';

 const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


  const handleSubmit = (e) =>{
     e.preventDefault()
     dispatch(login(email, password))
  }
 
  if (!!isAuthenticated)
    return <Redirect to='/'/>

  return (
    <div className="form container mt-4">
        <Alerts/>
        <form onSubmit = {handleSubmit} className="card p-3 rounded" >
        <div className="form__group container">
        <div class="input-group input-group-lg mb-5">
        <span className="input-group-text" id="basic-addon2">Email</span>
                <input type="email"
                    class="form-control"
                    placeholder="Enter your email address"
                    aria-label="email"
                    name="email"
                    id="email"
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    aria-describedby="basic-addon2"
                />
                 <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div class="input-group input-group-lg mb-5">
              <span className="input-group-text" id="basic-addon2">Password</span>
                <input type="password"
                    name="password"
                    placeholder = "Password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                    class="form-control"
                    required
                    id="exampleInputPassword1"/>
            </div>
            <div className="button text-right">
             <Button type="submit" color ="secondary" variant="contained">Submit</Button>
            </div>       
           </div>
        </form>
    </div>
        
  );
}

export default Login