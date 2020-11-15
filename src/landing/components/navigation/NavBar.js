import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppBar, Button, Grid, Hidden, IconButton, Toolbar, withStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
    appBar: {
        boxShadow: 'none',
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    menuButtonText: {
        letterSpacing: 1,
        fontSize: '16px',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500
    },
    brandText: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700
    },
    noDecoration: {
        textDecoration: "none !important",
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        color: '#6D6D6D',
        letterSpacing: 1,
        padding: '8px',
        fontFamily: "'Montserrat', sans-serif",
    },
    buttonToOpenAccountLabel: {
        letterSpacing: 1,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        background: '#5F87E8',
        color: '#fff'
    },
    buttonToOpenAccount: {
        "&:hover": {
            boxShadow: " 0 0 10px rgba(0,0,0,0.5)",
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            backgroundColor: "rgba(21,21,21,0.4)",
            borderWidth: 2
        },
    }
});

const NavBar = ({
                    classes,
                    handleMobileDrawerOpen,
                    handleMobileDrawerClose,
                    mobileDrawerOpen,
                    selectedTab
                }) => {

    const menuItems = [
        {
            link: "/",
            name: "Проекты",
            icon: <EuroSymbolIcon className="text-white"/>
        },
        {
            link: "/",
            name: "Сервис",
            icon: <BusinessCenterIcon className="text-white"/>
        },
        {
            link: "/",
            name: "Контакты",
            icon: <AssignmentIndIcon className="text-white"/>
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Link
                        to="/"
                        className={classes.noDecoration}
                    >
                        <div>
                            <Typography
                                variant="h3"
                                display='inline'
                            >
                                FFF
                            </Typography>
                        </div>
                    </Link>
                    <div>
                        <Hidden mdUp>
                            <IconButton
                                onClick={handleMobileDrawerOpen}
                                aria-label="Open Navigation"
                            >
                                <MenuIcon color="primary"/>
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                {menuItems.map(element => {
                                    if (element.link) {
                                        return (
                                            <Grid key={element.name} item>
                                                <Link
                                                    to={element.link}
                                                    className={classes.noDecoration}
                                                    onClick={handleMobileDrawerClose}
                                                >
                                                    {element.name}
                                                </Link>
                                            </Grid>
                                        );
                                    }
                                    return (
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            size="large"
                                            onClick={element.onClick}
                                            classes={{text: classes.menuButtonText}}
                                            key={element.name}
                                            style={{
                                                marginLeft: 24
                                            }}
                                        >
                                            {element.name}
                                        </Button>
                                    );
                                })}
                            </Grid>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <NavigationDrawer
                menuItems={menuItems}
                anchor="right"
                open={mobileDrawerOpen}
                selectedItem={selectedTab}
                onClose={handleMobileDrawerClose}
            />
        </div>
    );
}

NavBar.propTypes = {
    handleMobileDrawerOpen: PropTypes.func,
    handleMobileDrawerClose: PropTypes.func,
    mobileDrawerOpen: PropTypes.bool,
    selectedTab: PropTypes.string,
};

export default withStyles(styles, {withTheme: true})(memo(NavBar));
