import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Address from './Address';

const styles = {
    card: {
        maxWidth: 345,
        maxHeight: 380,
        overflowY: 'scroll'
    },
    media: {
        height: 140,
        backgroundSize: 150
    },
};

const Place = ({ place, onDeleteClick, classes }) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title={place.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {place.name}
                    </Typography>
                    {place.addresses.map(a => <Address address={a} />)}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={e => onDeleteClick(place.name, e)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

Place.propTypes = {
    classes: PropTypes.object.isRequired,
    place: PropTypes.shape({
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        addresses: PropTypes.array
    }).isRequired
};

export default withStyles(styles)(Place);