import React from 'react'
import styles from "./home.module.css";
import Para3 from "./Para3";

function Contact() {
    
    return (
        <div className ={styles.img3} >
   <h1 className ={styles.para3}>Welcome to contact page</h1>
   <br/>
       <img src="./Images/web 3.jpg" className ="img" width = "400px" height = "300px" alt = "contact"/>
       <Para3 msg = "My mailid :" mail = "kishorr21cse@gmail.com"/>


        </div>
    )}

export default Contact;
