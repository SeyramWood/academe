import { Inertia } from "@inertiajs/inertia";
import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    input: {
        display: "none"
    }
}));
const UploadFile = () => {
    const classes = useStyles();
    const [file, setFile] = React.useState(null);
    // const [size, setSize] = React.useState(1048576 * 1);
    const [chunks, setChunks] = React.useState([]);
    const [chunkSize, setChunkSize] = React.useState(0);
    const [uploaded, setUploaded] = React.useState(0);
    const [fileProgress, setFileProgress] = React.useState(false);
    const [fileProgressSubmit, setFileProgressSubmit] = React.useState(false);

    const config = {
        headers: {
            "Content-Type": "application/octet-stream"
        },
        onUploadProgress: event => {
            // if (parseInt((event.loaded / event.total) * 100) === 100) {
            //   this.uploaded += parseFloat(100 / this.chunkSize);
            // }
        }
    };
    const createChunks = () => {
        let size = 1 * 1024 * 1024;

        setChunkSize(Math.ceil(file.size / size));
        for (let i = 0; i < chunkSize; i++) {
            console.log(chunkSize);
            setChunks([
                ...chunks,
                file.slice(
                    i * size,
                    Math.min(i * size + size, file.size),
                    file.type
                )
            ]);
        }
    };
    const upload = data => {
        axios
            .post("/dashboard/upload", data, config)
            .then(res => {
                setChunks(chunks => chunks.shift());
                if (res.data.uploaded) {
                    setFileProgressSubmit(false);
                    // this.errors.audioFile = [];
                }
                if (res.data.exist) {
                    setFileProgressSubmit(true);
                    setFileProgress(false);
                    setUploaded(0);
                    setChunks([]);
                    setChunkSize(0);
                    // this.errors.audioFile.push("Sorry! this file already exist.");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleChange = e => {
        setFile(e.target.files[0]);
    };
    React.useEffect(() => {
        if (file) {
            setChunks([]);
            setChunkSize(0);
            setUploaded(0);
            let size = 1 * 1024 * 1024; ///1048576 * 1; // 1 * (1024 * 1024) 3mb;
            setChunkSize(Math.ceil(file.size / size));
            // for (let i = 0; i < chunkSize; i++) {
            //     setChunks([
            //         ...chunks,
            //         file.slice(
            //             i * size,
            //             Math.min(i * size + size, file.size),
            //             file.type
            //         )
            //     ]);
            // }
            // console.log("chunks", chunks);
        }
    }, [file]);
    React.useEffect(() => {
        console.log(chunkSize);
        for (let i = 0; i < chunkSize; i++) {
            let size = 1 * 1024 * 1024; //1048576 * 3; // 1 * (1024 * 1024) 3mb;
            setChunks([
                ...chunks,
                file.slice(
                    i * size,
                    Math.min(i * size + size, file.size),
                    file.type
                )
            ]);
        }
    }, [chunkSize, chunks]);
    console.log("chunks", chunks);
    React.useEffect(() => {
        const formData = () => {
            let formData = new FormData();
            formData.set("is_last", chunks.length === 1);
            formData.set("file", chunks[0], `${file.name}.part`);

            return formData;
        };
        if (chunks.length > 0) {
            upload(formData);
        }
    }, [chunks]);

    return (
        <>
            <input
                accept="/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleChange}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
        </>
    );
};

export default UploadFile;
