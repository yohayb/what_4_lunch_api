import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { getPeople, deletePeople, addPeople } from '../actions';
import Person from './Person';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class PeoplePage extends Component {
    state = {
        person: ''
    }

    componentDidMount() {
        this.props.getPeople();
    }
    onChange = (e) => {
        const person = e.target.value;
        this.setState({ person: person });
    }
    onSave = () => {
        const person = { name: this.state.person };
        if (this.state.person.length > 0)
            this.props.addPerson(person);
    }

    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Typography variant="h4" gutterBottom component="h2">
                    People
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    helperText={this.props.error}
                    error={this.props.error}
                    onChange={this.onChange}
                />
                <Fab color="primary" aria-label="Add" className={this.props.classes.fab}>
                    <AddIcon onClick={this.onSave} />
                </Fab>
                {this.props.people.map(p => <Person key={p.name} deletePerson={this.props.deletePerson} person={p} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.peopleReducer.people,
        fetching: state.peopleReducer.fetching,
        error: state.peopleReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeople: () => dispatch(getPeople()),
        deletePerson: (name) => dispatch(deletePeople(name)),
        addPerson: (name) => dispatch(addPeople(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PeoplePage));