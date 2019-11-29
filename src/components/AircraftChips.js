import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

 function AircraftChips(props) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '"Boeing 737"',color: '#ffeb3b' },
        { key: 1, label: 'Airbus A430' , color: '#9c27b0' },
        { key: 2, label: 'Boeing 787' , color: '#2196f3' },
        { key: 3, label: 'Boeing 777' , color: '#4caf50' },
        { key: 4, label: '787 Dreamliner', color: '#ffeb3b' },
        { key: 5, label: 'Fokker 50' , color: '#9c27b0' },

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

}
export default AircraftChips;