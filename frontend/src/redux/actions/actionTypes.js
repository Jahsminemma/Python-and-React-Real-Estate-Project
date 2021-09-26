import { v4 as uuid } from 'uuid';
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const SET_ALERT = 'SET_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const SET_SEARCH_LISTING_SUCCESS = 'SET_SEARCH_LISTING_SUCCESS'
export const SET_SEARCH_LISTING_FAIL = 'SET_SEARCH_LISTING_FAIL'
export const SEARCH_LISTING_START = 'SEARCH_LISTING_START'




export const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}

export const authSuccess = (user) =>{
    return {
        type: AUTH_SUCCESS,
         user
    }
}

export const authFail = (error)=>{
    return {
        type: AUTH_FAIL,
        error
    }
}

export const logout = () => {
    localStorage.removeItem("user");
    return {
      type: AUTH_LOGOUT
    };
  };


  export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}

export const searchStart = () => dispatch => {
    dispatch({
        type: SEARCH_LISTING_START
    })
}

export const searchSuccess = (listing)=> dispatch=>{

    dispatch({
        type: SET_SEARCH_LISTING_SUCCESS,
        listing
    })
}

export const searchFail = (error)=> dispatch=>{

    dispatch({
        type: SET_SEARCH_LISTING_FAIL,
        error
    })
}




