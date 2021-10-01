import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";


function Navigation() {
    return (
        
          <div >
    <div className ={styles.navbar}>
    
    <h1 className = {styles.name}>UI Designer</h1>
   <span></span> <span></span>  <span></span> <span></span> <span></span> <span></span>
   <span></span>  <span></span> <span></span><span></span><span></span> <span></span><span></span>
  
   
    <Link to ="/">
    <p className = {styles.navcomponents}>Home</p>
    </Link>

    <Link to ="/about">
    <p className = {styles.navcomponents}>About </p>
    </Link>

    <Link to ="/contact">
    <p className = {styles.navcomponents}>Conatct</p>
    </Link>
    </div>  
        </div>
    )
}

export default Navigation;
