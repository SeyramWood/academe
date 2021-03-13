import { Inertia } from "@inertiajs/inertia";
import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    width: { width: "100%" },
    input: {
        display: "none"
    }
}));

function chunksReducer(state, action) {
    switch (action.type) {
        case "appendChunks":
            return [...state, action.blob];
        case "shiftChunks":
            state.shift();
            return state;
        case "clearChunks":
            return [];

        default:
            return state;
    }
}
const UploadFile = ({
    btnText = "upload",
    fileUploading,
    getFileName,
    resetFile,
    location = ""
}) => {
    const classes = useStyles();
    const [file, setFile] = React.useState(undefined);
    const [chunksCounter, setChunksCounter] = React.useState(0);
    const [chunks, dispatch] = React.useReducer(chunksReducer, []);
    const [chunkSize, setChunkSize] = React.useState(0);
    const [uploaded, setUploaded] = React.useState(0);
    const [fileProgress, setFileProgress] = React.useState(false);
    const [isUploading, setIsUploading] = React.useState(false);
    const [fileExistError, setFileExistError] = React.useState("");
    const [fileLocation, setFileLocation] = React.useState("");
    const initialRender = React.useRef(true);
    const config = {
        headers: {
            "Content-Type": "application/octet-stream"
        },
        onUploadProgress: event => {
            if (parseInt((event.loaded / event.total) * 100) === 100) {
                setUploaded(
                    uploaded => (uploaded += parseFloat(100 / chunkSize))
                );
            }
        }
    };
    const upload = data => {
        axios
            .post(`/dashboard/upload/${fileLocation}`, data, config)
            .then(res => {
                if (res.data.uploaded) {
                    setIsUploading(false);
                    dispatch({ type: "clearChunks" });
                    setChunksCounter(0);
                } else {
                    if (!res.data.exist) {
                        dispatch({
                            type: "shiftChunks"
                        });
                        setChunksCounter(chunksCounter => chunksCounter - 1);
                    } else {
                        setFileExistError("The video already uploaded!");
                        setIsUploading(false);
                        dispatch({ type: "clearChunks" });
                        setChunksCounter(0);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleFileChange = e => {
        e.preventDefault();
        const _file = e.target.files[0];
        setFile(undefined);
        dispatch({ type: "clearChunks" });
        setChunkSize(0);
        setUploaded(0);
        setFile(_file);
        getFileName(() => _file.name);
        setFileLocation(location);
        setFileExistError("");
        let size = 1048576 * 3; // 3mb;
        setChunkSize(Math.ceil(_file.size / size));
        setChunksCounter(Math.ceil(_file.size / size));
        const chunkSize = Math.ceil(_file.size / size);
        for (let i = 0; i < chunkSize; i++) {
            const blob = _file.slice(
                i * size,
                Math.min(i * size + size, _file.size),
                _file.type
            );
            dispatch({ type: "appendChunks", blob });
        }
        setFileProgress(true);
        setIsUploading(true);
    };

    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            if (chunksCounter > 0) {
                const formData = new FormData();
                formData.set("is_last", chunks.length === 1);
                formData.set("file", chunks[0], `${file.name}.part`);
                upload(formData);
            }
        }
    }, [chunksCounter]);
    React.useEffect(() => {
        fileUploading(() => isUploading);
    }, [isUploading]);
    React.useEffect(() => {
        if (!resetFile) {
            if (file) {
                setFile(undefined);
                dispatch({ type: "clearChunks" });
                setChunkSize(0);
                setUploaded(0);
                getFileName(() => "");
                setFileExistError("");
                setFileProgress(false);
                setFileLocation();
            }
        }
    }, [resetFile]);

    return (
        <div className={(classes.width, "upload-box")}>
            <input
                accept="video/*"
                className={classes.input}
                id="video-file"
                type="file"
                required
                disabled={isUploading}
                onChange={handleFileChange}
            />
            <label htmlFor="video-file">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={isUploading}
                    className="upload-file-btn"
                >
                    <CloudUploadOutlinedIcon />
                    <span className="upload-file-btn-text">{btnText}</span>
                </Button>
                <p className="upload-file-name">
                    {file && `${file.name.substr(0, 50)}...`}
                </p>
            </label>
            {fileProgress && (
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <LinearProgress
                            variant="determinate"
                            value={uploaded}
                        />
                    </Box>
                    <Box minWidth={35}>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        >{`${Math.round(uploaded)}%`}</Typography>
                    </Box>
                </Box>
            )}
            {fileExistError && (
                <p className="upload-file-name error">{fileExistError}</p>
            )}
        </div>
    );
};

export default UploadFile;
