import React from "react";
import classes from "./Titre.module.css";

const Titre=(props)=>{
    const cssTitle=`${classes.fontPolice} border border-dark p-2 m-2 bg-primary rounded text-center`;
    return(
        <h1 className={cssTitle}>{props.children}</h1>
    )
};

export default Titre;


