import React from "react";
import PropTypes from "prop-types";
// import { memo } from "react";

export const Small = React.memo(({value})=>{
    console.log("Me volvi a dibujar :c");
    return <small>{value}</small>
})

Small.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};