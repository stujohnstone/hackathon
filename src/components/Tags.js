import React from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import MalibuLogo from "./MailbuLogo";
import Typography from "@material-ui/core/Typography";
import {blue, purple} from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";

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
    button:{
        height:'50px'
    },
    buttonBlue:{
        color:'blue'
}


});

const PurpleSwitch = withStyles({
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500],
        },
        '&$checked + $track': {
            backgroundColor: purple[500],
        },
    },
    checked: {},
    track: {},
})(Switch);


function Tags(props){
    const { classes} = props
    var btnStyle = {
        backgroundColor: 'blue'
    }
    return (
        <React.Fragment>
            <div className={classes.layout}>
                <MalibuLogo/>
                <Typography className={classes.titletext}
                            variant="h3"
                            align="center"
                            color="textPrimary"
                            gutterBottom={true}

                >
                    Tags
                </Typography>
                <Grid item xs={12}>
                    <Typography className={classes.titletext}
                                variant="h6"
                                align="left"
                                color="textPrimary"
                                gutterBottom={true}

                    >
                        Descriptor Tags
                    </Typography>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={2}>
                        <button className={classes.button}
                                style={btnStyle}
                        >
                            Bird Strike
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Landing Issue
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Weather
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Engine Issue
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                        Lightning
                    </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Turbulence
                        </button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.titletext}
                                variant="h6"
                                align="left"
                                color="textPrimary"
                                gutterBottom={true}

                    >
                        Aircraft Type Tags
                    </Typography>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                           Boeing 737
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Airbus A430
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Boeing 787
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Boeing 777
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Lightning
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                             787 Dreamliner
                        </button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.titletext}
                                variant="h6"
                                align="left"
                                color="textPrimary"
                                gutterBottom={true}

                    >
                        Location Tags
                    </Typography>

                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Maldives Male
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Amsterdam Schipol
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                           London Heathrow
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            London Gatwick
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            Paris CDG
                        </button>
                    </Grid>
                    <Grid item xs={2}>
                        <button className={classes.button}>
                            New York JFK
                        </button>
                    </Grid>
                </Grid>

            </div>

        </React.Fragment>
    )


}

export default withStyles(styles)(Tags);
