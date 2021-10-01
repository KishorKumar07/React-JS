import React from 'react'
import styles from "./home.module.css";

function Para1(props) {
    return (
        <div className = {styles.p1}>
           <h2>{props.msg} {props.name}</h2>  
        </div>
    )
}

export default Para1;
