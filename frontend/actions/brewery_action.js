import * as BreweryUtil from '../util/brewery_util'

export const RECEIVE_BREWERY = "RECEIVE_BREWERY"; 
export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";

const receiveBrewery = brewery => ({
    type: RECEIVE_BREWERY,
    brewery
})

const receiveBreweries = breweries => ({
    type: RECEIVE_BREWERIES,
    breweries
})

export const fetchBrewery = breweryId => dispatch => (
    BreweryUtil.fetchBrewery(breweryId).then(brewery => dispatch(receiveBrewery(brewery)))
)

export const fetchBreweries = () => dispatch => (
    BreweryUtil.fetchBreweries().then(breweries => dispatch(receiveBreweries(breweries)))
)