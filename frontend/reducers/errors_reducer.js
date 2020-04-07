import sessionErrors from './session_errors'
import {combineReducers} from 'redux'

export const errorsReducer = combineReducers({
    session: sessionErrors
});

export default errorsReducer; 
