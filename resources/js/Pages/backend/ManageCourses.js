import { Inertia } from "@inertiajs/inertia";
import React from "react";
import axios from "axios";
import Dashboard from "../../layouts/Dashboard";
import AllCoursesView from "../../components/AllCoursesView";
import { lighten, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import useFormValidation from "../../components/form/useFormValidation";
import DialogComponent from "../../components/DialogComponet";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Puff } from "../../components/Spinner";
import SnackbarAlert from "../../components/SnackbarAlert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const courseState = {
    STATE: {
        programme: "",
        courseTitle: "",
        courseCode: "",
        semester: "",
        year: ""
    },
    RULES: {
        programme: "required|numeric",
        courseTitle: "required|string",
        courseCode: "required|string",
        semester: "required|string",
        year: "required|string"
    }
};
const useToolbarStyles = makeStyles(theme => ({
    formWith: { width: "30rem" },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff"
    }
}));

const ManageCourses = ({ courses, programmes }) => {
    const classes = useToolbarStyles();

    const [openUpdateCourseDialog, setUpdateCourseDialog] = React.useState(
        false
    );
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);
    const [filterCourses, setFilterCourses] = React.useState({
        response: [],
        loading: false
    });

    const {
        state: values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        clearValues,
        setValues,
        setServerErrors
    } = useFormValidation(courseState.STATE, courseState.RULES, updateCourse);

    const getCourseToUpdate = data => {
        setValues({
            id: data.id,
            programme: data.p_id,
            courseTitle: data.title,
            courseCode: data.code,
            semester: data.semester,
            year: data.year
        });
        setUpdateCourseDialog(true);
    };

    const handleUpdateCourseDialogClose = () => {
        setUpdateCourseDialog(false);
        clearValues();
        setServerErrors();
    };
    function updateCourse() {
        Inertia.put(`/dashboard/update-course`, values, {
            errorBag: "updateCourse",
            onSuccess: page => {
                setUpdateCourseDialog(false);
                clearValues();
                setAlertMessage("Course updated successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            },
            onError: error => {
                setServerErrors({
                    programme: error.programme,
                    courseTitle: error.courseTitle,
                    courseCode: error.courseCode,
                    semester: error.semester,
                    year: error.year
                });
            }
        });
    }
    const deleteCourse = id => {
        Inertia.delete(`/dashboard/delete-course/${id}`, {
            onSuccess: page => {
                setAlertMessage("Course deleted successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            }
        });
    };
    const handleFilterCourse = async key => {
        setFilterCourses({ response: [], loading: true });
        const res = await axios.get(`/dashboard/get-courses/${key}`);
        setFilterCourses({ response: res.data, loading: false });
    };

    return (
        <>
            <AllCoursesView
                allPrograms={programmes}
                courses={
                    filterCourses.response.length > 0
                        ? filterCourses.response
                        : courses
                }
                getCourseToUpdate={getCourseToUpdate}
                deleteCourse={deleteCourse}
                handleFilterCourse={handleFilterCourse}
            />
            <Backdrop className={classes.backdrop} open={filterCourses.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <SnackbarAlert message={alertMessage} openAlert={openAlert} />;
            <DialogComponent
                title="Update Course"
                openDialog={openUpdateCourseDialog}
                closeDialog={handleUpdateCourseDialogClose}
            >
                <form
                    noValidate
                    autoComplete="off"
                    className="m-2"
                    className={classes.formWith}
                    onSubmit={handleSubmit}
                >
                    <FormLabel component="legend" className="my-3" required>
                        Select Program
                    </FormLabel>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel
                            id="demo-simple-select-filled-label"
                            className={
                                errors.programme && errors.programme.length > 0
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {programmes.map(p => (
                                <MenuItem value={p.id} key={p.id.toString()}>
                                    {p.name}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText className="error">
                            {errors.programme}
                        </FormHelperText>
                    </FormControl>
                    <FormLabel component="legend" className="my-3" required>
                        Enter Course Title
                    </FormLabel>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            label="Course Title"
                            variant="filled"
                            size="small"
                            name="courseTitle"
                            error={
                                errors.courseTitle &&
                                errors.courseTitle.length > 0 &&
                                true
                            }
                            helperText={
                                errors.courseTitle &&
                                errors.courseTitle.length > 0 &&
                                errors.courseTitle
                            }
                            value={values.courseTitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormControl>
                    <FormLabel component="legend" className="my-3" required>
                        Enter Course Code
                    </FormLabel>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            label="Course Code"
                            variant="filled"
                            size="small"
                            name="courseCode"
                            error={
                                errors.courseCode &&
                                errors.courseCode.length > 0 &&
                                true
                            }
                            helperText={
                                errors.courseCode &&
                                errors.courseCode.length > 0 &&
                                errors.courseCode
                            }
                            value={values.courseCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormControl>
                    <FormLabel component="legend" className="my-3" required>
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
                                        values.semester === "First Semester"
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
                                        values.semester === "Second Semester"
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
                    <FormLabel component="legend" className="my-3" required>
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
                                        values.year === "Year 1" ? true : false
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
                                        values.year === "Year 2" ? true : false
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
                                        values.year === "Year 3" ? true : false
                                    }
                                />
                            }
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    <FormHelperText className="error">
                        {errors.year && errors.year.length > 0 && errors.year}
                    </FormHelperText>
                    <FormLabel component="legend" className="my-3">
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
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </span>
                        </Button>
                    </div>
                </form>
            </DialogComponent>
        </>
    );
};

ManageCourses.layout = page => <Dashboard children={page} />;

export default ManageCourses;
