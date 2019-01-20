import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const Address = ({ address, classes }) => {
    
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {address.address}
                </Typography>
                <Typography component="p">
                    {address.city}, {address.state} {address.zipCode}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}
Address.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Address);