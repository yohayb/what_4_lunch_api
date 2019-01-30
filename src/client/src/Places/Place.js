import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Address from './Address';
import { deletePlace } from '../actions';

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

class Place extends React.Component {

    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={this.props.classes.media}
                        image={this.props.place.imageUrl}
                        title={this.props.place.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.place.name}
                        </Typography>
                        {this.props.place.addresses.map((a, i) => <Address key={i} address={a} />)}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={e => this.props.deletePlace(this.props.place.name)}>
                        Delete
                </Button>
                </CardActions>
            </Card>
        );
    }
}

Place.propTypes = {
    classes: PropTypes.object.isRequired,
    place: PropTypes.shape({
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        addresses: PropTypes.array
    }).isRequired
};



const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlace: (name) => dispatch(deletePlace(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Place));