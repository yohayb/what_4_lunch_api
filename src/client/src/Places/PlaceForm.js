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
    state ={
        addPlaceForm: false
    }

    onChange = (e) => {
        let field = {}
        field[e.target.id] = e.target.value;
        this.setState({ ...field })
    }

    onSave = (place) => {
        this.handleFormClose();
        this.props.addPlace(place)
    }

    handleFormOpen = () => {
        this.setState({ addPlaceForm: true });
    };

    handleFormClose = () => {
        this.setState({ addPlaceForm: false });
    };

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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="street"
                            label="Street"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="city"
                            label="City"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="state"
                            label="State"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="zipCode"
                            label="Zip Code"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="imageUrl"
                            label="Image Url"
                            type="url"
                            fullWidth
                            onChange={this.onChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleFormClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.onSave(this.state)} color="primary">
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place) => dispatch(addPlace(place)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlaceForm));