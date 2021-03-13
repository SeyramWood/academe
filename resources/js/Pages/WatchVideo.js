import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Dashboard from "../layouts/Dashboard";
import VideoDetials from "../components/video/VideoDetials";
import PlayVideo from "../components/video/PlayVideo";
import ListVideo from "../components/video/ListVideo";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import useFetchData from "../components/useFetchData";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    formWidth: {
        width: "100%"
    }
}));

const WatchVideo = ({ lecture, relatedLectures, courses }) => {
    const classes = useStyles();
    const { authUser } = usePage().props;
    const [selectedCourse, setSelectedCourse] = React.useState("");
    const [courseDropdown, setCourseDropdown] = React.useState(false);
    const [relLectures, setRelLectures] = React.useState(relatedLectures);
    const [filteredLectures, loading] = useFetchData(
        `/get-lectures-by-course/${selectedCourse}`
    );
    React.useEffect(() => {
        if (!selectedCourse) {
            setRelLectures(relatedLectures);
        }
    }, [selectedCourse]);

    return (
        <>
            <section className="video__page__layout">
                <section className="video__page__layout__right">
                    <section className="video__page__layout__right__player">
                        <PlayVideo lecture={lecture} />
                    </section>
                    <section className="video__page__layout__right__details">
                        <VideoDetials />
                    </section>
                </section>
                <section className="video__page__layout__left">
                    <h3 className="video__page__layout__left__header">
                        Related Videos
                    </h3>
                    <form className={classes.formWidth}>
                        <FormControl className={classes.formWidth}>
                            <InputLabel id="demo-controlled-open-select-label">
                                Filter videos by course
                            </InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={courseDropdown}
                                onClose={() => setCourseDropdown(false)}
                                onOpen={() => setCourseDropdown(true)}
                                value={selectedCourse}
                                onChange={e =>
                                    setSelectedCourse(e.target.value)
                                }
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>

                                {courses.map(c => (
                                    <MenuItem
                                        value={c.id}
                                        key={c.id.toString()}
                                    >
                                        {c.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </form>
                    {!selectedCourse &&
                        relLectures.map(l => (
                            <ListVideo lecture={l} key={l.id.toString()} />
                        ))}
                    {selectedCourse &&
                        !loading &&
                        filteredLectures &&
                        filteredLectures.data.map(l => (
                            <ListVideo lecture={l} key={l.id.toString()} />
                        ))}
                    {selectedCourse && !filteredLectures && (
                        <p>No video found!</p>
                    )}
                    {selectedCourse && loading && <p>Loading...</p>}
                </section>
            </section>
        </>
    );
};

WatchVideo.layout = page => <Dashboard children={page} />;

export default WatchVideo;
