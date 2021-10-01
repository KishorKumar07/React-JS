import React from 'react'
import styles from "./home.module.css";


function About() {
    return (
        <div className ={styles.img2} >
   <h1 className ={styles.para2}>Welcome to about page</h1>
   <br/><br/>
       <img src="./Images/web1.jpg" className ="img" width = "400px" height = "350px" alt = "about"/>
       <h3>I am a web and app dveloper</h3>
    
   </div>
    );
}

export default About;
