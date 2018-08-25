import React, { Component } from "react";
import { Carousel, About, Services, InstagramFeed, Header } from "../../components/WelcomePage";

export default class Welcome extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <About />
                <InstagramFeed />
                <Services />
            </div>
        );
    }
}

