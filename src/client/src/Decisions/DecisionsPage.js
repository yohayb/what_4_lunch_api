import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDecisions } from '../actions';
import Typography from '@material-ui/core/Typography';
import DecisionsList from './DecisionsList';


class DecisionsPage extends Component {

    componentDidMount() {
        this.props.getDecisions();
    }

    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Typography variant="h4" gutterBottom component="h2">
                    Decisions
                </Typography>
                <DecisionsList decisions={this.props.decisions} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        decisions: state.decisionsReducer.decisions,
        fetching: state.decisionsReducer.fetching,
        error: state.decisionsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDecisions: () => dispatch(getDecisions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecisionsPage);