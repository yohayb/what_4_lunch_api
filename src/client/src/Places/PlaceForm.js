import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class PlaceForm extends React.Component {

    onChange = (e) => {
        let field = {}
        field[e.target.id] = e.target.value;
        this.setState({ ...field })
    }

    render() {
        return (
            <div>
                <Fab color="primary" aria-label="Add" className={this.props.classes.fab}>
                    <AddIcon onClick={this.props.handleFormOpen} />
                </Fab>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleFormClose}
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
                        <Button onClick={e => this.props.onSaveClick(this.state,e)} color="primary">
                            Save
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PlaceForm);