
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './containers/Homepage';
import About from './containers/About'
import Contact from './containers/Contact'
import Listings from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
import { PrivateRoute } from './components/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { authCheckState } from './redux/actions/auth';
import Search from './containers/Search';
import AuthPage from './containers/AuthPage';
import AddListing from './containers/AddListing';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const account_type = useSelector(state => state.auth.account_type)


  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(authCheckState())
  }, [])
  

  return (
    <div className = "app">
      <Router>
        <Switch>
          <Route exact path="/" component = {Homepage}/>
          <Route exact path="/about" component = {About}/>
          <Route exact path="/contact" component = {Contact}/>
          <Route exact path="/listings" component = {Listings}/>
          <Route exact path ="/search" component = { Search } />
          <Route exact path="/authPage" component = {AuthPage}/>
          {account_type ==="Agent" && <PrivateRoute isAuthenticated={isAuthenticated} exact path="/addlisting" component = {AddListing}/>}
          <PrivateRoute isAuthenticated = { isAuthenticated } exact path="/listing/:id" component = {ListingDetail}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

