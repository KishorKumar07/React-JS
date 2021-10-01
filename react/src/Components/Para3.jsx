import React from 'react'
import styles from "./home.module.css";

function Para3(props) {
    const[no,increase] = React.useState(0);
    return (
        <div className = {styles.p1}>
           <h2>{props.msg} {props.mail}</h2>
           <div className ={styles.btn}>
 
      <h2>{no}</h2>,
     <button onClick = {function (){

     increase (no+1);

     }} > Click </button>
   </div>   
        </div>
    )
}

export default Para3;
