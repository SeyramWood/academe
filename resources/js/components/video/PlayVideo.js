import React from "react";
import VideoPlayer from "../VideoPlayer";

const PlayVideo = ({ lecture }) => {
    return <VideoPlayer url={`/storage/lectures/${lecture.video}`} />;
};

export default PlayVideo;
