import React from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import MalibuLogo from "./MailbuLogo";
import Typography from "@material-ui/core/Typography";
import {blue, green, purple, red, yellow} from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import DescriptorChips from "./DescriptorChips";
import AircraftChips from "./AircraftChips";
import LocationChips from "./LocationChips";


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
        marginBottom:'15px',
        marginTop:'30px'
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

const GreenSwitch = withStyles({
    switchBase: {
        color: green[300],
        '&$checked': {
            color: green[500],
        },
        '&$checked + $track': {
            backgroundColor: green[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

const RedSwitch = withStyles({
    switchBase: {
        color: red[300],
        '&$checked': {
            color: red[500],
        },
        '&$checked + $track': {
            backgroundColor: red[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

const YellowSwitch = withStyles({
    switchBase: {
        color: yellow[300],
        '&$checked': {
            color: yellow[500],
        },
        '&$checked + $track': {
            backgroundColor: yellow[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

const BlueSwitch = withStyles({
    switchBase: {
        color: blue[300],
        '&$checked': {
            color: blue[500],
        },
        '&$checked + $track': {
            backgroundColor: blue[500],
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

    var  descriptorList = new Array();
    const [descriptor, setDescriptor] = React.useState('');
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
        checkedF: true,
        checkedG: true,
        checkedH: true,
        checkedI: true,
        checkedJ: true,
        checkedK: true,
        checkedL: true,
        checkedM: true,
        checkedN: true,
        checkedO: true,
        checkedP: true,
        checkedQ: true,
        checkedR: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const handleSelectionbox = event => {
        setDescriptor(event.target.value);
    }

    const descriptorArray = ()  =>{
        var list  = new Array()
        list.push("Bird Strike")
        list.push("LandingIssue");
        list.push("Weather");
        list.push("Engine Issue");
        list.push("Lightning");

        return list;
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

                    >
                        Descriptor Tags
                    </Typography>

                </Grid>
                <Grid container spacing={3}>
                <Grid item xs={12}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Event Type</InputLabel>
                        <Select
                            native
                            value={descriptor}
                            id={"selectbox"}
                            autoWidth={false}
                            className={classes.MuiSelect}
                            onChange={handleSelectionbox}
                            inputProps={{
                                name: 'Descriptors',
                                id: 'descriptor-select',
                            }}
                            menuStyle={{
                                marginTop: 10,

                                width: "100%"
                            }}
                        >
                            <option value=""/>
                            <em>None</em>
                            <option value={1}>Bird Strike</option>
                            <option value={2}>Turbulence</option>
                            <option value={3}>Weather</option>
                            <option value={4}>Engine Issue</option>
                            <option value={5}>Landing Issue</option>
                        </Select>
                    </FormControl>

                </Grid>
                    <Grid item xs={12}>
                        <DescriptorChips data={descriptorArray()}/>
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
                <Grid>
                    <AircraftChips/>
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
<Grid item xs={12}>
    <LocationChips/>
</Grid>

                </Grid>

            </div>

        </React.Fragment>
    )



}


export default withStyles(styles)(Tags);
