import React from "react";
import PropTypes from "prop-types";
import {Box, Grid, isWidthUp, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import ImageQr1 from '../home/images/qr1.png'
import ImageQr2 from '../home/images/qr2.png'
import ImageQr3 from '../home/images/qr3.png'
import ShowcaseCard from "./cards/ShowcaseCard";

const styles = (theme) => ({
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    card: {
        height: theme.spacing(20),
        borderRadius: 10,
        width: "100%",
        background: "linear-gradient(303.91deg, #FAC032 7.57%, #F4D03F 94.39%)",
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        [theme.breakpoints.down("sm")]: {
            height: theme.spacing(110),
        }
    },
    secondRow: {
        marginTop: theme.spacing(-16),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(-108),
        }
    },
});

const Showcase = ({classes, width}) => {

    const qrs = [
        {
            image: ImageQr1,
            text: "Стандартные"
        },
        {
            image: ImageQr2,
            text: "Стилизованные"
        },
        {
            image: ImageQr3,
            text: "Анимированные"
        },
    ]


    return (
        <div className="lg-mg-top lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
            <Box display="flex" justifyContent="space-between"
                 className={classNames(classes.containerFix, "container")}>
                <Grid container spacing={7}>
                    <Grid
                        item
                        md={4}
                        data-aos={
                            isWidthUp("md", width) ? "fade-left" : "zoom-in"
                        }
                    >
                        <Box mb={2}>
                            <Typography variant="h4" style={{fontWeight: 600}}
                                        align={isWidthUp("md", width) ? "left" : "center"}>
                                Множество дизайнерских <br/>решений
                            </Typography>
                        </Box>
                        <Typography variant="h6"
                                    align={isWidthUp("md", width) ? "left" : "justify"}
                                    color="textSecondary"
                                    style={{fontWeight: 400}}>
                            Красивый QR-код не только упрощает платёж, но и привлекает внимание покупателя
                        </Typography>
                    </Grid>
                    <Grid item
                          container
                          alignItems="center"
                          xs={12} md={8}
                          data-aos={
                              isWidthUp("md", width) ? "fade-left" : "zoom-in"
                          }
                    >
                        <Grid container
                              direction="column">
                            <Grid item container md={12}>
                                <Card variant="elevation" className={classes.card}/>
                            </Grid>
                            <Grid item container
                                  justify="space-evenly"
                                  className={classes.secondRow}>
                                {qrs.map(({image, text}) =>
                                    <Grid item key={text}>
                                        <Box mb={4}>
                                            <ShowcaseCard image={image} text={text}/>
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

Showcase.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(Showcase)
);