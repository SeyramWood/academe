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
        signOut: {
            name: "Sign out",
            to: "/logout",
            icon: <ExitToAppOutlinedIcon />
        }
    });
    const [dropdownActiveLink, setDropdownActiveLink] = React.useState("");
    const [navigationIndex, setNavigationIndex] = React.useState(0);
    const [toggleNavDropdown, setToggleNavDropdown] = React.useState(false);
    const [toggleNavDropdown1, setToggleNavDropdown1] = React.useState(false);
    const handleNavDropdown = () => {
        setToggleNavDropdown(!toggleNavDropdown);
        setToggleNavDropdown1(false);
    };
    const handleNavDropdown1 = () => {
        setToggleNavDropdown1(!toggleNavDropdown1);
        setToggleNavDropdown(false);
    };

    const handleNavName = (name, index) => {
        handleDrawerClose();
        updateNavName(name);
        setNavigationIndex(index);
        setDropdownActiveLink("");
        setToggleNavDropdown(false);
        setToggleNavDropdown1(false);
    };
    const handleDropdownLinkToggle = index => {
        setNavigationIndex(index);
    };
    const handleDropdownActiveLink = (name, index) => {
        handleDrawerClose();
        updateNavName(name);
        setNavigationIndex(index);
        setDropdownActiveLink(name);
    };
    return (
        <>
            {Object.keys(navigation).map((key, idx) => (
                <List key={idx}>
                    {key === "home" && (
                        <InertiaLink
                            href={navigation[`${key}`].to}
                            onClick={() =>
                                handleNavName(navigation[`${key}`].name, idx)
                            }
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
                                    {navigation[`${key}`].icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={navigation[`${key}`].name}
                                />
                            </ListItem>
                        </InertiaLink>
                    )}
                    {key === "programmes" &&
                        navigation[`${key}`].map((nav, index) => (
                            <div key={index}>
                                <ListItem
                                    button
                                    key={index}
                                    onClick={handleNavDropdown}
                                    selected={navigationIndex === idx}
                                    onFocus={() =>
                                        handleDropdownLinkToggle(idx)
                                    }
                                >
                                    <ListItemIcon>{nav.icon}</ListItemIcon>
                                    <ListItemText primary={nav.name} />
                                    {toggleNavDropdown ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItem>
                                {nav.dropdown.map((d, i) => (
                                    <Collapse
                                        in={toggleNavDropdown}
                                        timeout="auto"
                                        unmountOnExit
                                        key={i.toString()}
                                    >
                                        <List component="div" disablePadding>
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
                    {key === "lectures" &&
                        navigation[`${key}`].map((nav, index) => (
                            <div key={index}>
                                <ListItem
                                    button
                                    key={index}
                                    onClick={handleNavDropdown1}
                                    selected={navigationIndex === idx}
                                    onFocus={() =>
                                        handleDropdownLinkToggle(idx)
                                    }
                                >
                                    <ListItemIcon>{nav.icon}</ListItemIcon>
                                    <ListItemText primary={nav.name} />
                                    {toggleNavDropdown1 ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItem>
                                {nav.dropdown.map((d, i) => (
                                    <Collapse
                                        in={toggleNavDropdown1}
                                        timeout="auto"
                                        unmountOnExit
                                        key={i.toString()}
                                    >
                                        <List component="div" disablePadding>
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
            ))}

            <Divider />
            {Object.keys(navigation).map((key, idx) => (
                <List key={idx}>
                    {key === "signOut" && (
                        <InertiaLink
                            href={navigation[`${key}`].to}
                            onClick={() => handleNavName("", idx)}
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
                                    {navigation[`${key}`].icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={navigation[`${key}`].name}
                                />
                            </ListItem>
                        </InertiaLink>
                    )}
                </List>
            ))}
        </>
    );
};

export default DrawerNavigations;
