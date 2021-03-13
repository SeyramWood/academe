import React from "react";
import StudentDashboard from "../../layouts/StudentDashboard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import Fab from "@material-ui/core/Fab";
import {
    G2,
    Chart,
    Tooltip,
    Interval,
    Interaction,
    LineAdvance,
    Axis,
    Coordinate,
    Line,
    Point
} from "bizcharts";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

const data = [
    { name: "London", month: "Jan.", avgRainfall: 18.9 },
    { name: "London", month: "Feb.", avgRainfall: 28.8 },
    { name: "London", month: "Mar.", avgRainfall: 39.3 },
    { name: "London", month: "Apr.", avgRainfall: 20.4 },
    { name: "London", month: "May", avgRainfall: 47 },
    { name: "London", month: "Jun.", avgRainfall: 20.3 },
    { name: "London", month: "Jul.", avgRainfall: 24 },
    { name: "London", month: "Aug.", avgRainfall: null },
    { name: "Paris", month: "Jan.", avgRainfall: 19.9 },
    { name: "Paris", month: "Feb.", avgRainfall: 28.8 },
    { name: "Paris", month: "Mar.", avgRainfall: 29.3 },
    { name: "Paris", month: "Apr.", avgRainfall: null },
    { name: "Paris", month: "May", avgRainfall: 67 },
    { name: "Paris", month: "Jun.", avgRainfall: null },
    { name: "Paris", month: "Jul.", avgRainfall: 23 },
    { name: "Paris", month: "Aug.", avgRainfall: null },
    { name: "Berlin", month: "Jan.", avgRainfall: 12.4 },
    { name: "Berlin", month: "Feb.", avgRainfall: 23.2 },
    { name: "Berlin", month: "Mar.", avgRainfall: 34.5 },
    { name: "Berlin", month: "Apr.", avgRainfall: null },
    { name: "Berlin", month: "May", avgRainfall: 52.6 },
    { name: "Berlin", month: "Jun.", avgRainfall: 35.5 },
    { name: "Berlin", month: "Jul.", avgRainfall: 37.4 },
    { name: "Berlin", month: "Aug.", avgRainfall: 42.4 }
];

const data2 = [
    {
        month: "Jan",
        city: "Tokyo",
        temperature: 7
    },
    {
        month: "Jan",
        city: "London",
        temperature: 3.9
    },
    {
        month: "Feb",
        city: "Tokyo",
        temperature: 13
    },
    {
        month: "Feb",
        city: "London",
        temperature: 4.2
    },
    {
        month: "Mar",
        city: "Tokyo",
        temperature: 16.5
    },
    {
        month: "Mar",
        city: "London",
        temperature: 5.7
    },
    {
        month: "Apr",
        city: "Tokyo",
        temperature: 14.5
    },
    {
        month: "Apr",
        city: "London",
        temperature: 8.5
    },
    {
        month: "May",
        city: "Tokyo",
        temperature: 10
    },
    {
        month: "May",
        city: "London",
        temperature: 11.9
    },
    {
        month: "Jun",
        city: "Tokyo",
        temperature: 7.5
    },
    {
        month: "Jun",
        city: "London",
        temperature: 15.2
    },
    {
        month: "Jul",
        city: "Tokyo",
        temperature: 9.2
    },
    {
        month: "Jul",
        city: "London",
        temperature: 17
    },
    {
        month: "Aug",
        city: "Tokyo",
        temperature: 14.5
    },
    {
        month: "Aug",
        city: "London",
        temperature: 16.6
    },
    {
        month: "Sep",
        city: "Tokyo",
        temperature: 9.3
    },
    {
        month: "Sep",
        city: "London",
        temperature: 14.2
    },
    {
        month: "Oct",
        city: "Tokyo",
        temperature: 8.3
    },
    {
        month: "Oct",
        city: "London",
        temperature: 10.3
    },
    {
        month: "Nov",
        city: "Tokyo",
        temperature: 8.9
    },
    {
        month: "Nov",
        city: "London",
        temperature: 5.6
    },
    {
        month: "Dec",
        city: "Tokyo",
        temperature: 5.6
    },
    {
        month: "Dec",
        city: "London",
        temperature: 9.8
    }
];

const data3 = [
    { month: "2015-01-01", acc: 84.0 },
    { month: "2015-02-01", acc: 14.9 },
    { month: "2015-03-01", acc: 17.0 },
    { month: "2015-04-01", acc: 20.2 },
    { month: "2015-05-01", acc: 55.6 },
    { month: "2015-06-01", acc: 56.7 },
    { month: "2015-07-01", acc: 30.6 },
    { month: "2015-08-01", acc: 63.2 },
    { month: "2015-09-01", acc: 24.6 },
    { month: "2015-10-01", acc: 14.0 },
    { month: "2015-11-01", acc: 9.4 },
    { month: "2015-12-01", acc: 7.3 }
];

const data4 = [
    { year: "2001", population: 41.8 },
    { year: "2002", population: 38 },
    { year: "2003", population: 33.7 },
    { year: "2004", population: 30.7 },
    { year: "2005", population: 25.8 },
    { year: "2006", population: 31.7 },
    { year: "2007", population: 33 },
    { year: "2008", population: 46 },
    { year: "2009", population: 38.3 },
    { year: "2010", population: 28 },
    { year: "2011", population: 42.5 },
    { year: "2012", population: 30.3 }
];

const Home = ({ user }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <div className="dashboard-summary">
                            <div>
                                <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="like"
                                >
                                    <AccountBalanceOutlinedIcon />
                                </Fab>
                            </div>
                            <div>
                                <p>123</p>
                                <p>Lectures</p>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <div className="dashboard-summary">
                            <div>
                                <Fab
                                    size="small"
                                    color="primary"
                                    aria-label="like"
                                >
                                    <AccountBalanceOutlinedIcon />
                                </Fab>
                            </div>
                            <div>
                                <p>123</p>
                                <p>Assignments</p>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <div className="dashboard-summary">
                            <div>
                                <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="like"
                                >
                                    <AccountBalanceOutlinedIcon />
                                </Fab>
                            </div>
                            <div>
                                <p>123</p>
                                <p>Total Teachers</p>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <div className="dashboard-summary">
                            <div>
                                <Fab
                                    size="small"
                                    color="primary"
                                    aria-label="like"
                                >
                                    <AccountBalanceOutlinedIcon />
                                </Fab>
                            </div>
                            <div>
                                <p>123</p>
                                <p>Total Attendance</p>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

Home.layout = page => <StudentDashboard children={page} />;

export default Home;
