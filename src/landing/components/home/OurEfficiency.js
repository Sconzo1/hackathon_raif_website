import React from "react";
import {Box, Grid, Typography, withStyles} from "@material-ui/core";
import classNames from "classnames";

const styles = (theme) => ({
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    rightWrapper: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(8),
    },
    wrapperIcons: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(8),
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        },
    },
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
});


const OurEfficiency = ({classes}) => {

    const features = [
        {
            number: 3.78,
            text: "трлн. оборота"
        },
        {
            number: 25,
            text: "лет работы"
        },
        {
            number: 534,
            text: "тыс. клиентов"
        },
        {
            number: 893,
            text: "аналитика"
        },
    ];

    return (
        <div style={{backgroundColor: "#FFDE59"}}>
            <Box display="flex" justifyContent="center" className="row">
                <Box pt={5} pb={5} width="100%" color="white">
                    <div className={classNames(classes.containerFix, "container")}>
                        <Grid container
                              spacing={6}
                              direction="row"
                              justify="space-between"
                              alignItems="baseline">
                            {features.map(({number, text}, i) => (
                                <Grid item
                                      xs={12}
                                      md
                                      key={i}
                                      data-aos="zoom-out">
                                    <Typography variant="h2" align="center"
                                                style={{
                                                    fontFamily: "'Comfortaa'",
                                                    fontWeight: 700,
                                                    color: "black"
                                                }}>
                                        {number}
                                    </Typography>
                                    <Typography variant="subtitle1" align="center"
                                                style={{
                                                    fontFamily: "'Comfortaa'",
                                                    fontWeight: 100,
                                                    textTransform: "uppercase",
                                                    color: "black"
                                                }}>
                                        {text}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

OurEfficiency.propTypes = {};

export default withStyles(styles, {withTheme: true})(OurEfficiency);
