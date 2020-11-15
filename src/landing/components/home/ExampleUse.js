import React from "react";
import PropTypes from "prop-types";
import {Box, ButtonBase, Grid, Hidden, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Image from "./images/exampleUse.png";
import ImageCode from "./images/exampleCode.png";
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';


const styles = (theme) => ({
    button: {
        marginTop: theme.spacing(4)
    },
    icon: {},
    image: {
        width: "100%",
    },
    imageCode: {
        width: "85%",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    rightWrapper: {
        paddingBottom: theme.spacing(12),
        paddingTop: theme.spacing(16),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(0),
        },
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
});

const ExampleUse = ({classes, width}) => {

    return (
        <div className="lg-mg-top lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
            <Box
                mb={4}>
                <Typography align="center" variant="h4" style={{fontWeight: 600}}>
                    Используй в пару строк
                </Typography>
            </Box>
            <Box display="flex"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container justify="center">
                    <Hidden smDown>
                        <Grid item md={6}
                              data-aos="fade-right">
                            <img className={classes.image} src={Image} alt=""/>
                        </Grid>
                    </Hidden>
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
                                <img src={ImageCode} alt="" className={classes.imageCode}/>
                                <Typography variant="h6"
                                            align={isWidthUp("md", width) ? "left" : "justify"}
                                            color="textSecondary"
                                            style={{fontWeight: 400}}>
                                    Наш API не использует сторонних библиотек, что гарантирует надежность вашего сайта.
                                    В библиотеке содержатся готовые формы для запроса QR-кода и отслеживания состояния
                                    оплаты.
                                </Typography>
                                <ButtonBase disableRipple className={classes.button}>
                                    <ArrowRightRoundedIcon className={classes.icon} fontSize="large"/>
                                    <Typography variant="h6">
                                        НАЧАТЬ РАБОТУ С FFF
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

ExampleUse.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(ExampleUse)
);
