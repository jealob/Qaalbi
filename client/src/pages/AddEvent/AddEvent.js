import React from "react";
// import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Eventform from "./Components/Eventform";



const AddEvent = () => {
    return (
        <div>
            <div>
                <div className="container text-center">
                    <Jumbotron>Qaalbi Services</Jumbotron>

                </div>
            </div>

            <div className="container text-center">
                <h4>Whether its a day of planning or full service planning QAALBI EVENTS will strive to make your special day magical</h4>
                <Eventform />
            </div>
        </div>
    )
};

export default AddEvent;