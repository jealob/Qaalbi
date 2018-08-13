import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Footer } from "../../components/Nav";
import Profile from "../../components/Profile";

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
                <div className="container-fluid">
                    {
                        isAuthenticated() && (
                            <div className="row main-container" style={{ background: 'pink' }}>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center profile" style={{ background: 'wheat' }}>
                                    <Profile />
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                    <AddEvent id="events" />
                                    <AddEvent id="todolist" />
                                </div>
                            </div>
                        )
                    }
                    {
                        !isAuthenticated() && (
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 profile">
                                    <h4>
                                        404 Error {' '}
                                        <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>Log In</a>
                                        {' '}to continue.
                                    </h4>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Footer />
            </div>

        )
    }
}




