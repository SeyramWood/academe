import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Puff } from "../Spinner";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.paper
    },
    formWidth: "100%",
    inline: {
        display: "inline"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

export default function AlignItemsList() {
    const classes = useStyles();

    return (
        <section className="comment-wrapper">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                        />
                    </ListItemAvatar>
                    <form
                        noValidate
                        autoComplete="off"
                        className=""
                        style={{ width: "100%" }}
                    >
                        <FormControl fullWidth>
                            <TextField
                                id="standard-textarea"
                                placeholder="Placeholder"
                                multiline
                            />
                        </FormControl>
                        <div className="my-3 submit-btn-wrapper btn-right">
                            <Button>Cancel</Button>
                            &nbsp;&nbsp;
                            <Button
                                variant="outlined"
                                color="primary"
                                type="submit"
                            >
                                Comment
                            </Button>
                        </div>
                    </form>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <div className="comment">
                        <div className="comment__head">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {
                                            "I'll be in your neighborhood doing errands this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </div>
                        <div className="comment__body">
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {
                                    "I'll be in your neighborhood doing errands this…"
                                }
                            </Typography>
                            <p className="mt-3">
                                <Chip
                                    size="small"
                                    label="Reply"
                                    onClick={() => console.log("clicked")}
                                    color="primary"
                                />
                                &nbsp;&nbsp;
                                <Chip
                                    size="small"
                                    label="View Replies"
                                    onClick={() => console.log("clicked")}
                                />
                            </p>
                            <section className="comment-reply">
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Travis Howard"
                                                src="/static/images/avatar/2.jpg"
                                                className={classes.small}
                                            />
                                        </ListItemAvatar>
                                        {
                                            <form
                                                noValidate
                                                autoComplete="off"
                                                className=""
                                                style={{ width: "100%" }}
                                            >
                                                <FormControl fullWidth>
                                                    <TextField
                                                        id="standard-textarea"
                                                        placeholder="Placeholder"
                                                        multiline
                                                    />
                                                </FormControl>
                                                <div className="my-3 submit-btn-wrapper btn-right">
                                                    <Button>Cancel</Button>
                                                    &nbsp;&nbsp;
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Reply
                                                    </Button>
                                                </div>
                                            </form>
                                        }
                                    </ListItem>
                                    <ListItem alignItems="flex-start">
                                        <section className="comment-reply-replies">
                                            <div className="comment-reply-replies__head">
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt="Travis Howard"
                                                        src="/static/images/avatar/2.jpg"
                                                        className={
                                                            classes.small
                                                        }
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={
                                                                    classes.inline
                                                                }
                                                                color="textPrimary"
                                                            >
                                                                Ali Connors
                                                            </Typography>
                                                            {
                                                                "I'll be in your neighborhood doing errands this…"
                                                            }
                                                        </React.Fragment>
                                                    }
                                                />
                                            </div>
                                            <div className="comment-reply-replies__body">
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {
                                                        "I'll be in your neighborhood doing errands this…"
                                                    }
                                                </Typography>
                                            </div>
                                        </section>
                                    </ListItem>
                                </List>
                            </section>
                        </div>
                    </div>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </section>
    );
}
