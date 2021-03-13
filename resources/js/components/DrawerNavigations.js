import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
const DrawerNavigations = ({ classes, updateNavName, handleDrawerClose }) => {
    const [navigation, setNavigation] = React.useState({
        home: { name: "Home", to: "/dashboard", icon: <HomeOutlinedIcon /> },
        programmes: [
            {
                name: "Programmes",
                icon: <SchoolOutlinedIcon />,
                dropdown: [
                    {
                        name: "Programmes & Courses",
                        to: "/dashboard/programmes-and-courses"
                    },
                    {
                        name: "Manage Programmes",
                        to: "/dashboard/manage-programmes"
                    },
                    {
                        name: "Manage Courses",
                        to: "/dashboard/manage-courses"
                    }
                ]
            }
        ],
        lectures: [
            {
                name: "Lectures",
                icon: <MenuBookOutlinedIcon />,
                dropdown: [
                    {
                        name: "Upload Lecture",
                        to: "/dashboard/upload-lecture"
                    },
                    {
                        name: "Create Assignment",
                        to: "/dashboard/upload-lecture"
                    }
                ]
            }
        ],
        profile: {
            name: "Profile",
            to: "/dashboard/profile",
            icon: <AccountBoxOutlinedIcon />
        },
        signOut: {
            name: "Sign out",
            to: "/logout",
            icon: <ExitToAppOutlinedIcon />
        }
    });
    const [dropdownActiveLink, setDropdownActiveLink] = React.useState("");
    const [navigationIndex, setNavigationIndex] = React.useState(0);
    const [toggleNavDropdown, setToggleNavDropdown] = React.useState({
        programmes: false,
        lectures: false
    });
    const handleNavDropdown = ckey => {
        for (const key in toggleNavDropdown) {
            if (Object.hasOwnProperty.call(toggleNavDropdown, key)) {
                if (key === ckey) {
                    setToggleNavDropdown(state => ({
                        ...state,
                        [ckey]: !state[ckey]
                    }));
                }
                if (key !== ckey) {
                    setToggleNavDropdown(state => ({
                        ...state,
                        [key]: false
                    }));
                }
            }
        }
    };
    const handleNavName = (name, index) => {
        handleDrawerClose();
        name === "Sign out" ? "Home" : updateNavName(name);
        setNavigationIndex(index);
        setDropdownActiveLink("");
    };
    const handleDropdownLinkToggle = index => {
        setNavigationIndex(index);
    };
    const handleDropdownActiveLink = (name, index) => {
        handleDrawerClose();
        name === "Sign out" ? "Home" : updateNavName(name);
        setNavigationIndex(index);
        setDropdownActiveLink(name);
    };
    React.useEffect(() => {
        if (localStorage.getItem("navName")) {
            handleDrawerClose();
            updateNavName(localStorage.getItem("navName"));
            setDropdownActiveLink(localStorage.getItem("navName"));
        }
    }, []);
    return (
        <>
            {Object.keys(navigation).map((key, idx) => (
                <div key={key}>
                    {key === "signOut" && <Divider />}
                    <List>
                        {!Array.isArray(navigation[key]) && key !== "signOut" && (
                            <InertiaLink
                                href={navigation[key].to}
                                onClick={() =>
                                    handleNavName(navigation[key].name, idx)
                                }
                                key={key}
                            >
                                <ListItem
                                    button
                                    selected={navigationIndex === idx}
                                    className={
                                        navigationIndex === idx
                                            ? classes.active
                                            : "nav-link"
                                    }
                                >
                                    <ListItemIcon>
                                        {navigation[key].icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={navigation[key].name}
                                    />
                                </ListItem>
                            </InertiaLink>
                        )}
                        {!Array.isArray(navigation[key]) && key === "signOut" && (
                            <InertiaLink
                                href={navigation[key].to}
                                onClick={() =>
                                    handleNavName(navigation[key].name, idx)
                                }
                                key={key}
                                method="post"
                                as="button"
                                type="button"
                                className="signout-btn"
                            >
                                <ListItem
                                    button
                                    selected={navigationIndex === idx}
                                    className={
                                        navigationIndex === idx
                                            ? classes.active
                                            : "nav-link"
                                    }
                                >
                                    <ListItemIcon>
                                        {navigation[key].icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={navigation[key].name}
                                    />
                                </ListItem>
                            </InertiaLink>
                        )}
                        {Array.isArray(navigation[key]) &&
                            navigation[key].map((nav, index) => (
                                <div key={index + nav.name}>
                                    <ListItem
                                        button
                                        onClick={() => handleNavDropdown(key)}
                                        selected={navigationIndex === idx}
                                        onFocus={() =>
                                            handleDropdownLinkToggle(idx)
                                        }
                                    >
                                        <ListItemIcon>{nav.icon}</ListItemIcon>
                                        <ListItemText primary={nav.name} />
                                        {toggleNavDropdown[key] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItem>
                                    {nav.dropdown.map((d, i) => (
                                        <Collapse
                                            in={toggleNavDropdown[key]}
                                            timeout="auto"
                                            unmountOnExit
                                            key={d.name}
                                        >
                                            <List
                                                component="div"
                                                disablePadding
                                            >
                                                <InertiaLink
                                                    href={d.to}
                                                    onClick={() =>
                                                        handleDropdownActiveLink(
                                                            d.name,
                                                            idx
                                                        )
                                                    }
                                                >
                                                    <ListItem
                                                        button
                                                        selected={
                                                            navigationIndex ===
                                                            d.name
                                                        }
                                                        className={
                                                            (classes.nested,
                                                            dropdownActiveLink ===
                                                            d.name
                                                                ? classes.active
                                                                : "")
                                                        }
                                                    >
                                                        <ListItemText
                                                            primary={d.name}
                                                            className={"ml-4"}
                                                        />
                                                    </ListItem>
                                                </InertiaLink>
                                            </List>
                                        </Collapse>
                                    ))}
                                </div>
                            ))}
                    </List>
                </div>
            ))}
        </>
    );
};

export default DrawerNavigations;
