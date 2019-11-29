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

 function DescriptorChips(props) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '"Bird Strike"', color: '#2196f3'  },
        { key: 1, label: 'LandingIssue' ,color: '#ffeb3b' },
        { key: 2, label: 'Weather' , color: '#4caf50' },
        { key: 3, label: 'Engine Issue' , color: '#9c27b0' },
        { key: 4, label: 'Lightning' , color: '#2196f3' },


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
export default DescriptorChips;