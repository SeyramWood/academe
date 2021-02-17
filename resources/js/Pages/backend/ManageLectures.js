import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Dashboard from "../../layouts/Dashboard";
import AllLecturesView from "../../components/AllLecturesView";
import { lighten, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import useFormValidation from "../../components/form/useFormValidation";
import DialogComponent from "../../components/DialogComponet";
import { Puff } from "../../components/Spinner";
import SnackbarAlert from "../../components/SnackbarAlert";
import UploadFile from "../../components/UploadFile";

const programmeState = {
    STATE: {
        programme: ""
    },
    RULES: {
        programme: "required|string"
    }
};
const useToolbarStyles = makeStyles(theme => ({
    formWith: { width: "30rem" }
}));
const ManageLectures = ({ programmes, courses }) => {
    const classes = useToolbarStyles();
    const [
        openUpdateProgrammeDialog,
        setUpdateProgrammeDialog
    ] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);

    const {
        state: values,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        handleBlur,
        clearValues,
        setValues,
        setServerErrors
    } = useFormValidation(
        programmeState.STATE,
        programmeState.RULES,
        updateProgramme
    );
    const getProgrammeToUpdate = data => {
        setValues({
            id: data.id,
            programme: data.programme
        });
        setUpdateProgrammeDialog(true);
    };
    const handleUpdateProgramDialogClose = () => {
        setUpdateProgrammeDialog(false);
        clearValues();
        setServerErrors();
    };
    function updateProgramme() {
        Inertia.put(`/dashboard/update-programme`, values, {
            errorBag: "updateProgramme",
            onSuccess: page => {
                setUpdateProgrammeDialog(false);
                clearValues();
                setAlertMessage("Programme updated successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            },
            onError: error => {
                setServerErrors({
                    programme: error.programme
                });
            }
        });
    }
    const deleteProgramme = id => {
        Inertia.delete(`/dashboard/delete-programme/${id}`, {
            onSuccess: page => {
                setAlertMessage("Programme deleted successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            }
        });
    };
    return (
        <>
            <AllLecturesView
                programmes={programmes}
                courses={courses}
                getProgrammeToUpdate={getProgrammeToUpdate}
                deleteProgramme={deleteProgramme}
            />
            <SnackbarAlert message={alertMessage} openAlert={openAlert} />;
            <DialogComponent
                title="Add New Lecture"
                btnText="Save"
                openDialog={openUpdateProgrammeDialog}
                closeDialog={handleUpdateProgramDialogClose}
            >
                <form
                    noValidate
                    autoComplete="off"
                    className="m-2"
                    noValidate
                    className={classes.formWith}
                    onSubmit={handleSubmit}
                >
                    <FormLabel component="legend" className="my-3" required>
                        Enter Programme
                    </FormLabel>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            label="Title"
                            variant="filled"
                            size="small"
                            name="programme"
                            error={
                                errors.programme &&
                                errors.programme.length > 0 &&
                                true
                            }
                            helperText={
                                errors.programme &&
                                errors.programme.length > 0 &&
                                errors.programme
                            }
                            value={values.programme}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormControl>

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

ManageLectures.layout = page => <Dashboard children={page} />;
export default ManageLectures;
