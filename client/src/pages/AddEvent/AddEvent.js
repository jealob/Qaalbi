import React from "react";
// import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Eventform from "./Components/Eventform";

const AddEvent = () => {
    return (
        <div className="container text-center">
            <Jumbotron>Event Planner</Jumbotron>
            <Eventform/>
        </div>
    )
}

export default AddEvent;