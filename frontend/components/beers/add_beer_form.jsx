import React from 'react';


class AddBeerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: "", description: "", abv: "", style: "", breweryId: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchBreweries(); 
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.createBeer(this.state);
    }

    render(){
        const allBreweries = this.props.breweries.map(brewery => {
            return <option value={brewery.id} key={brewery.name}>{brewery.name}</option>
        })
    
        return(
            <div className="beer-form-outer">

            <form className="beer-form" onSubmit={this.handleSubmit}>

                <div>
                    <h2 className="beer-form-header">Add New Beer</h2>
                    <p className="beer-form-sub-header">Sorry we don't have what you're looking for. Fill out the form to add a new beer!</p>
                </div>

                <label className="beer-inputs beer-name"> Beer Name
                    <input type="text" value={this.state.name} onChange={this.update('name')} />
                </label>

                <label className="beer-inputs beer-brewery"> Brewery
                    <select value={this.state.breweryId} onChange={this.update('breweryId')}>
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


            <button type="submit" className="session-btn add-beer-btn">Add New Beer</button>
            </form>

            </div>
        )
    }
}

export default AddBeerForm; 