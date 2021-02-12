import { Inertia } from "@inertiajs/inertia";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import DialogComponent from "./DialogComponet";
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
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import { Puff } from "./Spinner";
import useFormValidation from "./form/useFormValidation";
import SnackbarAlert from "./SnackbarAlert";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function createData(id, p_id, title, code, semester, year, programme) {
    return { id, p_id, title, code, semester, year, programme };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const headCells = [
    {
        id: "id",
        numeric: false,
        disablePadding: true,
        label: "#ID"
    },
    {
        id: "course-title",
        numeric: false,
        disablePadding: false,
        label: "Course Title"
    },
    {
        id: "course-code",
        numeric: false,
        disablePadding: false,
        label: "Course Code"
    },
    {
        id: "semester",
        numeric: false,
        disablePadding: false,
        label: "Semester"
    },
    {
        id: "year",
        numeric: false,
        disablePadding: false,
        label: "Year"
    },
    {
        id: "programme",
        numeric: false,
        disablePadding: false,
        label: "Programme"
    },
    {
        id: "action",
        numeric: true,
        disablePadding: false,
        label: "Actions"
    }
];

function EnhancedTableHead(props) {
    const {
        classes,
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort
    } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ "aria-label": "select all desserts" }}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight:
        theme.palette.type === "light"
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(theme.palette.secondary.light, 0.85)
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark
              },
    title: {
        flex: "1 1 100%"
    },
    formWith: { width: "30rem" }
}));

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

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const {
        numSelected,
        selected,
        clearSelected,
        allPrograms,
        handleFilterCourse
    } = props;

    const [openAddCourseDialog, setAddCourseDialog] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);
    const filterCoursPopperRef = React.useRef(null);
    const [filterCoursePopper, setFilterCoursePopper] = React.useState(false);

    const {
        state: values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        clearValues,
        setServerErrors
    } = useFormValidation(courseState.STATE, courseState.RULES, addNewCourse);
    const handleAddCourseDialogOpen = () => {
        setAddCourseDialog(true);
    };

    const handleAddCourseDialogClose = () => {
        setAddCourseDialog(false);
        clearValues();
        setServerErrors();
    };
    function addNewCourse() {
        Inertia.post("/dashboard/create-course", values, {
            errorBag: "createCourse",
            onSuccess: page => {
                clearValues();
                setAlertMessage("Course added successfully");
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
    const deleteCourses = () => {
        Inertia.delete(`/dashboard/delete-courses/${selected}`, {
            onSuccess: page => {
                clearSelected();
                setAlertMessage("Courses deleted successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            }
        });
    };

    const toggleFilterCoursePopper = () => {
        setFilterCoursePopper(filterCoursePopper => !filterCoursePopper);
    };
    const handleFilterCoursePopper = (event, key) => {
        if (key) {
            handleFilterCourse(key);
        }
        if (
            filterCoursPopperRef.current &&
            filterCoursPopperRef.current.contains(event.target)
        ) {
            return;
        }

        setFilterCoursePopper(false);
    };
    // return focus to the button when we transitioned from !open -> open
    const prevFilterCoursePopperOpen = React.useRef(filterCoursePopper);
    React.useEffect(() => {
        if (
            prevFilterCoursePopperOpen.current === true &&
            prevFilterCoursePopperOpen === false
        ) {
            filterCoursPopperRef.current.focus();
        }
        prevFilterCoursePopperOpen.current = filterCoursePopper;
    }, [filterCoursePopper]);

    return (
        <>
            <SnackbarAlert message={alertMessage} openAlert={openAlert} />;
            <Toolbar
                className={clsx(classes.root, {
                    [classes.highlight]: numSelected > 0
                })}
            >
                {numSelected > 0 ? (
                    <Typography
                        className={classes.title}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        className={classes.title}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        <span className="secondary">All Courses</span>
                    </Typography>
                )}

                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteCourses}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <>
                        <Tooltip title="Filter courses">
                            <IconButton
                                aria-label="filter list"
                                onClick={toggleFilterCoursePopper}
                                ref={filterCoursPopperRef}
                            >
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add new program">
                            <IconButton
                                aria-label="add new program"
                                color="primary"
                                onClick={handleAddCourseDialogOpen}
                            >
                                <AddOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        <Popper
                            open={filterCoursePopper}
                            anchorEl={filterCoursPopperRef.current}
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
                                            onClickAway={e =>
                                                handleFilterCoursePopper(e, "")
                                            }
                                        >
                                            <MenuList
                                                autoFocusItem={
                                                    filterCoursePopper
                                                }
                                                id="menu-list-grow"
                                            >
                                                <MenuItem
                                                    onClick={e =>
                                                        handleFilterCoursePopper(
                                                            e,
                                                            "First Semester"
                                                        )
                                                    }
                                                >
                                                    First Semester
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={e =>
                                                        handleFilterCoursePopper(
                                                            e,
                                                            "Second Semester"
                                                        )
                                                    }
                                                >
                                                    Second Semester
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={e =>
                                                        handleFilterCoursePopper(
                                                            e,
                                                            "Year 1"
                                                        )
                                                    }
                                                >
                                                    Year 1
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={e =>
                                                        handleFilterCoursePopper(
                                                            e,
                                                            "Year 2"
                                                        )
                                                    }
                                                >
                                                    Year 2
                                                </MenuItem>

                                                <MenuItem
                                                    onClick={e =>
                                                        handleFilterCoursePopper(
                                                            e,
                                                            "Year 3"
                                                        )
                                                    }
                                                >
                                                    Year 3
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </>
                )}
            </Toolbar>
            <DialogComponent
                title="Add New Course"
                openDialog={openAddCourseDialog}
                closeDialog={handleAddCourseDialogClose}
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
                            {allPrograms.map(p => (
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
                            id="course-title"
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
                            id="courses-code"
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

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 750
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

const AllCoursesView = ({
    allPrograms,
    courses,
    getCourseToUpdate,
    deleteCourse,
    handleFilterCourse
}) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const rows = courses.map(c => {
        return createData(
            c.id,
            c.programme_id,
            c.title,
            c.code,
            c.semester,
            c.year,
            c.programme
        );
    });

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const clearSelected = () => {
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    selected={selected}
                    clearSelected={clearSelected}
                    allPrograms={allPrograms}
                    handleFilterCourse={handleFilterCourse}
                />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="small"
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell
                                                padding="checkbox"
                                                onClick={event =>
                                                    handleClick(event, row.id)
                                                }
                                            >
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        "aria-labelledby": labelId
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>{row.code}</TableCell>
                                            <TableCell>
                                                {row.semester}
                                            </TableCell>
                                            <TableCell>{row.year}</TableCell>
                                            <TableCell>
                                                {row.programme}
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        aria-label="edit"
                                                        color="primary"
                                                        onClick={() =>
                                                            getCourseToUpdate(
                                                                row
                                                            )
                                                        }
                                                    >
                                                        <EditOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        aria-label="delete"
                                                        color="secondary"
                                                        onClick={() =>
                                                            deleteCourse(row.id)
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default AllCoursesView;
