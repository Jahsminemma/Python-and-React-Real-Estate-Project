import React from 'react';
import { Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({ component: Component,  isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render = {props => !isAuthenticated ? (<Redirect to='/authPage' />) : (<Component {...props} />)}
    />
);