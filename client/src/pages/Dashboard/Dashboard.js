import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Nav, Footer } from "../../components/Nav";
import Profile from "../../components/Profile";
import Jumbotron from "../../components/Jumbotron";
import ExpenseCalculator from "../../components/ExpenseCalculator";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    login() {
        this.props.auth.login();
    }

    componentDidMount() {
        API.getSavedUsers()
            .then((response) => {
                this.setState({ events: response.data });

            })
            .catch((error) => {
                console.log(error);
            });

    }

    
    render() {
        const { isAuthenticated } = this.props.auth;
        console.log(this.state.events);
        return (
            <div>
                <Nav auth = {this.props.auth}/>
                <div className="container-fluid wrapper" style={{ background: 'pink', minHeight: 'calc(100vh - 50px)' }}>
                    {
                        isAuthenticated() ? (
                            <div className="row" >
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center profile" style={{ background: 'wheat' }}>
                                    <Profile />
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                    <AddEvent id="events" />
                                    <ExpenseCalculator id="expensecalculator" />
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
    }
}




