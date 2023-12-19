import React from "react";


export const Label = ({label,labelStyle})=>{
    return(
        <div>
            <p style={labelStyle}>{label}</p>
        </div>
    )
}