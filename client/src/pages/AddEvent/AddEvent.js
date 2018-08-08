import React from "react";
// import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Eventform from "./Components/Eventform";



const AddEvent = () => {
    return (

        <div className="container text-center">
            <h1 className="display-4"> Whether its a day of planning or full service planning QAALBI EVENTS strive to make your special day magical</h1>
            <Eventform/>
        </div>
    )
        render() 
        
        return (
            <div>
                <div className="container text-center">
                    <Jumbotron>Planner</Jumbotron>
                    {this.state.events.hello}
                    {/* <p><Link to="/About"> About</Link></p> */}
    
                </div>
            </div>
    );
};

export default AddEvent;