import * as BeerUtil from '../util/beer_util'

export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER"
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS"

const receiveBeer = beer =>({
    type: RECEIVE_BEER,
    beer
})

const receiveBeers = beers =>({
    type: RECEIVE_BEERS,
    beers
})

const receiveBeerErrors = errors =>({
    type: RECEIVE_BEER_ERRORS,
    errors
})


export default fetchBeer = (beerId) => dispatch =>(
    BeerUtil.fetchBeer(beerId).then(beer => receiveBeer(beer))
)

export default fetchBeers = () => dispatch =>(
    BeerUtil.fetchBeers().then(beers => receiveBeers(beers))
)

export default createBeer = (beer) => dispatch =>(
    BeerUtil.createBeer(beer).then(beer => receiveBeer(beer)),
    errors => (dispatch(receiveBeerErrors(errors.responseJSON)))
)

export default updateBeer = (beer) => dispatch =>(
    BeerUtil.updateBeer(beer).then(beer => receiveBeer(beer)),
    errors => (dispatch(receiveBeerErrors(errors.responseJSON)))
)