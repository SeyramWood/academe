import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import StudentDashboard from "../../layouts/StudentDashboard";
import LecturesTreeView from "../../components/student/LecturesTreeView";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
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

const Lectures = ({
    courses,
    programmes,
    lecturesPerSemester,
    semesterCourses
}) => {
    const classes = useStyles();
    const { authUser } = usePage().props;
    const [allCourses, setAllCourse] = React.useState(courses);
    const [allProgrammes, setAllProgrammes] = React.useState(programmes);
    const [lectureDetails, setLectureDetails] = React.useState({});
    const [displayStatus, setDisplayStatus] = React.useState();

    const displayLectureDetails = id =>
        setLectureDetails(() => lecturesPerSemester.find(c => c.id === id));
    React.useEffect(() => {
        Object.keys(lectureDetails).length > 0
            ? setDisplayStatus(true)
            : setDisplayStatus(false);
    }, [lectureDetails, setDisplayStatus]);
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <div className="programs-details">
                                {displayStatus && (
                                    <div className="programs-details__lists">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={7}>
                                                <h2 className="programs-details__title secondary">
                                                    LECTURE DETAILS
                                                </h2>
                                                <div className={classes.demo}>
                                                    <List dense={true}>
                                                        <Grid
                                                            container
                                                            spacing={1}
                                                        >
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={3}
                                                            >
                                                                <ListItem>
                                                                    <h4 className="programs-details__title black">
                                                                        Lecture
                                                                    </h4>
                                                                </ListItem>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={9}
                                                            >
                                                                <ListItem>
                                                                    <p>
                                                                        <a
                                                                            href={`/student/watch-video/${lectureDetails.slug}`}
                                                                            className="linkHover"
                                                                        >
                                                                            {
                                                                                lectureDetails.title
                                                                            }
                                                                        </a>
                                                                    </p>
                                                                </ListItem>
                                                            </Grid>
                                                        </Grid>
                                                    </List>
                                                    <List dense={true}>
                                                        <Grid
                                                            container
                                                            spacing={1}
                                                        >
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={3}
                                                            >
                                                                <ListItem>
                                                                    <h4 className="programs-details__title black">
                                                                        Course
                                                                    </h4>
                                                                </ListItem>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={9}
                                                            >
                                                                <ListItem>
                                                                    <p>
                                                                        {
                                                                            lectureDetails.course
                                                                        }
                                                                    </p>
                                                                </ListItem>
                                                            </Grid>
                                                        </Grid>
                                                    </List>
                                                    <List dense={true}>
                                                        <Grid
                                                            container
                                                            spacing={1}
                                                        >
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={3}
                                                            >
                                                                <ListItem>
                                                                    <h4 className="programs-details__title black">
                                                                        Semester
                                                                    </h4>
                                                                </ListItem>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={9}
                                                            >
                                                                <ListItem>
                                                                    <p>
                                                                        {
                                                                            lectureDetails.semester
                                                                        }
                                                                    </p>
                                                                </ListItem>
                                                            </Grid>
                                                        </Grid>
                                                    </List>
                                                    <List dense={true}>
                                                        <Grid
                                                            container
                                                            spacing={1}
                                                        >
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={3}
                                                            >
                                                                <ListItem>
                                                                    <h4 className="programs-details__title black">
                                                                        Year
                                                                    </h4>
                                                                </ListItem>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={9}
                                                            >
                                                                <ListItem>
                                                                    <p>
                                                                        {
                                                                            lectureDetails.year
                                                                        }
                                                                    </p>
                                                                </ListItem>
                                                            </Grid>
                                                        </Grid>
                                                    </List>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={5}>
                                                <h2 className="programs-details__title secondary">
                                                    LECTURER DETAILS
                                                </h2>
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="flex-start"
                                                    alignItems="flex-start"
                                                >
                                                    <Avatar
                                                        alt={
                                                            lectureDetails.surname ||
                                                            ""
                                                        }
                                                        src={`/storage/avatar/lecturers/${lectureDetails.avatar}`}
                                                        className={
                                                            classes.avaterSmall
                                                        }
                                                    >
                                                        F
                                                    </Avatar>
                                                    <div className="ml-2">
                                                        <p className="programs-details__title black">
                                                            Name
                                                        </p>
                                                        <p>{`${lectureDetails.surname ||
                                                            "N/A"} ${lectureDetails.middle_name ||
                                                            ""} ${lectureDetails.other_name ||
                                                            ""}`}</p>
                                                        <p className="programs-details__title black">
                                                            Phone
                                                        </p>
                                                        <p>{`${lectureDetails.phone ||
                                                            "N/A"}`}</p>
                                                        <p className="programs-details__title black">
                                                            Email
                                                        </p>
                                                        <p>{`${lectureDetails.email ||
                                                            "N/A"}`}</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )}
                                {!displayStatus && (
                                    <div className={classes.displayCourse}>
                                        No lecture is selected!
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Paper className={classes.paper}>
                            <div className="programs-details">
                                <h2 className="programs-details__title mb-2 secondary">
                                    {`${authUser.year} - ${authUser.semester}`}
                                </h2>
                                <LecturesTreeView
                                    semesterCourses={semesterCourses}
                                    lecturesPerSemester={lecturesPerSemester}
                                    displayLectureDetails={
                                        displayLectureDetails
                                    }
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

Lectures.layout = page => <StudentDashboard children={page} />;

export default Lectures;
