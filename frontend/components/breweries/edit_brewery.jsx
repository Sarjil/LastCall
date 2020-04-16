import React from 'react';

class EditBreweryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.brewery
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBrewery(this.props.match.params.breweryId)
        .then(brewery => {this.setState({brewery: brewery.brewery.brewery})})
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const history = this.props.history;
        this.props.updateBrewery(this.state).then((brewery) => { history.push(`/breweries/${brewery.brewery.brewery.id}`) });

    }


    render() {

        return (
            <div className="beer-form-outer">

                <form className="beer-form" onSubmit={this.handleSubmit}>

                    <div>
                        <h2 className="beer-form-header">Edit Brewery</h2>
                        <p className="beer-form-sub-header">See something that needs some fixin? Edit here!</p>
                    </div>

                    <label className="beer-inputs beer-name"> Brewery Name
                        <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>

                    <label className="beer-inputs beer-style"> Location
                        <input type="text" value={this.state.location} onChange={this.update('location')} />
                    </label>

                    <label className="beer-inputs beer-descriptions"> Description
                       <textarea value={this.state.description} onChange={this.update('description')} />
                    </label>


                    <button type="submit" className="session-btn add-beer-btn">Edit Brewery</button>
                </form>

            </div>
        )
    }
}


export default EditBreweryForm; 