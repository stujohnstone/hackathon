
/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function AutoCompleteSelectCountries(props) {
    const classes = useStyles();

    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={option => option.label}
            renderOption={option => (
                <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                </React.Fragment>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    label={props.label}
                    variant="outlined"
                    fullWidth
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'disabled', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    { code: 'JFK', label: 'New York' },
    { code: 'L', label: 'United Arab Emirates'},
    { code: 'LHR', label: 'London Heathrow' },
    { code: 'LGW', label: 'London Gatwick' },
    { code: 'CDG', label: 'Paris' },
    { code: 'SFA', label: 'San Francisco' },

];

