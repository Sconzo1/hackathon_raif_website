import React from "react";
import PropTypes from "prop-types";
import {rgbToHex, withStyles} from "@material-ui/core";
import {alphaHex} from "../functions/alphaHex";
import isHexColor from "../functions/isHexColor";

const styles = {
    waves: {
        position: "relative",
        width: "100%",
        marginBottom: -7,
        height: "7vw",
        minHeight: "7vw",
    },
    "@keyframes moveForever": {
        from: {transform: "translate3d(-90px, 0, 0)"},
        to: {transform: "translate3d(85px, 0, 0)"}
    },
    parallax: {
        "& > use": {
            animation: "$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
            animationDelay: props => `-${props.animationNegativeDelay}s`
        }
    }
};

// https://codepen.io/csspoints/pen/WNeOEqd

const WaveBorder = ({
                        className,
                        lowerColor,
                        upperColor,
                        classes,
                        animationNegativeDelay,
                        ...rest
                    }) => {
    const id = String(Math.random());
    return (
        <div className={className} style={{background: upperColor}} {...rest}>
            <svg
                className={classes.waves}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id={id}
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className={classes.parallax}>
                    <use href={`#${id}`} x="48" y="0" fill={
                        isHexColor(lowerColor) ? alphaHex(lowerColor, 0.3) : alphaHex(rgbToHex(lowerColor), 0.3)
                    }/>
                    <use href={`#${id}`} x="48" y="2" fill={
                        isHexColor(lowerColor) ? alphaHex(lowerColor, 1) : alphaHex(rgbToHex(lowerColor), 1)
                    }/>
                </g>
            </svg>
        </div>
    );
}

WaveBorder.propTypes = {
    lowerColor: PropTypes.string.isRequired,
    upperColor: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    animationNegativeDelay: PropTypes.number.isRequired
};

export default withStyles(styles)(WaveBorder);
