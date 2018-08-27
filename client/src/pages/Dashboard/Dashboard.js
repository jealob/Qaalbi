import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Nav, Footer } from "../../components/Nav";
import Profile from "../../components/Profile";
import Jumbotron from "../../components/Jumbotron";
import ExpenseCalculator from "../../components/ExpenseCalculator";
import loginData from '../../Auth/loginData';
import Callback from "../Callback/Callback";
import "./Dashboard.css"
import AppointmentForm from "../../components/ApptForm"

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            events: [],
            userData: null,
            appointmentDetails: []
        }
    }

    savingUserData = (token) => {
        loginData(token, (user) => {
            user.token = token;
            API.saveUser(user.email, user)
                .then(res => this.getUserData(user.email));
            this.setState({ userData: user });
        });
    }

    getUserData = (email) => {
        //this Api call is not working properly
        API.getUserData(email).then(res => {
            console.log(res)
        })
    };

    handleAppointmentInputChange = event => {
        // Getting the value and name of the input which triggered the change
        console.log(event.target)
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log()
    };

    handleBookAppointment = (event) => {
        event.preventDefault();
        console.log("clicked")
        API.sendMail({
            appointmentDetails: this.state.appointmentDetails
        }).then(res => {
            this.setState({ eventSearch: res.data });
            console.log(this.state.eventSearch);
        })
    };

    login() {
        this.props.auth.login();
    }

    componentWillMount() {
        let token = localStorage.getItem('id_token');
        this.savingUserData(token);
    }

    // componentDidUpdate() {
    //     if (this.state.userData) {
    //         //this Api call is not working properly
    //         this.getUserData(this.state.userData.email)
    //     }
    //     //this Api call is not working properly too ever when userData is available
    //     API.getUserData(this.state.userData.email).then(res => {
    //         console.log(res.data)
    //     })

    // }


    render() {
        const { isAuthenticated } = this.props.auth;
        console.log(this.state.events);

        if (this.state.userData) {
            return (
                <div>
                    <Nav auth={this.props.auth} />
                    <div className="container-fluid wrapper" style={{ minHeight: 'calc(100vh - 50px)' }}>
                        {
                            isAuthenticated() ? (
                                <div className="row" >
                                    <div id="bck" className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center profile">
                                        <Profile
                                            userData={this.state.userData} />
                                    </div>
                                    <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                        <AddEvent id="events" />
                                        <ExpenseCalculator />
                                        <AppointmentForm
                                            appointmentDetails={this.state.appointmentDetails}
                                            onChange={this.handleAppointmentInputChange}
                                            handleBookAppointment={this.handleBookAppointment} />
                                    </div>

                                </div>
                            ) : (
                                    <div className="py-5" style={{ background: 'pink' }}>
                                        <Jumbotron >
                                            <h4>You are not logged in {' '}</h4>
                                            <h5>
                                                <button className=" btn btn-success" style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>Log In</button>
                                                {' '}to continue.
                                        </h5>
                                        </Jumbotron>
                                    </div>
                                )
                        }
                    </div>
                    <Footer />
                </div>

            )
        } else {
            return <Callback />
        }
    }
}




