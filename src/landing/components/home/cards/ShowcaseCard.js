import React from 'react';
import {withStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const styles = (theme) => ({
    card: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(4),
        width: theme.spacing(31),
    },
    root: {
        minWidth: 345,
        marginTop: 8,
        marginBottom: 8,
    },
    media: {
        height: 140,
    },
    image: {
        height: theme.spacing(16),
        width: theme.spacing(16)
    },
    textStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontFamily: "'Montserrat', sans-serif",
        textTransform: 'uppercase',
    }
});

const ShowcaseCard = ({classes, image, text}) => {

    return (
        <Card className={classes.card}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column">
                <img src={image} className={classes.image} alt=""/>
                <Typography variant="h6"
                            color="textSecondary"
                            className={classes.textStyle}
                            style={{fontWeight: 400}}>
                    {text}
                </Typography>
            </Grid>
        </Card>
    );
};

export default withStyles(styles, {withTheme: true})(ShowcaseCard);