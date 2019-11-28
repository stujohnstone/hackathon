import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import MalibuLogo from "./MailbuLogo";

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 600,
        margin: "0 auto",
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto"
        }
    }
});

export const MalibuHeader = props => {
    return (
        <React.Fragment>
            <main>
                <div>
                    <MalibuLogo/>
                    <Typography
                        variant="title"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Always have an experienced pilot by your side

                    </Typography>
                </div>
            </main>
        </React.Fragment>
    );
};

export default withStyles(styles)(MalibuHeader);
