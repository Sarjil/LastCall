import React from 'react';


class AddBeerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: "", description: "", abv: "", style: "", brewery_id: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchBreweries(); 
    }
    
    // componentWillUnmount(){
    //     this.props.deleteSessionErorrs();
    // }

    update(field){
        // debugger
        const that = this;
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }
    
    handleSubmit(e){
        // debugger
        e.preventDefault(); 
        const history = this.props.history; 
        this.props.createBeer(this.state).then( (beer) => {history.push(`/beers/${beer.beer.beer.id}`)});

    }
    
    render(){
        const allBreweries = this.props.breweries.map(brewery => {
            return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
        })
        
        // const beerErrors = this.props.errors;
        // const showError = Boolean(beerErrors) && beerErrors.length > 0 ? "show-error" : "";
        // const showErrors = beerErrors.map(error => {
        //     return <li key={error} className="error-li">{error}</li>
        // })  

        return( 
            <div className="beer-form-outer">

            <form className="beer-form" onSubmit={this.handleSubmit}>

                <div>
                    <h2 className="beer-form-header">Add New Beer</h2>
                    <p className="beer-form-sub-header">Sorry we don't have what you're looking for. Fill out the form to add a new beer!</p>
                </div>
                    {/* <ul className={`errors-list ${showError}`}> {showErrors} </ul> */}
                <label className="beer-inputs beer-name"> Beer Name
                    <input type="text" value={this.state.name} onChange={this.update('name')} className="input-text" />
                </label>

                <label className="beer-inputs beer-brewery"> Brewery
                    <select value={this.state.brewery_id} onChange={this.update('brewery_id')} >
                    <option value="Please" selected="true" >Please Select A Brewery</option>
                    {allBreweries}    
                    </select> 
                </label>

                <label className="beer-inputs beer-abv"> ABV
                    <input type="number" step="0.1" min="0" max="100" value={this.state.abv} onChange={this.update('abv')} className="input-text"/>
                </label>

                <label className="beer-inputs beer-style"> Style
                    <input type="text" value={this.state.style} onChange={this.update('style')} className="input-text"/>
                </label>

                <label className="beer-inputs beer-descriptions"> Description
                    <textarea value={this.state.description} onChange={this.update('description')} className="input-text" />
                </label>


            <button type="submit" className="session-btn add-beer-btn">Add New Beer</button>
                
                </form>
            </div>
        )
    }
}

export default AddBeerForm; 