import React from 'react'

class BreweryBeerIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBrewery(this.props.params.breweryId)
    }
}