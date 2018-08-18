import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Nav, Footer } from "../../components/Nav";
import Profile from "../../components/Profile";
import Jumbotron from "../../components/Jumbotron";
import loginData from '../../Auth/loginData';
import Callback from "../Callback/Callback";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            events: [],
            userData: null,
        }
    }

    savingUserData = (token) => {

        loginData(token, (user) => {
            API.saveUser(user.email, user);
            API.getUserData(user.email).then(res => {
                this.setState({ userData: res.data })

            })
        });
    }

    login() {
        this.props.auth.login();
    }



    componentDidMount() {
        let token = localStorage.getItem('id_token');
        this.savingUserData(token);
    }



    render() {
        const { isAuthenticated } = this.props.auth;

        //    if(this.state.userData){
        return (
            <div>
                <Nav auth={this.props.auth} />
                <div className="container-fluid wrapper" style={{ background: 'pink', minHeight: 'calc(100vh - 50px)' }}>
                    {
                        isAuthenticated() ? (
                            <div className="row" >
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center profile" style={{ background: 'wheat' }}>
                                    <Profile
                                        userData={this.state.userData}
                                    />
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                    <AddEvent id="events" />
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
        // } else {
        //    return <Callback />
        // }
    }
}




