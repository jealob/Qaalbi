import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";

// import ExpenseCalculator from "../../components/ExpenseCalculator";
// import { Input, FormBtn } from "../../components/Form";

import { Carousel, About, Services, InstagramFeed, Header } from "../../components/WelcomePage";


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
                <Nav auth={this.props.auth} />
                    {
                        isAuthenticated() ? (
                            <div>
                                <Header />
                                <Carousel />
                                <About />
                                <Services />
                                <InstagramFeed />
                            </div>
                        ) : (
                                <div>
                                    <Header />
                                    <Carousel />
                                    <About />
                                    <Services />
                                    <InstagramFeed />
                                </div>
                            )
                    }
                    <Footer />
                </div>
                
        );
    }
}

export default Home;
