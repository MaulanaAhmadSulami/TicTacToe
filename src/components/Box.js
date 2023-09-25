import './Box.css'
import React from 'react'

export const Box = ({value, onClick}) => {
    return <button className="Box" onClick={onClick}>{value}</button>;
}


export default Box;