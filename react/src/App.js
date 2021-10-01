import {Route} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navigation from "./Components/Navigation";

function App(){


return(
   
<div>
    <Navigation/>
    <Route path = "/" exact component = {Home}  />
    <Route path = "/Contact" exact component = {Contact} />
    <Route path = "/About" exact component = {About} />
 
</div>


);}
export default App;