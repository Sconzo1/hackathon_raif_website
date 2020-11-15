import React, {Fragment, useCallback, useState} from "react";
import PropTypes from "prop-types";
import {Box, Grid, TextField, Typography, withStyles, withWidth} from "@material-ui/core";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import ColoredButton from "../../../shared/components/ColoredButton";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import TermsOfServiceDialog from "../dialogs/TermsOfServiceDialog";


const styles = (theme) => ({
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    card: {
        background: "linear-gradient(305.81deg, #FAC032 8.81%, rgba(244, 208, 63, 0.77) 94.15%)",
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        color: "#000000",
        fontWeight: "bold",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    whiteBg: {
        color: theme.palette.common.black,
        borderColor: theme.palette.common.black
    }
});

const BlackTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderWidth: 2,
                borderColor: 'black',
            },
        },
    },
})(TextField);

const BlackCheckbox = withStyles({
    root: {
        color: "rgba(0,0,0,0.5)",
        '&$checked': {
            color: "black",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const DataForm = ({classes, theme}) => {

    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [checked, setChecked] = useState(false)

    const [openTermsOfServiceDialog, setOpenTermsOfServiceDialog] = useState(false)

    const handleTermsOfServiceDialogOpen = useCallback(() => {
        setOpenTermsOfServiceDialog(true);
    }, [setOpenTermsOfServiceDialog]);

    const handleTermsOfServiceDialogClose = useCallback(() => {
        setOpenTermsOfServiceDialog(false);
    }, [setOpenTermsOfServiceDialog]);

    const handleToggle = () => {
        setChecked(prevState => !prevState)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }


    function sendEmail(e) {
        e.preventDefault()

        setOpenSnackbar(true)
    }

    return (
        <Fragment>
            <div className="lg-mg-bottom" style={{backgroundColor: "#FFFFFF"}}>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                        Заявка отправлена
                    </MuiAlert>
                </Snackbar>
                <Box display="flex" justifyContent="space-between"
                     className={classNames(classes.containerFix, "container-fluid lg-mg-top")}
                     style={{
                         paddingLeft: 0,
                         paddingRight: 0
                     }}>
                    <Grid container>
                        <Grid item xs={12} md={11}
                              data-aos="fade-right">
                            <Card variant="outlined" className={classes.card}>
                                <Grid container>
                                    <Grid item md={1}/>
                                    <Grid item md={4}>
                                        <Typography variant="h5"
                                                    color="initial"
                                                    paragraph
                                                    style={{fontWeight: "bold"}}>
                                            Начни сотрудничать с нами уже сейчас
                                        </Typography>
                                        <form onSubmit={sendEmail.bind(this)}>
                                            <Box display="flex" flexDirection="column">
                                                <Box mb={1}>
                                                    <BlackTextField
                                                        variant="outlined"
                                                        multiline
                                                        placeholder="ФИО"
                                                        inputProps={{"aria-label": "ФИО"}}
                                                        InputProps={{
                                                            className: classes.whiteBg
                                                        }}
                                                        rows={1}
                                                        fullWidth
                                                        required
                                                        value={fullName}
                                                        onChange={(e) => {
                                                            setFullName(e.target.value)
                                                        }}
                                                    />
                                                </Box>
                                                <Box mb={2}>
                                                    <BlackTextField
                                                        variant="outlined"
                                                        multiline
                                                        placeholder="Номер телефона"
                                                        inputProps={{"aria-label": "Номер телефона"}}
                                                        InputProps={{
                                                            className: classes.whiteBg
                                                        }}
                                                        rows={1}
                                                        fullWidth
                                                        required
                                                        value={phone}
                                                        onChange={(e) => {
                                                            setPhone(e.target.value)
                                                        }}
                                                    />
                                                </Box>
                                                <Box mb={2}>
                                                    <FormControlLabel
                                                        control={<BlackCheckbox required checked={checked}
                                                                                onChange={handleToggle}/>}
                                                        label={
                                                            <Typography style={{
                                                                color: "rgba(0, 0, 0, 0.5)",
                                                            }}>Согласие на{" "}
                                                                <Link
                                                                    style={{
                                                                        color: "rgba(0, 0, 0, 0.5)",
                                                                        fontWeight: 300,
                                                                        textDecoration: "underline"
                                                                    }}
                                                                    onClick={handleTermsOfServiceDialogOpen}>
                                                                    обработку персональных данных
                                                                </Link>
                                                            </Typography>
                                                        }
                                                    />
                                                </Box>
                                                <ColoredButton
                                                    color={theme.palette.common.black}
                                                    variant="outlined"
                                                    type="submit"
                                                >
                                                    Оставить заявку
                                                </ColoredButton>
                                            </Box>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <TermsOfServiceDialog open={openTermsOfServiceDialog} onClose={handleTermsOfServiceDialogClose}/>

        </Fragment>
    );
}

DataForm.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withWidth()(
    withStyles(styles, {withTheme: true})(DataForm)
);
