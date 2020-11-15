import React, {useEffect, useRef} from 'react'
import * as QRCode from 'easyqrcodejs';
import {Box} from "@material-ui/core";

const CustomQR = (props) => {

    const options = props.options
    const myQR = useRef(null)

    useEffect(() => {
        new QRCode(myQR.current, options)
    }, [myQR]);

    return (
        <Box ml={2} mr={2} style={{display: "inline"}}>
            <div ref={myQR} style={{display: "inline"}}>
            </div>
        </Box>
    )
}

export default CustomQR