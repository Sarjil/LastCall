import React from 'react'; 

class AddCheckinForm extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { author_id: this.props.currentUser, beer_id: 0, body: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBreweries();
        this.props.fetchBeers(); 
    }

    update(field){
        return e => { 
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const history = this.props.history; 
        // debugger 
        this.props.createCheckin(this.state).then( () => {history.push(`/thepub/`)});
    }
    
    render(){

        const allBeers = Object.values(this.props.beers).map(beer => {
            return <option value={beer.id} key={beer.name}>{beer.name}</option>
        })
        // debugger 
        return(
            <div className="beer-form-outer">

                <form className="beer-form" onSubmit={this.handleSubmit}>

                    <div>
                        <h2 className="beer-form-header">Check In</h2>
                        <p className="beer-form-sub-header">Leave a review for your favorite beer/brewery!</p>
                    </div>

                    <label className="beer-inputs beer-brewery"> Beers
                    <select value={this.state.beer_id} onChange={this.update('beer_id')}>
                            <option value="Please" defaultValue="true" >Please Select A Beer</option>
                            {allBeers}
                        </select>
                    </label>

                    <label className="beer-inputs beer-descriptions"> Review
                    <textarea value={this.state.body} onChange={this.update('body')} />
                    </label>


                    <button type="submit" className="session-btn add-beer-btn">Check In!</button>

                </form>
            </div>
        )
    }

}

export default AddCheckinForm;