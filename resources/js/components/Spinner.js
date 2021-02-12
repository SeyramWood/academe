import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Puff = ({ size = 25, color = "#919191", visible = true }) => {
    return (
        <Loader
            type="Puff"
            color={color}
            height={size}
            width={size}
            visible={visible}
        />
    );
};
const Rings = ({ size = 25, color = "#919191", visible = true }) => {
    return (
        <Loader
            type="Rings"
            color={color}
            height={size}
            width={size}
            visible={visible}
        />
    );
};
const Oval = ({ size = 25, color = "#919191", visible = true }) => {
    return (
        <Loader
            type="Oval"
            color={color}
            height={size}
            width={size}
            visible={visible}
        />
    );
};
const BallTriangle = ({ size = 25, color = "#919191", visible = true }) => {
    return (
        <Loader
            type="BallTriangle"
            color={color}
            height={size}
            width={size}
            visible={visible}
        />
    );
};

export { Puff, Rings, Oval, BallTriangle };
