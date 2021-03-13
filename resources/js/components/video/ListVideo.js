import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import ReactPlayer from "react-player/lazy";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
const ListVideo = ({ lecture }) => {
    const { authUser } = usePage().props;
    const userType = () => {
        const userId = authUser.faculty_id || authUser.student_id;
        const student1 = /^375/;
        const student2 = /^348/;
        const faculty = /^388/;
        if (student1.exec(userId) || student2.exec(userId)) {
            return "student";
        } else if (faculty.exec(userId)) {
            return "faculty";
        }
    };
    const videoPath = slug => {
        userType() === "student" &&
            location.assign(`/student/watch-video/${slug}`);
        userType() === "faculty" && location.assign(`/watch-video/${slug}`);
    };
    return (
        <section className="list__video">
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <section
                        className="player-wrapper_thumbnail list__video__thumb"
                        onClick={() => videoPath(lecture.slug)}
                    >
                        <ReactPlayer
                            url={`/storage/lectures/${lecture.video}`}
                            className="react-player_thumbnail"
                            width="100%"
                            height="100%"
                        />
                    </section>
                </Grid>
                <Grid item xs={12} md={8}>
                    <section className="list__video__details">
                        <p className="list__video__details__title">
                            {userType() === "faculty" && (
                                <a href={`/watch-video/${lecture.slug}`}>
                                    {lecture.title}
                                </a>
                            )}
                            {userType() === "student" && (
                                <a
                                    href={`/student/watch-video/${lecture.slug}`}
                                >
                                    {lecture.title}
                                </a>
                            )}
                        </p>
                        <div className="list__video__details__other">
                            <span>
                                <CalendarTodayOutlinedIcon />
                            </span>
                            <span>
                                <Moment date={lecture.created_at} format="LL" />
                            </span>
                        </div>
                        <div className="list__video__details__other">
                            <span>
                                <ScheduleOutlinedIcon />
                            </span>
                            <span>
                                <Moment date={lecture.created_at} format="LT" />
                            </span>
                        </div>
                    </section>
                </Grid>
            </Grid>
        </section>
    );
};

export default ListVideo;
