import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as types from '../actions/actionTypes';
import Typography from '@material-ui/core/Typography';
import PlacesList from './PlacesList';
import PlaceForm from './PlaceForm';


class PlacesPage extends Component {

    componentDidMount() {
        this.props.getPlaces();
    }

    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Typography variant="h4" gutterBottom component="h2">
                    Places
                </Typography>
                <PlaceForm />
                <PlacesList places={this.props.places} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.placesReducer.places,
        fetching: state.placesReducer.fetching,
        error: state.placesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaces: () => dispatch({ type: types.GET_PLACES_REQUEST }),//bindActionCreators(placesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);