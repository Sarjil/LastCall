import {connect} from 'react-redux'
import {createBeer} from '../../actions/beer_actions'
import {fetchBreweries} from '../../actions/brewery_action'
import {deleteSessionErrors} from '../../actions/session_actions'
import AddBeerForm from './add_beer_form'

const msp = state => {
    return{
        
        breweries: Object.values(state.entities.breweries),
         
    }
    
}

const mdp = dispatch => ({
    createBeer: beer => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    deleteSessionErrors: () => dispatch(deleteSessionErrors())
})

export default connect(msp,mdp)(AddBeerForm); 