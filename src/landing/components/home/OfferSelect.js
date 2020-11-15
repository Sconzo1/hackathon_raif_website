import React from "react";
import PropTypes from "prop-types";
import {Box, Grid, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Hidden from "@material-ui/core/Hidden";
import Image1 from "./images/offerSelect1.png"
import Image2 from "./images/offerSelect2.png"
import Image3 from "./images/offerSelect3.png"


const styles = (theme) => ({
    rightWrapper: {
        paddingBottom: theme.spacing(12),
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    card: {
        padding: theme.spacing(8),
        boxShadow: theme.shadows[3],
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    image: {
        width: "100%"
    },
    secondRow: {
        marginTop: theme.spacing(-4)
    },
    infoIcon: {
        color: "#ffe177"
    },
});

const OfferSelect = ({classes, width}) => {

    const pros = [
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Легко подключается"
        },
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Гибкая настройка"
        },
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Удобный интерфейс"
        },
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Привлекательные анимации"
        },
    ]

    return (
        <div className="lg-mg-top" style={{backgroundColor: "#FFFFFF"}}>
            <Hidden mdUp>
                <Box mr={3} ml={3} mb={8}>
                    <Typography align="center" variant="h4" style={{fontWeight: 600}}>
                        Подбери СБП элемент для своего бизнеса
                    </Typography>
                </Box>
            </Hidden>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container>
                    <Grid item
                          container
                          md={6}
                          data-aos="fade-right">
                        <Grid container
                              alignItems="center"
                              justify="center"
                              direction="column">
                            <Hidden smDown>
                                <Grid item container justify="space-evenly">
                                    <Grid item md={3}>
                                        <Card variant="elevation"
                                              className={classes.card}
                                              style={{backgroundImage: `url(${Image1})`}}/>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Card variant="elevation"
                                              className={classes.card}
                                              style={{backgroundImage: `url(${Image2})`}}/>
                                    </Grid>
                                </Grid>
                            </Hidden>
                            <Grid item container justify="center" className={classes.secondRow}>
                                <Grid item xs={12} md={6}>
                                    <Card variant="elevation"
                                          className={classes.card}
                                          style={{backgroundImage: `url(${Image3})`, height: 200}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item
                          container
                          xs={12} md={5}
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                    >
                        <div className={classNames(classes.rightWrapper)}>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                <Hidden smDown>
                                    <Box mt={1} mb={8}>
                                        <Typography variant="h4" style={{fontWeight: 600}}>
                                            Подбери СБП элемент для своего бизнеса
                                        </Typography>
                                    </Box>
                                </Hidden>
                                <Hidden mdUp>
                                    <Box mt={4}/>
                                </Hidden>
                                <Typography variant="h6"
                                            align={isWidthUp("md", width) ? "left" : "center"}
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    Наша библиотека позволяет быстро и легко интегрировать СБП на ваш сайт
                                </Typography>
                                <List>
                                    {pros.map(({icon, text}) =>
                                        <ListItem key={text}>
                                            <ListItemIcon>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={text}
                                                primaryTypographyProps={{
                                                    color: "textSecondary"
                                                }}
                                            />
                                        </ListItem>)
                                    }
                                </List>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

OfferSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(OfferSelect)
);
