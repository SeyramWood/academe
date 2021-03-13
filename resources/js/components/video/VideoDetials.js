import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import CommentLIst from "../comment/CommentLIst";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: 500
//     }
// }));

const VideoDetials = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [secondary, setSecondary] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab icon={<FolderOutlinedIcon />} aria-label="documents" />
                <Tab
                    icon={<AssignmentIndOutlinedIcon />}
                    aria-label="assignments"
                />
                <Tab
                    icon={<QuestionAnswerOutlinedIcon />}
                    aria-label="comments"
                />
            </Tabs>

            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <CommentLIst />
                </TabPanel>
            </SwipeableViews>
        </Paper>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}

export default VideoDetials;
