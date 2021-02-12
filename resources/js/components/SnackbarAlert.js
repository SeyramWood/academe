import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SnackbarAlert = ({
    message = "Alert",
    type = "success",
    openAlert = false
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={openAlert}
        >
            <Alert severity={type}>{message}</Alert>
        </Snackbar>
    );
};

export default SnackbarAlert;
