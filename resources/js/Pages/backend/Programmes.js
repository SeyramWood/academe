import React from "react";
import Dashboard from "../../layouts/Dashboard";
import ProgramsTreeView from "../../components/ProgramsTreeView";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    },
    displayCourse: {
        width: "100%",
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        color: "#000000"
    }
}));

const Programmes = ({ courses, programmes }) => {
    const classes = useStyles();
    const [allCourses, setAllCourse] = React.useState(courses);
    const [allProgrammes, setAllProgrammes] = React.useState(programmes);
    const [courseDetails, setCourseDetails] = React.useState({});
    const [displayStatus, setDisplayStatus] = React.useState();

    const displayCauseDetails = id =>
        setCourseDetails(() => allCourses.find(c => c.id === id));
    React.useEffect(() => {
        Object.keys(courseDetails).length > 0
            ? setDisplayStatus(true)
            : setDisplayStatus(false);
    }, [courseDetails, setDisplayStatus]);

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <div className="programs-details">
                                <h2 className="programs-details__title secondary">
                                    COURSE DETAILS
                                </h2>
                                {displayStatus && (
                                    <div className="programs-details__lists">
                                        <div className={classes.demo}>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Course Title
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {
                                                                    courseDetails.title
                                                                }
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Course Code
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {
                                                                    courseDetails.code
                                                                }
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Semester
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {
                                                                    courseDetails.semester
                                                                }
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Year
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {
                                                                    courseDetails.year
                                                                }
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Program
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {
                                                                    courseDetails.programme
                                                                }
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                        </div>
                                    </div>
                                )}
                                {!displayStatus && (
                                    <div className={classes.displayCourse}>
                                        No course is selected!
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Paper className={classes.paper}>
                            <div className="programs-details">
                                <h2 className="programs-details__title mb-2 secondary">
                                    Porgrams
                                </h2>
                                <ProgramsTreeView
                                    courses={courses}
                                    programmes={programmes}
                                    displayCauseDetails={displayCauseDetails}
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

Programmes.layout = page => <Dashboard children={page} />;

export default Programmes;
