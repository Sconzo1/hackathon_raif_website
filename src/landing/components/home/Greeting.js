import React from "react";
import PropTypes from "prop-types";
import {Box, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Image from "./images/imageTitle.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Logo from "./images/logo.png"


const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center bottom"
    },
    infoIcon: {
        color: "#ffe177"
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    }
});

const Greeting = ({classes, width}) => {

    const pros = [
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Моментальное зачисление денег"
        },
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Максимальная комиссия - 0.7 %"
        },
        {
            icon: <CheckCircleRoundedIcon className={classes.infoIcon}/>,
            text: "Информирование о статусе операции"
        },
    ]


    return (
        <div className={classNames("lg-mg-bottom", isWidthUp("md", width) ? "lg-mg-top" : "")}
             style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container
                      justify="space-evenly">
                    <Grid item
                          container
                          xs={12} md={5}
                          alignItems="center"
                          data-aos={
                              isWidthUp("md", width) ? "fade-right" : "zoom-in"
                          }
                    >
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Hidden mdUp>
                                <Grid item>
                                    <img src={Logo} alt="" style={{width: "100%"}}/>
                                </Grid>
                            </Hidden>
                            <Grid item>
                                <Typography variant="h3"
                                            align={isWidthUp("md", width) ? "left" : "center"}
                                            paragraph>
                                    СБП - новый способ приема платежей
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="textSecondary" style={{fontWeight: 300}}>
                                    Преимущества использования СБП:
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
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={4}
                              data-aos="fade-left"
                        >
                            <img className={classes.image} src={Image} alt=""/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </div>
    );
}

Greeting.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(Greeting)
);
