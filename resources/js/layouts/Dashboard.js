import { Inertia } from "@inertiajs/inertia";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import DrawerNavigations from "../components/DrawerNavigations";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexGrow: 1
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth,
        backgroundColor: "#c6d1d86b",
        minHeight: "100vh"
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500]
    },
    avaterSmall: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    active: { color: "rgb(233, 99, 3)" }
}));

const Dashboard = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    React.useEffect(() => {
        if (!localStorage.getItem("navName")) {
            localStorage.setItem("navName", "Home");
        }
    }, []);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [profilePopper, setProfilePopper] = React.useState(false);
    const [notificationPopper, setNotificationPopper] = React.useState(false);
    const [navName, setNavName] = React.useState(
        localStorage.getItem("navName")
    );

    const updateNavName = nav => {
        setNavName(nav);
        nav && localStorage.setItem("navName", nav);
    };
    const handleDrawerOpen = () => setOpenDrawer(true);

    const handleDrawerClose = () => setOpenDrawer(false);

    const profilePopperRef = React.useRef(null);
    const notificationPopperRef = React.useRef(null);

    const toggleProfilePopper = () => {
        setProfilePopper(prevProfilePopperOpen => !prevProfilePopperOpen);
    };
    const toggleNotificationPopper = () => {
        setNotificationPopper(
            prevNotificationPopperOpen => !prevNotificationPopperOpen
        );
    };

    const handleProfilePopper = event => {
        if (
            profilePopperRef.current &&
            profilePopperRef.current.contains(event.target)
        ) {
            return;
        }

        setProfilePopper(false);
    };
    const handleNotificationPopper = event => {
        if (
            notificationPopperRef.current &&
            notificationPopperRef.current.contains(event.target)
        ) {
            return;
        }
        setNotificationPopper(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevProfilePopperOpen = React.useRef(profilePopper);
    const prevNotificationPopperOpen = React.useRef(notificationPopper);
    React.useEffect(() => {
        if (prevProfilePopperOpen.current === true && profilePopper === false) {
            profilePopperRef.current.focus();
        }
        if (
            prevNotificationPopperOpen.current === true &&
            notificationPopper === false
        ) {
            notificationPopperRef.current.focus();
        }
        prevProfilePopperOpen.current = profilePopper;
        prevNotificationPopperOpen.current = profilePopper;
    }, [profilePopper, notificationPopper, navName]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openDrawer
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            openDrawer && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="toolbar">
                        <Typography
                            variant="h6"
                            noWrap
                            className={classes.active}
                        >
                            {navName}
                        </Typography>

                        <div className="app-toolbar">
                            <Tooltip title="Notifications">
                                <IconButton
                                    aria-label="Toggle notifications"
                                    onClick={toggleNotificationPopper}
                                    ref={notificationPopperRef}
                                    aria-controls={
                                        profilePopper
                                            ? "menu-list-grow"
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <Badge badgeContent={100} color="secondary">
                                        <NotificationsOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Profile">
                                <a
                                    className="current-user"
                                    onClick={toggleProfilePopper}
                                    ref={profilePopperRef}
                                    aria-controls={
                                        profilePopper
                                            ? "menu-list-grow"
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <div className="current-user__image">
                                        <Avatar
                                            alt="Seyram Wood"
                                            src="/storage/avatar/students/sey.jpg"
                                            className={classes.avatarSmall}
                                        >
                                            SW
                                        </Avatar>
                                    </div>
                                    <span className="current-user__name">
                                        Seyram Wood Prikah
                                    </span>
                                </a>
                            </Tooltip>
                            <Popper
                                open={profilePopper}
                                anchorEl={profilePopperRef.current}
                                role={undefined}
                                transition
                                disablePortal
                                placement="bottom-end"
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom"
                                                    ? "center top"
                                                    : "center bottom"
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener
                                                onClickAway={
                                                    handleProfilePopper
                                                }
                                            >
                                                <MenuList
                                                    autoFocusItem={
                                                        profilePopper
                                                    }
                                                    id="menu-list-grow"
                                                >
                                                    <MenuItem
                                                        onClick={
                                                            handleProfilePopper
                                                        }
                                                    >
                                                        Profile
                                                    </MenuItem>

                                                    <MenuItem
                                                        onClick={
                                                            handleProfilePopper
                                                        }
                                                    >
                                                        Logout
                                                    </MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                            <Popper
                                open={notificationPopper}
                                anchorEl={notificationPopperRef.current}
                                role={undefined}
                                transition
                                disablePortal
                                placement="bottom-end"
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom"
                                                    ? "center top"
                                                    : "center bottom"
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener
                                                onClickAway={
                                                    handleNotificationPopper
                                                }
                                            >
                                                <MenuList
                                                    autoFocusItem={
                                                        profilePopper
                                                    }
                                                    id="menu-list-grow"
                                                >
                                                    <MenuItem
                                                        onClick={
                                                            handleNotificationPopper
                                                        }
                                                    >
                                                        Profile
                                                    </MenuItem>

                                                    <MenuItem
                                                        onClick={
                                                            handleNotificationPopper
                                                        }
                                                    >
                                                        Logout
                                                    </MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={openDrawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <div className="uni-logo-box">
                        <img src="/storage/logo/lancaster-3.png" alt="" />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <DrawerNavigations
                    classes={classes}
                    updateNavName={updateNavName}
                    handleDrawerClose={handleDrawerClose}
                />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: openDrawer
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
};

export default Dashboard;
