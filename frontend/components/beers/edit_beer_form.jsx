import React from 'react'

class EditBeerForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.beer;
    }w

    componentDidMount(){
        this.props.fetchBeer(this.props.match.params.beerId)
        .then(beer => {this.setState({beer: beer.beer.beer.beer})
        }); 
        
        this.props.fetchBreweries()
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const history = this.props.history; 
        this.props.updateBeer(this.state).then((beer) => { history.push(`/beers/${beer.beer.beer.id}`) });

    }

    render() {
        const allBreweries = this.props.breweries.map(brewery => {
            return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
        })

        // const beerErrors = this.props.errors;
        // const showError = Boolean(beerErrors) && beerErrors.length > 0 ? "show-error" : "";
        // const showErrors = beerErrors.map(error => {
        //     return <li key={error} className="error-li">{error}</li>
        // })  
          
        return (
            <div className="beer-form-outer">
                 
                <form className="beer-form" onSubmit={this.handleSubmit}>

                    <div>
                        <h2 className="beer-form-header">Edit Beer</h2>
                        <p className="beer-form-sub-header">See something that needs some fixing? Edit it here! </p>
                    </div>
                    
                    <label className="beer-inputs beer-name"> Beer Name
                    <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>

                    <label className="beer-inputs beer-brewery"> Brewery
                    <select value={this.state.brewery_id} onChange={this.update('brewery_id')}>
                            <option selected="true" >Please Select A Brewery</option>
                            {allBreweries}
                        </select>
                    </label>

                    <label className="beer-inputs beer-abv"> ABV
                    <input type="number" value={this.state.abv} onChange={this.update('abv')} />
                    </label>

                    <label className="beer-inputs beer-style"> Style
                    <input type="text" value={this.state.style} onChange={this.update('style')} />
                    </label>

                    <label className="beer-inputs beer-descriptions"> Description
                    <textarea value={this.state.description} onChange={this.update('description')} />
                    </label>


                    <button type="submit" className="session-btn add-beer-btn">Update Beer</button>
                </form>

            </div>
        )
    }
}

export default EditBeerForm; 