import React from "react";
import ReactPlayer from "react-player/lazy";
import { ReactVideo } from "reactjs-media/video";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import FastForwardOutlinedIcon from "@material-ui/icons/FastForwardOutlined";
import FastRewindOutlinedIcon from "@material-ui/icons/FastRewindOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import VolumeDownOutlinedIcon from "@material-ui/icons/VolumeDownOutlined";
import VolumeOffOutlinedIcon from "@material-ui/icons/VolumeOffOutlined";
import FullscreenOutlinedIcon from "@material-ui/icons/FullscreenOutlined";
import FullscreenExitOutlinedIcon from "@material-ui/icons/FullscreenExitOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PictureInPictureOutlinedIcon from "@material-ui/icons/PictureInPictureOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, {
    bindTrigger,
    bindMenu,
    bindPopover
} from "material-ui-popup-state";
import Popover from "@material-ui/core/Popover";
import Zoom from "@material-ui/core/Zoom";

import Duration from "./Duration";

const VideoPlayer = ({ url }) => {
    const playerRef = React.useRef();
    const [seeking, setSeeking] = React.useState(false);
    const [played, setPlayed] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(0.8);
    const [playbackRate, setPlaybackRate] = React.useState(1);
    const [muted, setMuted] = React.useState(false);
    const [pip, setPip] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const [settings, setSettings] = React.useState(false);

    const handleSettings = () => {
        setSettings(prev => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = newPlacement => event => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleChange = () => {
        setValue(0);
    };
    const handlePlay = () => {
        setPlaying(true);
    };
    const handlePause = () => {
        setPlaying(false);
    };
    const handlePlayPause = () => {
        setPlaying(state => !state);
    };
    const handleSeekChange = (event, newValue) => {
        setPlayed(parseFloat(newValue));
    };
    const handleSeekMouseDown = () => {
        setSeeking(true);
    };
    const handleSeekMouseUp = event => {
        setSeeking(false);
        playerRef.current.player.seekTo(0.777);
    };
    const handleProgress = state => {
        // console.log("onProgress", state);
        // setPlayed(parseFloat(state.played));
        if (!seeking) {
            // setState(state);
        }
    };
    const handleDuration = duration => {
        // console.log("onDuration", duration);
        setDuration(duration);
    };
    const handleSeek = seconds => {
        const cTime = playerRef.current.player.getCurrentTime();
        const duration = playerRef.current.player.getDuration();

        // console.log("seek", seconds);
        // console.log("cTime", cTime);
        // this.setState({ duration });
    };
    const handleVolume = (event, newValue) => {
        console.log(newValue);
        setVolume(newValue);
    };
    const handleToggleMuted = () => {
        setMuted(state => !muted);
    };
    const handleTogglePIP = () => {
        setPip(state => !pip);
    };
    const handlePlaybackRate = action => {
        if (action === "increase") {
            setPlaybackRate(state => state + 0.5);
        }
        // if (action === "decrease") {
        //     setPlaybackRate(state => state >= 1 && state - 0.5);
        // }
    };

    const abs = event => {
        console.log(event);
    };

    // <ReactVideo
    //     src={url}
    //     primaryColor="red"
    //     poster="/storage/logo/logo.svg"
    //     onSeek={abs}
    // />;
    // console.log(playerRef.seekTo());

    return (
        <>
            <div className="player-wrapper">
                <ReactPlayer
                    ref={playerRef}
                    playing={playing}
                    controls={false}
                    pip={true}
                    url={url}
                    className="react-player"
                    width="100%"
                    height="100%"
                    stopOnUnmount={false}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onSeek={handleSeek}
                    volume={volume}
                    muted={muted}
                    pip={pip}
                    playbackRate={playbackRate}
                />
                <div
                    id="video-controls"
                    className="player-wrapper__wrapper"
                    data-state="hidden"
                >
                    <div className="player-wrapper__controls">
                        <div className="player-wrapper__controls__progress">
                            <Slider
                                color="secondary"
                                value={played}
                                aria-labelledby="continuous-slider"
                                step={0.001}
                                min={0.0}
                                max={0.999999}
                                onChange={handleSeekChange}
                                onMouseDown={handleSeekMouseDown}
                                onMouseUp={handleSeekMouseUp}
                            />
                        </div>
                        <div className="player-wrapper__controls__actions">
                            <div className="player-wrapper__controls__actions action">
                                {!playing && (
                                    <Tooltip
                                        title="Play"
                                        placement="top"
                                        onClick={handlePlayPause}
                                    >
                                        <IconButton aria-label="play">
                                            <PlayCircleOutlineOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>
                                )}
                                {playing && (
                                    <Tooltip
                                        title="Pause"
                                        placement="top"
                                        onClick={handlePlayPause}
                                    >
                                        <IconButton aria-label="pause">
                                            <PauseCircleOutlineOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </div>
                            <div className="player-wrapper__controls__actions action">
                                <Tooltip title="Rewined" placement="top">
                                    <IconButton aria-label="play">
                                        <FastRewindOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="player-wrapper__controls__actions action">
                                <Tooltip title="Forword" placement="top">
                                    <IconButton aria-label="play">
                                        <FastForwardOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="player-wrapper__controls__actions action">
                                <p>
                                    <Duration seconds={duration * played} />
                                </p>
                            </div>
                            <div className="player-wrapper__controls__actions action">
                                <p>
                                    <Duration seconds={duration} />
                                </p>
                            </div>
                            <div className="player-wrapper__controls__actions action volume">
                                <div>
                                    <Slider
                                        color="secondary"
                                        value={volume}
                                        aria-labelledby="continuous-slider"
                                        step={0.001}
                                        min={0.0}
                                        max={1}
                                        onChange={handleVolume}
                                    />
                                </div>
                                <div>
                                    {!muted && volume >= 0.8 && (
                                        <Tooltip
                                            title="Volume"
                                            placement="top"
                                            onClick={handleToggleMuted}
                                        >
                                            <IconButton aria-label="play">
                                                <VolumeUpOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {!muted && volume < 0.8 && (
                                        <Tooltip
                                            title="Volume"
                                            placement="top"
                                            onClick={handleToggleMuted}
                                        >
                                            <IconButton aria-label="play">
                                                <VolumeDownOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {muted && (
                                        <Tooltip
                                            title="Volume"
                                            placement="top"
                                            onClick={handleToggleMuted}
                                        >
                                            <IconButton aria-label="play">
                                                <VolumeOffOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </div>
                            </div>
                            <div className="player-wrapper__controls__actions action">
                                <Tooltip
                                    title="Fullscreen"
                                    placement="top"
                                    onClick={handleTogglePIP}
                                >
                                    <IconButton aria-label="play">
                                        <FullscreenOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>

                            <div className="player-wrapper__controls__actions action">
                                <Zoom in={settings}>
                                    <div className="player-wrapper__controls__actions action settings">
                                        <span>
                                            <Tooltip
                                                title="Decrease"
                                                placement="top"
                                            >
                                                <IconButton
                                                    aria-label="decrease"
                                                    onClick={() =>
                                                        setPlaybackRate(
                                                            state =>
                                                                (state -= 0.5)
                                                        )
                                                    }
                                                >
                                                    <RemoveOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </span>
                                        <span>{playbackRate}</span>
                                        <span>
                                            <Tooltip
                                                title="Increase"
                                                placement="top"
                                                onClick={() =>
                                                    setPlaybackRate(
                                                        state => (state += 0.5)
                                                    )
                                                }
                                            >
                                                <IconButton aria-label="increase">
                                                    <AddOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </span>
                                    </div>
                                </Zoom>
                                <ClickAwayListener
                                    onClickAway={handleClickAway}
                                >
                                    <Tooltip
                                        title="Settings"
                                        placement="top"
                                        onClick={handleSettings}
                                    >
                                        <IconButton aria-label="play">
                                            <SettingsOutlinedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
                elevation={4}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <div>
                                <Tooltip title="Decrease" placement="top">
                                    <IconButton
                                        aria-label="decrease"
                                        onClick={handleSetPlaybackRate(
                                            "decrease"
                                        )}
                                    >
                                        <RemoveOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                                <span>{playbackRate}</span>
                                <Tooltip title="Increase" placement="top">
                                    <IconButton
                                        aria-label="increase"
                                        onClick={handleSetPlaybackRate(
                                            "increase"
                                        )}
                                    >
                                        <AddOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    );
};

export default VideoPlayer;
