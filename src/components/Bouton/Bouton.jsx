import React from "react";
const Bouton=(props)=>{
    const btnColor=`btn btn-${props.buttonClass}`;
    return(
    <button type="button" className={btnColor} onClick={props.click}>{props.children}</button>
    )
};
export default Bouton;