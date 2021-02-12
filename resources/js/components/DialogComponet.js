import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Tooltip from "@material-ui/core/Tooltip";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const DialogComponent = ({ openDialog, closeDialog, title, children }) => {
    return (
        <div>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div className="dialog-title">
                        <span>{title}</span>
                        <span>
                            <Tooltip title="Close dialog">
                                <IconButton
                                    color="secondary"
                                    onClick={() => closeDialog()}
                                >
                                    <CloseOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </span>
                    </div>
                </DialogTitle>
                <DialogContent>{children}</DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogComponent;
