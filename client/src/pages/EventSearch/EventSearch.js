import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn, Services, InstagramFeed, Header } from "../../components/Form";

class EventSearch extends Component {
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
                <Nav auth={this.props.auth} />
                {
                    isAuthenticated() ? (
                        <div className="card ">
                            <div className="card-header text-center">
                                Search
                            </div>
                           
                            
                        </div>
                    ) : (
                            <div className="card ">
                                <div className="card-header text-center">
                                    Search
                            </div>
                                
                            </div>
                        )
                }
                <Footer />
            </div>

        );
    }
}

export default EventSearch;
