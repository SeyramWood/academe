import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import StudentDashboard from "../../layouts/StudentDashboard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Puff } from "../../components/Spinner";
import useFormValidation from "../../components/form/useFormValidation";
import SnackbarAlert from "../../components/SnackbarAlert";

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
    },
    width: "80%"
}));

const courseState = {
    STATE: {
        programme: "",
        semester: "",
        year: ""
    },
    RULES: {
        programme: "required|numeric",
        semester: "required|string",
        year: "required|string"
    }
};
const Courses = ({ programmes, semesterCourses }) => {
    const classes = useStyles();
    const { authUser } = usePage().props;
    const [registerForm, setRegisterForm] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);
    const {
        state: values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        updateIsSubmitting,
        errors,
        clearValues,
        setServerErrors
    } = useFormValidation(
        {
            ...courseState.STATE,
            programme: authUser.programme_id || "",
            semester: authUser.semester || "",
            year: authUser.year || ""
        },
        courseState.RULES,
        registerCourse
    );

    function registerCourse() {
        Inertia.post("/dashboard/student/register-course", values, {
            errorBag: "registerCourse",
            onSuccess: page => {
                updateIsSubmitting(false);
                setAlertMessage("Registration successfully done.");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            },
            onError: error => {
                setServerErrors({
                    programme: error.programme,
                    semester: error.semester,
                    year: error.year
                });
            }
        });
    }
    const showRegisterForm = () => {
        setRegisterForm(state => !state);
        clearValues({
            programme: "",
            semester: "",
            year: ""
        });
    };
    return (
        <>
            <SnackbarAlert message={alertMessage} openAlert={openAlert} />;
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <div className="student-courses">
                        <Collapse in={registerForm}>
                            <div className="student-courses-register">
                                <form
                                    noValidate
                                    autoComplete="off"
                                    className="m-2"
                                    className={classes.formWith}
                                    onSubmit={handleSubmit}
                                >
                                    <h2 className="programs-details__title secondary">
                                        Course Registraion
                                    </h2>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Select Program
                                    </FormLabel>
                                    <FormControl variant="filled" fullWidth>
                                        <InputLabel
                                            id="demo-simple-select-filled-label"
                                            className={
                                                errors.programme &&
                                                errors.programme.length > 0
                                                    ? "error"
                                                    : ""
                                            }
                                        >
                                            Programme
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            name="programme"
                                            error={
                                                errors.programme &&
                                                errors.programme.length > 0 &&
                                                true
                                            }
                                            value={values.programme}
                                            defaultValue={"ioighiodhgoi"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={
                                                authUser.programme_id && true
                                            }
                                        >
                                            {programmes.map(p => (
                                                <MenuItem
                                                    value={p.id}
                                                    key={p.id.toString()}
                                                >
                                                    {p.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText className="error">
                                            {errors.programme}
                                        </FormHelperText>
                                    </FormControl>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Select Semester
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="semester"
                                        name="semester"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <FormControlLabel
                                            label="First Semester"
                                            value="First Semester"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.semester ===
                                                        "First Semester"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            label="Second Semester"
                                            value="Second Semester"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.semester ===
                                                        "Second Semester"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                    <FormHelperText className="error">
                                        {errors.semester &&
                                            errors.semester.length > 0 &&
                                            errors.semester}
                                    </FormHelperText>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Select Year
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="year"
                                        name="year"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <FormControlLabel
                                            label="Year 1"
                                            value="Year 1"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.year === "Year 1"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            label="Year 2"
                                            value="Year 2"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.year === "Year 2"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            label="Year 3"
                                            value="Year 3"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.year === "Year 3"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                    <FormHelperText className="error">
                                        {errors.year &&
                                            errors.year.length > 0 &&
                                            errors.year}
                                    </FormHelperText>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                    >
                                        Required fields (*)
                                    </FormLabel>
                                    <div className="my-3 submit-btn-wrapper btn-right">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            <Puff
                                                size={20}
                                                color="#3f51b5"
                                                visible={isSubmitting}
                                            />
                                            <span>
                                                {isSubmitting
                                                    ? "Submitting..."
                                                    : "Submit"}
                                            </span>
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            type="button"
                                            disabled={isSubmitting}
                                            onClick={showRegisterForm}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </Collapse>
                        <Paper className={classes.paper}>
                            <div className="programs-details">
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <h2 className="programs-details__title secondary">
                                        {`${authUser.year} - ${authUser.semester}`}
                                    </h2>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={showRegisterForm}
                                    >
                                        Register Courses
                                    </Button>
                                </Grid>
                                <Grid container>
                                    {semesterCourses.length > 0 && (
                                        <List dense={true}>
                                            {semesterCourses.map(c => (
                                                <ListItem key={c.id.toString()}>
                                                    <ListItemText
                                                        primary={c.title}
                                                        secondary={`Course Code :: ${c.code}`}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    )}
                                    {!semesterCourses.length > 0 && (
                                        <p style={{ textAlign: "center" }}>
                                            No avaialable registered courses.
                                            Please click the button above to
                                            register!
                                        </p>
                                    )}
                                </Grid>
                            </div>
                        </Paper>
                    </div>
                </Grid>
            </div>
        </>
    );
};
Courses.layout = page => <StudentDashboard children={page} />;
export default Courses;
