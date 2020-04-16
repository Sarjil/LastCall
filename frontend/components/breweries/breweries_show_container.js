import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchBrewery} from '../../actions/brewery_action'
import {fetchBeers} from '../../actions/beer_actions'
import BreweryShow from './breweries_show';

const msp = (state,ownProps) => {
    
    return{
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beers: state.entities.beers
    }
}

const mdp = dispatch => ({
    fetchBrewery: breweryId => dispatch(fetchBrewery(breweryId)),
    fetchBeers: () => dispatch(fetchBeers())  

})

export default withRouter(connect(msp,mdp)(BreweryShow))