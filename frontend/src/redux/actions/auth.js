import axios from 'axios'
import {
        authRequest,
        authSuccess,
        authFail,
        setAlert,
        logout,
        } from './actionTypes'


export const checkAuthTimeout = expirationTime => {
    return dispatch => {
    setTimeout(() => {
        dispatch(logout());
    }, expirationTime * 1000);
    };
};


export const login = (email, password) => dispatch => {
  
   dispatch(authRequest)

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({email, password})
    axios.post("http://localhost:7000/rest-auth/login/", body, config)
    .then(res => {
      const user = {
          token: res.data.key,
          email,
          isAuthenticated: true,
          userId: res.data.user,
          account_type: res.data.user_type.account_type,
          full_name: res.data.user_type.full_name,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        } 
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSuccess(user))
        dispatch(checkAuthTimeout(3600));
        dispatch(setAlert('Authenticated successfully', 'success'))

    })
    .catch(error =>{
        dispatch(authFail(error))
        if(error.response.request.status === 400)
          dispatch(setAlert("Authentication Error: Email or Password is incorrect ", 'error'))

        else return dispatch(setAlert(" An error occured", "error"))
    }) 
}

export const signup = (user) => {
        return dispatch => {
            dispatch(authRequest())
        
            const config = {
              headers: {
                  'Content-Type': 'application/json',
              }
            };

            axios.post("http://localhost:7000/rest-auth/registration/", user, config)
            .then(res => {
              
                const user = {
                    token: res.data.key,
                    userId: res.data.user,
                    account_type: res.data.user_type.account_type,
                    expirationDate: new Date(new Date().getTime() + 3600 * 1000)
                };

                localStorage.setItem('user', JSON.stringify(user))
                dispatch(authSuccess(user))
                dispatch(checkAuthTimeout)
                dispatch(setAlert("Authrnticated successfully", "success"))
                setTimeout(()=>{
                 window.location.reload()
                }, 3000)
            })
            .catch(error => {
                dispatch(authFail(error))
                if(error.response.request.status === 400){
                  dispatch(setAlert('A user is already registered with this e-mail address.','error'))
                }
              else return dispatch(setAlert(" An error occured", "error")) 
            })
    }
}

export const signout = () =>{
  return dispatch =>{
    dispatch(logout())
    window.location.reload()
  }
}

export const authCheckState = () => {
    return dispatch => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user === undefined || user === null) {
        dispatch(logout());
      } else {
        const expirationDate = new Date(user.expirationDate);
        if (expirationDate <= new Date()) {
          dispatch(logout());
        } else {
          dispatch(authSuccess(user));
          dispatch(
            checkAuthTimeout(
              (expirationDate.getTime() - new Date().getTime()) / 1000
            )
          );
        }
      }
    };
  };

