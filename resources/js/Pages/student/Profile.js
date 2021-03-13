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

import { Puff } from "../../components/Spinner";
import useFormValidation from "../../components/form/useFormValidation";
import SnackbarAlert from "../../components/SnackbarAlert";

import StudentDashboard from "../../layouts/StudentDashboard";
import UserProfile from "../../components/UserProfile";
const Profile = () => {
    const updateProfile = values => {
        Inertia.post(`/update-profile/${authUser.id}`, values, {
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
                setServerErrors({
                    surname: error.surname || "",
                    middleName: error.middleName || "",
                    otherName: error.otherName || "",
                    phone: error.phone || "",
                    gender: error.gender || ""
                });
            }
        });
    };
    return <UserProfile updateProfile={updateProfile} />;
};
Profile.layout = page => <StudentDashboard children={page} />;
export default Profile;
