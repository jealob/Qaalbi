import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
// import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    login() {
        this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <Nav auth = {this.props.auth}/>
                <div className="container-fluid wrapper" style={{ background: 'pink', minHeight: 'calc(100vh - 50px)' }}>
                    {
                        isAuthenticated() ? (
                            <h4>
                                You are logged in!
                            </h4>
                        ) : (
                                <div className="py-5" style={{ background: 'pink' }}>
                                    <Jumbotron >
                                        <h4>You are not logged in {' '}</h4>
                                        <h5>
                                            <button className=" btn btn-success" style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>Log In</button>
                                            {' '}to contine.
                                </h5>
                                    </Jumbotron>
                                </div>
                            )
                    }
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;


// {/* <div>
// <div className="container text-center">
//     {this.state.events.hello}
//     {/* <p><Link to="/About"> About</Link></p> */}

// {</div>
// </div> */}

