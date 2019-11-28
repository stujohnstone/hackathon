import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import NavMain from "../components/NavMain";
import HeroUnit from "../components/HeroUnit";
import ExamplePost from "../components/ExamplePost";
import Map from "../components/Map";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MalibuLogo from "./MailbuLogo";

const styles = theme => ({

    layout: {
        width: '100%',
        display: 'block',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '55%'
        }
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center'
    },
    titletext:{
        marginBottom:'50px'
    },


});

function frontPage(props){
    const { classes} = props

    return (
        <React.Fragment>
                <div className={classes.layout}>
                    <MalibuLogo/>
                    <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography className={classes.titletext}
                            variant="display1"
                            align="center"
                            color="textPrimary"
                            gutterBottom={true}

                        >
                            Route Map
                        </Typography>
                    </Grid>

                    <Grid container spacing={8}>

                        <Grid item xs={6}>
                            <Typography
                                variant="title"
                                align="left"
                                color="textPrimary"
                                gutterBottom
                            >
                                Filter By...
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="title"
                                align="left"
                                color="textPrimary"
                                gutterBottom
                            >
                                Route.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="date"
                                label="Date Of Incident"
                                type="date"
                                fullWidth={true}
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                autoComplete={true}
                                id="DepartureDestination"
                                className={classes.textField}
                                label="Depature "/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                autoComplete={true}
                                id="ArrivalDestination"
                                className={classes.textField}
                                label=" Destination"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Map/>
                        </Grid>
                    </Grid>
                    </Grid>

                </div>

        </React.Fragment>
    )


}

function handleLogInPress(){
    window.location.assign("/signin");
}

export default withStyles(styles)(frontPage);
