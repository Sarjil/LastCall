import * as BreweryUtil from '../util/brewery_util'

export const RECEIVE_BREWERY = "RECEIVE_BREWERY"; 
export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";
// export const RECEIVE_BREWERY_ERRORS = "RECEIEVE_BREWERY_ERRORS"

const receiveBrewery = brewery => ({
    type: RECEIVE_BREWERY,
    brewery
})

const receiveBreweries = breweries => ({
    type: RECEIVE_BREWERIES,
    breweries
})

// const receiveBreweryErrors = errors =>({
//     type: RECEIVE_BREWERY_ERRORS,
//     errors 
// })

export const fetchBrewery = breweryId => dispatch => (
    BreweryUtil.fetchBrewery(breweryId).then(brewery => dispatch(receiveBrewery(brewery)))
)

export const fetchBreweries = () => dispatch => (
    BreweryUtil.fetchBreweries().then(breweries => dispatch(receiveBreweries(breweries)))
)

export const createBrewery = (brewery) => dispatch =>(
    BreweryUtil.createBrewery(brewery).then(
        brewery => dispatch(receiveBrewery(brewery)))
        // errors => dispatch(receiveBreweryErrors(errors.responseJSON)))
    )


export const updateBrewery = (brewery) => dispatch => (
    BreweryUtil.updateBrewery(brewery).then(
        brewery => dispatch(receiveBrewery(brewery)))
        
)