import React, {useState} from "react";
import {Box, Grid, withStyles} from "@material-ui/core";
import classNames from "classnames"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
    containerFix: {
        [theme.breakpoints.up("md")]: {
            maxWidth: "none !important",
        },
    },
    inputForm: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display: "block"
    },
    image: {
        height: theme.spacing(18),
        width: theme.spacing(18)
    },
    textStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontFamily: "'Montserrat', sans-serif",
        textTransform: 'uppercase',
    }
});


const CreditCardForm = ({classes}) => {
    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleInputFocus = e => {
        setFocus(e.target.name)
    }

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item md>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                    placeholders={{
                        name: 'Ваше имя здесь'
                    }}
                    locale={{
                        valid: 'Дата ист.'
                    }}
                />
            </Grid>
            <Grid item md={4}>
                <form autoComplete="false" noValidate>
                    <TextField
                        name="number"
                        color="secondary"
                        className={classes.inputForm}
                        label="Номер карты"
                        onChange={e => {
                            const {_, value} = e.target
                            setNumber(value)
                        }}
                        onFocus={handleInputFocus}
                    />
                    <TextField
                        name="name"
                        color="secondary"
                        className={classes.inputForm}
                        label="Имя"
                        onChange={e => {
                            const {_, value} = e.target
                            setName(value)
                        }}
                        onFocus={handleInputFocus}
                    />
                    <TextField
                        name="expiry"
                        color="secondary"
                        className={classes.inputForm}
                        label="Дата истечения"
                        onChange={e => {
                            const {_, value} = e.target
                            setExpiry(value)
                        }}
                        onFocus={handleInputFocus}
                    />
                    <TextField
                        name="cvc"
                        color="secondary"
                        className={classes.inputForm}
                        label="CVC"
                        onChange={e => {
                            const {_, value} = e.target
                            setCvc(value)
                        }}
                        onFocus={handleInputFocus}
                    />
                </form>
            </Grid>
        </Grid>
    )
}


const Test = ({classes, qrCode}) => {

    return (
        <div style={{backgroundColor: "#FFF"}}>
            <Box display="flex" justifyContent="center" className="row">
                <Box pt={5} pb={5} width="100%" color="white">
                    <div className={classNames(classes.containerFix, "container")}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={6}>
                                <CreditCardForm classes={classes}/>
                            </Grid>
                            <Grid item md={3}>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                    direction="column">
                                    <Typography variant="subtitle1"
                                                color="textSecondary"
                                                className={classes.textStyle}
                                                style={{fontWeight: 600}}>
                                        Нет карты под рукой?
                                    </Typography>
                                    {qrCode}
                                    <Typography variant="body2"
                                                align="center"
                                                color="textSecondary"
                                                className={classes.textStyle}
                                                style={{fontWeight: 400}}>
                                        Просто просканируй QR-код <br/>и оплати в приложении банка
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

Test.propTypes = {};

export default withStyles(styles, {withTheme: true})(Test);
