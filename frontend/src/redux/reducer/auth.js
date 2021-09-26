import * as type from '../actions/actionTypes'

export const initialState = {
    token: null,
    email: null,
    account_type: null,
    full_name:null,
    userId: null,
    error: null,
    isAuthenticated: false,
    loading: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case type.AUTH_REQUEST:
            return {
                ...state
            }
        case type.AUTH_SUCCESS:
            return {
                ...state,
                token: action.user.token,
                email: action.user.email,
                account_type: action.user.account_type,
                full_name: action.user.full_name,
                userId: action.user,
                isAuthenticated: true,
                error: null,
                loading: false   
            }
        

        case type.AUTH_FAIL:
            return {
                token: null,
                email: null,
                account_type:null,
                full_name:null,
                userId: null,
                error: action.error,
                loading: false,
                isAuthenticated: false
            }
        default: return state
    }
}
export default authReducer
