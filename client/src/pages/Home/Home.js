import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
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
                <div className="container-fluid wrapper" style={{ background: 'pink', minHeight: 'calc(100vh - 50px)' }}>
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
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;
