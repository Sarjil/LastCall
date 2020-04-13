import sessionErrors from './session_errors'
import {combineReducers} from 'redux'
import beerErrorReducer from './beer_errors_reducer'

export const errorsReducer = combineReducers({
    session: sessionErrors,
    beer: beerErrorReducer
})

export default errorsReducer; 
