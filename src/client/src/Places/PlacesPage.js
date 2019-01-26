import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as placesActions from '../actions/placesActions';
import Typography from '@material-ui/core/Typography';
import PlacesList from './PlacesList';
import PlaceForm from './PlaceForm';


class PlacesPage extends Component {
    constructor(props) {
        super(props)
        this.addPlace = this.addPlace.bind(this);
        this.deletePlace = this.deletePlace.bind(this);
    }

    state = {
        places: [],
        addPlaceForm: false
    }
    componentDidMount() {
        this.props.placesActions.fetchPlaces();
        // this.getPlaces()
        //     .then(res => this.setState({ places: res }))
        //     .catch(err => console.log(err));
    }

    getPlaces = async () => {
        const response = await fetch('/api/places');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    }

    addPlace(place, e) {
        const newPlace = { name: place.name, imageUrl: place.imageUrl, addresses: [{ address: place.street, city: place.city, state: place.state, zipCode: place.zipCode }] }
        const places = this.state.places;
        this.handleFormClose();
        return fetch('/api/places', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlace)
        })
            .then(response => response.json())
            .then(obj => {
                if (obj.place) {
                    places.push(obj.place);
                    this.setState({ places });
                }
                else
                    throw Error(obj.message);
            })
            .catch(error => console.error(error));
    }

    deletePlace(name, e) {
        const places = this.state.places;
        const index = places.map(p => p.name).indexOf(name);
        return fetch(`/api/places/${name}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(obj => {
                if (obj.place) {
                    places.splice(index, 1);
                    this.setState({ places });
                }
                else
                    throw Error(obj.message);
            })
            .catch(error => console.error(error));
    }

    editPlace(place, e) {

    }

    handleFormOpen = () => {
        this.setState({ addPlaceForm: true });
    };

    handleFormClose = () => {
        this.setState({ addPlaceForm: false });
    };

    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Typography variant="h4" gutterBottom component="h2">
                    Places
                </Typography>
                <PlaceForm
                    onSaveClick={this.addPlace}
                    open={this.state.addPlaceForm}
                    handleFormOpen={this.handleFormOpen}
                    handleFormClose={this.handleFormClose} />
                <PlacesList
                    places={this.state.places}
                    onDeleteClick={this.deletePlace} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        placesActions: bindActionCreators(placesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);