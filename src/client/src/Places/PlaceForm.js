import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addPlace } from '../actions';
const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class PlaceForm extends React.Component {
    state = {
        addPlaceForm: false,
        errors: { name: '', street: '', city: '', state: '', zipCode: '', imageUrl: '' },
        isSaveDisabled: true,
    }

    onRequiredTextFieldChange = (e) => {
        let field = {}
        const { target } = e;
        field[e.target.id] = e.target.value;
        this.setState({ ...field }, () => this.validateRequiredField(target));
    }

    onZipCodeFieldChange = (e) => {
        let field = {}
        const { target } = e;
        field[e.target.id] = e.target.value;
        this.setState({ ...field }, () => this.validateZipCode(target));
    }

    validateZipCode = (field) => {
        if (field.value.length === 0)
            return this.validateRequiredField(field);
        const isValidZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(field.value);
        if (!isValidZipCode)
            this.setState({ errors: { ...this.state.errors, [field.id]: 'Invalid zip code.' } }, () => this.disableSaveButton());
        else
            this.setState({ errors: { ...this.state.errors, [field.id]: '' } }, () => this.disableSaveButton());
    }

    validateRequiredField = (field) => {
        if (field.value.length === 0)
            this.setState({ errors: { ...this.state.errors, [field.id]: 'Required field.' } }, () => this.disableSaveButton());
        else
            this.setState({ errors: { ...this.state.errors, [field.id]: '' } }, () => this.disableSaveButton());
    }

    onSave = () => {
        const place = (({ name, street, city, state, zipCode, imageUrl }) => ({ name, street, city, state, zipCode, imageUrl }))(this.state)
        this.props.addPlace(place, this.handleFormClose)
    }

    handleFormOpen = () => {
        this.setState({ addPlaceForm: true });
    };

    handleFormClose = () => {
        this.setState({ addPlaceForm: false });
    };

    disableSaveButton = () => {
        const hasErrors = Object.values(this.state.errors).some(v => v.length > 0)
        const place = (({ name, street, city, state, zipCode }) => ({ name, street, city, state, zipCode }))(this.state)
        const hasValues = Object.values(place).every(p => p && p.length > 0);
        if (!hasErrors && hasValues)
            this.setState({ isSaveDisabled: false });
        else
            this.setState({ isSaveDisabled: true });
    }

    render() {
        return (
            <div>
                <Fab color="primary" aria-label="Add" className={this.props.classes.fab}>
                    <AddIcon onClick={this.handleFormOpen} />
                </Fab>
                <Dialog
                    open={this.state.addPlaceForm}
                    onClose={this.handleFormClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Lunch Place</DialogTitle>
                    <DialogContent>
                        <p style={{color: 'red'}}>{this.props.error}</p>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            helperText={this.state.errors.name}
                            error={this.state.errors.name.length > 0}
                            fullWidth
                            onChange={this.onRequiredTextFieldChange}
                            onBlur={(e) => this.validateRequiredField(e.target)}
                        />
                        <TextField
                            margin="dense"
                            id="street"
                            label="Street"
                            helperText={this.state.errors.street}
                            error={this.state.errors.street.length > 0}
                            fullWidth
                            onChange={this.onRequiredTextFieldChange}
                            onBlur={(e) => this.validateRequiredField(e.target)}

                        />
                        <TextField
                            margin="dense"
                            id="city"
                            label="City"
                            helperText={this.state.errors.city}
                            error={this.state.errors.city.length > 0}
                            fullWidth
                            onChange={this.onRequiredTextFieldChange}
                            onBlur={(e) => this.validateRequiredField(e.target)}

                        />
                        <TextField
                            margin="dense"
                            id="state"
                            label="State"
                            helperText={this.state.errors.state}
                            error={this.state.errors.state.length > 0}
                            fullWidth
                            onBlur={(e) => this.validateRequiredField(e.target)}
                            onChange={this.onRequiredTextFieldChange}
                        />
                        <TextField
                            margin="dense"
                            id="zipCode"
                            label="Zip Code"
                            helperText={this.state.errors.zipCode}
                            error={this.state.errors.zipCode.length > 0}
                            fullWidth
                            onBlur={(e) => this.validateZipCode(e.target)}
                            onChange={this.onZipCodeFieldChange}
                        />
                        <TextField
                            margin="dense"
                            id="imageUrl"
                            label="Image Url"
                            type="url"
                            fullWidth
                            onChange={this.onRequiredTextFieldChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleFormClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={this.state.isSaveDisabled} onClick={this.onSave} color="primary">
                            Save
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.placesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place, cb) => dispatch(addPlace(place, cb)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlaceForm));