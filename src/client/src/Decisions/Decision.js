import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = {
    card: {
        width: 400,
        height: 140,
    },
};

const Decision = ({ decision, classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {decision.going ? <ThumbUpIcon style={{ color: 'green' }} /> : <ThumbDownIcon style={{ color: 'red' }} />}  {decision.place.name} 
                </Typography>
                <div>Date {(new Date(decision.time)).toLocaleString("en-US")}</div>
                <div>Attendees {decision.attendees.join(', ')}</div>
                <div>Temperature {decision.weather.main.temp}&#8457;</div>
            </CardContent>

        </Card>
    )
}

export default withStyles(styles)(Decision);
