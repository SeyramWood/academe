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
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Puff } from "./Spinner";
import useFormValidation from "./form/useFormValidation";
import SnackbarAlert from "./SnackbarAlert";

function createData(id, name, year_1, year_2, year_3) {
    return { id, name, year_1, year_2, year_3 };
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
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Name"
    },
    {
        id: "year1",
        numeric: false,
        disablePadding: false,
        label: "Courses (Year 1)"
    },
    {
        id: "year2",
        numeric: false,
        disablePadding: false,
        label: "Courses (Year 2)"
    },
    {
        id: "year3",
        numeric: false,
        disablePadding: false,
        label: "Course (Year 3)"
    },
    {
        id: "action",
        numeric: false,
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

const programmeState = {
    STATE: {
        programme: ""
    },
    RULES: {
        programme: "required|string"
    }
};

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected, selected, clearSelected } = props;

    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);

    const [openAddProgramDialog, setAddProgramDialog] = React.useState(false);
    const {
        state: values,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        handleBlur,
        clearValues,
        setServerErrors
    } = useFormValidation(
        programmeState.STATE,
        programmeState.RULES,
        addNewProgramme
    );
    const handleAddProgramDialogOpen = () => {
        setAddProgramDialog(true);
    };

    const handleAddProgramDialogClose = () => {
        setAddProgramDialog(false);
        clearValues();
        setServerErrors();
    };

    function addNewProgramme() {
        Inertia.post("/dashboard/create-programme", values, {
            errorBag: "createProgramme",
            onSuccess: page => {
                clearValues();
                setAlertMessage("Programme added successfully");
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
        Inertia.delete(`/dashboard/delete-programmes/${selected}`, {
            onSuccess: page => {
                clearSelected();
                setAlertMessage("Programmes deleted successfully");
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 5000);
            }
        });
    };

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
                        <span className="secondary">All Lectures</span>
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
                        <Tooltip title="Upload new lecture">
                            <IconButton
                                aria-label="Upload new lecture"
                                color="primary"
                                onClick={handleAddProgramDialogOpen}
                            >
                                <AddOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
            </Toolbar>
            <DialogComponent
                title="Add New Program"
                btnText="Add"
                openDialog={openAddProgramDialog}
                closeDialog={handleAddProgramDialogClose}
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
                            label="Programme"
                            id="course-title"
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

const AllLecturesView = ({
    programmes,
    getProgrammeToUpdate,
    deleteProgramme
}) => {
    const classes = useStyles();
    const rows = programmes.map(p => {
        return createData(p.id, p.name, p.year_1, p.year_2, p.year_3);
    });
    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.year_1}</TableCell>
                                            <TableCell>{row.year_2}</TableCell>
                                            <TableCell>{row.year_3}</TableCell>
                                            <TableCell>
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        aria-label="edit"
                                                        color="primary"
                                                        onClick={() =>
                                                            getProgrammeToUpdate(
                                                                {
                                                                    id: row.id,
                                                                    programme:
                                                                        row.name
                                                                }
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
                                                            deleteProgramme(
                                                                row.id
                                                            )
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

export default AllLecturesView;
