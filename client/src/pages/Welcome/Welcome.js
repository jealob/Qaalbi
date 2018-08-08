import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import {Carousel, About, Services} from "../../components/WelcomePage";


 class Welcome extends Component {
     state = { 
         
      }
     render() { 
         return (  
             <div>
             <Jumbotron/>
             <Carousel/>
             <About/>
             <Services/>
             </div>
         );
     }
 }
  
 export default Welcome;
  