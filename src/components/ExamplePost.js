import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Edit from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({

    layout: {
        width: '100%',
        display: 'block',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            width: '65%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '45%'
        }
    },
    root: {
        flexGrow: 1,
    },

    paper: {
        minHeight: '300px',
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
            .spacing.unit * 3}px`
    },
    avatar: {
        margin: `${theme.spacing.unit}px auto`,
        backgroundColor: theme.palette.secondary.main
    },
    textField: {
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: "100%"
    },
    MuiSelect: {
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: "100%"
    },
    button: {
        width: '100%',
        marginTop: '5%'
    },
});

class PostForm extends React.Component {
    render() {
        const {classes, children} = this.props;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <Typography
                        variant="display3"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        🏝️MALIBU🏝️
                    </Typography>
                    <Typography align="center" variant="headline">Create a Notification</Typography>


                    <form>
                        <Grid container spacing={8}>

                          <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                              <InputLabel htmlFor="age-native-simple">Event Type </InputLabel>
                              <Select
                                  native
                                  value={""}
                                  id={"selectbox"}
                                  autoWidth={false}
                                  className={classes.MuiSelect}
                                  onChange={handleChange('Event Type')}
                                  inputProps={{
                                    name: 'Event Type',
                                    id: 'event-select',
                                  }}
                                  menuStyle={{
                                    marginTop: 10,

                                    width: "100%"
                                  }}
                              >
                                <option value=""/>
                                <option value={10}>Bird Strike</option>
                                <option value={20}>Turbulence</option>
                                <option value={30}>Lightning</option>
                              </Select>
                            </FormControl>
                          </Grid>

                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-native-simple">Aircraft </InputLabel>
                                    <Select
                                        native
                                        value={""}
                                        id={"selectbox"}
                                        autoWidth={true}
                                        className={classes.MuiSelect}
                                        onChange={handleChange('Aircraft Type')}
                                        inputProps={{
                                            name: 'Aircraft Type',
                                            id: 'aircraft-select',
                                        }}
                                        menuStyle={{
                                          marginTop: 10,

                                          width: "100%"
                                        }}
                                     >
                                        <option value=""/>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="date"
                                    label="Date Of Incident"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete={true}
                                    id="DepartureDestination"
                                    className={classes.textField}
                                    label="Depature Destination"/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete={true}
                                    id="ArrivalDestination"
                                    className={classes.textField}
                                    label="Arrival Destination"/>
                            </Grid>
                        </Grid>
                        <TextField
                            id="full-title"
                            label="Event Title"
                            placeholder="Write your post here"
                            margin="normal"
                            className={classes.textField}
                        />

                        <TextField
                            id="full-width"
                            label="Description of Event"
                            placeholder="Write your post here"
                            multiline
                            rows={6}
                            margin="normal"
                            className={classes.textField}
                        />
                        <Grid container spacing={8}>
                            <Grid item xs={6}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                >Cancel</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                >Notify</Button>
                            </Grid>
                        </Grid>
                    </form>
                </main>
            </React.Fragment>
        );
    }
}

const handleChange = name => event => {

};

PostForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostForm);
