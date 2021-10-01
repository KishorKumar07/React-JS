import React from "react";
import styles from "./home.module.css";
import Para1 from "./Para1";

function Home (props){

return (
    

   <div className ={styles.img1} >
   <h1 className ={styles.para1}>Welcome to home page</h1>
   <br/>
       <img src="./Images/web.jpg" className ="img" width = "400px" height = "350px" alt = "home"/>
       <Para1  msg = "Hi, Tis is" name = "Kishor Kumar"/>
   </div>
  
  
  
);

}
export default Home;