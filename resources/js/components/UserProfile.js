import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
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
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import { Puff, Rings } from "./Spinner";
import useFormValidation from "./form/useFormValidation";
import SnackbarAlert from "./SnackbarAlert";

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
    width: "80%",
    input: {
        display: "none"
    }
}));

const courseState = {
    STATE: {
        surname: "",
        middleName: "",
        otherName: "",
        phone: "",
        gender: ""
    },
    RULES: {
        surname: "required|string",
        middleName: "required|string",
        otherName: "string",
        phone: "string",
        gender: "required|string"
    }
};
const UserProfile = () => {
    const classes = useStyles();
    const { authUser } = usePage().props;
    const [profileForm, setProfileForm] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);
    const [photo, setPhoto] = React.useState(null);
    const [updatingPhoto, setUpdatingPhoto] = React.useState(false);
    const [updatingPhotoError, setUpdatingPhotoError] = React.useState("");
    const initialRender = React.useRef(true);
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
            surname: authUser.surname || "",
            middleName: authUser.middle_name || "",
            otherName: authUser.other_name || "",
            phone: authUser.phone || "",
            gender: authUser.gender || ""
        },
        courseState.RULES,
        updateProfile
    );

    function updateProfile() {
        Inertia.put(`/update-profile`, values, {
            errorBag: "updateProfile",
            onSuccess: page => {
                updateIsSubmitting(false);
                setAlertMessage("Profile updated successfully.");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            },
            onError: error => {
                updateIsSubmitting(false);
                setServerErrors({
                    surname: error.surname || "",
                    middleName: error.middleName || "",
                    otherName: error.otherName || "",
                    phone: error.phone || "",
                    gender: error.gender || ""
                });
            }
        });
    }
    const showProfileForm = () => {
        setProfileForm(state => !state);
        clearValues({
            surname: "",
            middleName: "",
            otherName: "",
            phone: "",
            gender: ""
        });
    };
    const userType = () => {
        const userId = authUser.faculty_id || authUser.student_id;
        const student1 = /^375/;
        const student2 = /^348/;
        const faculty = /^388/;
        if (student1.exec(userId) || student2.exec(userId)) {
            return "student";
        } else if (faculty.exec(userId)) {
            return "faculty";
        }
    };

    const updatePhoto = e => {
        setUpdatingPhoto(true);
        const photo = e.target.files[0];
        const formData = new FormData();
        formData.append("profilePhoto", photo);
        Inertia.post(`/update-profile-photo`, formData, {
            errorBag: "updateProfilePhoto",
            onSuccess: page => {
                setUpdatingPhoto(false);
                setAlertMessage("Photo updated successfully.");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            },
            onError: error => {
                setUpdatingPhoto(false);
                setUpdatingPhotoError(error.profilePhoto || "");
            }
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
                        <Collapse in={profileForm}>
                            <div className="student-courses-register">
                                <form
                                    noValidate
                                    autoComplete="off"
                                    className="m-2"
                                    className={classes.formWith}
                                    onSubmit={handleSubmit}
                                >
                                    <h2 className="programs-details__title secondary">
                                        Edit Profile
                                    </h2>

                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Surname
                                    </FormLabel>
                                    <FormControl fullWidth variant="outlined">
                                        <TextField
                                            label="Enter surname"
                                            id="surname"
                                            variant="filled"
                                            size="small"
                                            name="surname"
                                            error={
                                                errors.surname &&
                                                errors.surname.length > 0 &&
                                                true
                                            }
                                            helperText={
                                                errors.surname &&
                                                errors.surname.length > 0 &&
                                                errors.surname
                                            }
                                            value={values.surname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormControl>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Middle Name
                                    </FormLabel>
                                    <FormControl fullWidth variant="outlined">
                                        <TextField
                                            label="Enter middle name"
                                            id="middle-name"
                                            variant="filled"
                                            size="small"
                                            name="middleName"
                                            error={
                                                errors.middleName &&
                                                errors.middleName.length > 0 &&
                                                true
                                            }
                                            helperText={
                                                errors.middleName &&
                                                errors.middleName.length > 0 &&
                                                errors.middleName
                                            }
                                            value={values.middleName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormControl>

                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                    >
                                        Other Name
                                    </FormLabel>
                                    <FormControl fullWidth variant="outlined">
                                        <TextField
                                            label="Enter other name"
                                            id="other-name"
                                            variant="filled"
                                            size="small"
                                            name="otherName"
                                            error={
                                                errors.otherName &&
                                                errors.otherName.length > 0 &&
                                                true
                                            }
                                            helperText={
                                                errors.otherName &&
                                                errors.otherName.length > 0 &&
                                                errors.otherName
                                            }
                                            value={values.otherName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormControl>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                    >
                                        Phone
                                    </FormLabel>
                                    <FormControl fullWidth variant="outlined">
                                        <TextField
                                            label="Enter phone"
                                            id="phone"
                                            variant="filled"
                                            size="small"
                                            name="phone"
                                            error={
                                                errors.phone &&
                                                errors.phone.length > 0 &&
                                                true
                                            }
                                            helperText={
                                                errors.phone &&
                                                errors.phone.length > 0 &&
                                                errors.phone
                                            }
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormControl>
                                    <FormLabel
                                        component="legend"
                                        className="my-3"
                                        required
                                    >
                                        Gender
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        name="gender"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <FormControlLabel
                                            label="Male"
                                            value="Male"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.gender === "Male"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            label="Female"
                                            value="Female"
                                            control={
                                                <Radio
                                                    color="primary"
                                                    checked={
                                                        values.gender ===
                                                        "Fmale"
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            }
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                    <FormHelperText className="error">
                                        {errors.gender &&
                                            errors.gender.length > 0 &&
                                            errors.gender}
                                    </FormHelperText>
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
                                                    ? "Saving..."
                                                    : "Save"}
                                            </span>
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            type="button"
                                            disabled={isSubmitting}
                                            onClick={showProfileForm}
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
                                        Profile View
                                    </h2>
                                    <Tooltip title="Edit Profile">
                                        <IconButton
                                            aria-label="edit profile"
                                            component="span"
                                            onClick={showProfileForm}
                                        >
                                            <EditOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={3}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-end"
                                            alignItems="flex-start"
                                        >
                                            <div className="profile__image__wrapper mt-3">
                                                <div className="profile__image">
                                                    {userType() ===
                                                        "faculty" && (
                                                        <img
                                                            src={`/storage/avatar/lecturers/${authUser.avatar}`}
                                                            alt="Profile Image"
                                                        />
                                                    )}
                                                    {userType() ===
                                                        "student" && (
                                                        <img
                                                            src={`/storage/avatar/students/${authUser.avatar}`}
                                                            alt="Profile Image"
                                                        />
                                                    )}
                                                </div>
                                                {updatingPhoto && (
                                                    <div className="profile__image__overlay">
                                                        <Rings
                                                            size={30}
                                                            color="#fff"
                                                            visible={true}
                                                        />
                                                        <p>Updating...</p>
                                                    </div>
                                                )}
                                            </div>

                                            <input
                                                accept="image/*"
                                                className={classes.input}
                                                id="icon-button-file"
                                                type="file"
                                                onChange={updatePhoto}
                                            />
                                            <Tooltip title="Update Photo">
                                                <label htmlFor="icon-button-file">
                                                    <IconButton
                                                        aria-label="upload picture"
                                                        component="span"
                                                    >
                                                        <CameraAltOutlinedIcon />
                                                    </IconButton>
                                                </label>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <div className={classes.demo}>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                User ID
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            {userType() ===
                                                                "student" && (
                                                                <p>
                                                                    {`${authUser.student_id ||
                                                                        "N/A"}`}
                                                                </p>
                                                            )}
                                                            {userType() ===
                                                                "faculty" && (
                                                                <p>
                                                                    {`${authUser.faculty_id ||
                                                                        "N/A"}`}
                                                                </p>
                                                            )}
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                            <List dense={true}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={3}>
                                                        <ListItem>
                                                            <h4 className="programs-details__title black">
                                                                Full Name
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {`${authUser.surname ||
                                                                    "N/A"} ${authUser.middle_name ||
                                                                    ""} ${authUser.other_name ||
                                                                    ""}`}
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
                                                                Phone
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {`${authUser.phone ||
                                                                    "N/A"}`}
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
                                                                Gender
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {`${authUser.gender ||
                                                                    "N/A"}`}
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
                                                                Email
                                                            </h4>
                                                        </ListItem>
                                                    </Grid>
                                                    <Grid item xs={12} sm={9}>
                                                        <ListItem>
                                                            <p>
                                                                {`${authUser.email ||
                                                                    "N/A"}`}
                                                            </p>
                                                        </ListItem>
                                                    </Grid>
                                                </Grid>
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </div>
                </Grid>
            </div>
        </>
    );
};
export default UserProfile;
