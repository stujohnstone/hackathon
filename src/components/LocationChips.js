import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
        backgroundColor:blue
    },
}));

 function LocationChips(props) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '"Montego Bay - MBJ"', color: '#2196f3' },
        { key: 1, label: 'Amsterdam - AMS', color: '#ffeb3b' },
        { key: 2, label: 'London - LHR', color: '#9c27b0' },
        { key: 3, label: 'London - LGW', color: '#f44336' },
        { key: 4, label: 'Paris - CDG', color: '#4caf50' },
        { key: 5, label: 'New York - JFK', color: '#2196f3' },

    ]);


    const handleDelete = chipToDelete => () => {
        setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    };

    return (
        <Paper className={classes.root}>
            {chipData.map(data => {
                let icon;

                if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                }

                return (
                    <Chip
                        style={{background: data.color}}
                        key={data.key}
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        className={classes.chip}
                    />
                );
            })}
        </Paper>
    );

    const getColour = () =>{
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
    console.log(rand);
        if(rand < 30 ){
            return '#2196f3'
        }

        if ( rand< 60){
            return '#4caf50'
        }

        if(rand < 75 ){
            return '#9c27b0'
        }
    }

}
export default LocationChips;