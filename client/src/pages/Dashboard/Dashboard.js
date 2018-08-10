import React, { Component } from "react";
// import { Input, FormBtn } from "../../components/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events:[]
        }
    }

    componentDidMount() {
        axios.get('/api/dashboard')
            .then((response) => {
                this.setState({ events: response.data });
                
            })
            .catch((error) => {
                console.log(error);
            });
            
    }
    render() {
        console.log(this.state.events);
        return (
            <div>
                <div className="container text-center">
                    {this.state.events.hello}
                    {/* <p><Link to="/About"> About</Link></p> */}

                </div>
            </div>
        )
    }
}