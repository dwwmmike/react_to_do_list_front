import React from "react";
const Alert=(props)=>{
return(
    <div className="alert alert-success" role="alert">
        {props.children}
    </div>
)
};
export default Alert;