import { combineReducers } from 'redux'
import alertReducer from './alert'
import authReducer from './auth'
import listingReducer from './listing'

const rootReducer = combineReducers({auth: authReducer, alert: alertReducer, listing: listingReducer})
export default rootReducer