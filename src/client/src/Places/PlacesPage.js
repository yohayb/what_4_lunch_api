import React, { Component } from 'react';
import PlacesList from './PlacesList';
class PlacesPage extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        places: []
      }
      componentDidMount() {
        this.getPlaces()
            .then(res => this.setState({ places: res }))
            .catch(err => console.log(err));
      }
    
      getPlaces = async () => {
        const response = await fetch('/api/places');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message);
        }
    
        return body;
      }

    render() {
        return (
            <div style={{margin:"5px"}}>
                <h2>Places</h2>
                <PlacesList places={this.state.places} />
            </div>
            );
    }
}

export default PlacesPage;