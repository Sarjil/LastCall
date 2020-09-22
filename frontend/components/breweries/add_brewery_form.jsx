import React from 'react';

class AddBreweryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"", description:"", location:""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchBrewery(this.props.match.params.breweryId)
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const history = this.props.history;
        this.props.createBrewery(this.state).then((brewery) => { history.push(`/breweries/${brewery.brewery.brewery.id}`) });

    }


    render(){

        return (
            <div className="beer-form-outer">

                <form className="beer-form" onSubmit={this.handleSubmit}>

                    <div>
                        <h2 className="beer-form-header">Add New Brewery!</h2>
                        <p className="beer-form-sub-header">Don't see your brewery listed? Add it here!</p>
                    </div>

                    <label className="beer-inputs beer-name"> Brewery Name     
                        <input type="text" value={this.state.name} onChange={this.update('name')} className="input-text"  placeholder = "Brewery Name" />
                    </label>

                    <label className="beer-inputs beer-style"> Location
                        <input type="text" value={this.state.location} onChange={this.update('location')} className="input-text" placeholder = "Location" />
                    </label>

                    <label className="beer-inputs beer-descriptions"> Description
                       <textarea value={this.state.description} onChange={this.update('description')} className="input-text" placeholder = "Description" />
                    </label>


                    <button type="submit" className="session-btn add-beer-btn">Add New Brewery</button>
                </form>

            </div>
        )
    }
}


export default AddBreweryForm; 