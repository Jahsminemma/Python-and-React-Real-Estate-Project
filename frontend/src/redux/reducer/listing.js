import { SEARCH_LISTING_START, SET_SEARCH_LISTING_FAIL, SET_SEARCH_LISTING_SUCCESS } from "../actions/actionTypes"
const initialState = {
    loading : true,
    listing : [],
    error: ""
}


const listingReducer = (state= initialState, action) => {
    console.log(action)
    switch(action.type){
        case SEARCH_LISTING_START:
            return ({
                ...state
            })
        case SET_SEARCH_LISTING_SUCCESS:
            return ({
                ...state,
                loading:false,
                listing: action.listing,
                error:""
            })
            
        case SET_SEARCH_LISTING_FAIL:
            return ({
                ...state,
                loading:true,
                listing:[],
                error: action.error
            })

        default:
            return state
    }
}

export default listingReducer