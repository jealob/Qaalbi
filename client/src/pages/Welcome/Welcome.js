import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Carousel, About, Services, InstagramFeed } from "../../components/WelcomePage";

export default class Welcome extends Component {
    state = {

    }
    render() {

        return (
            <div>
                <Jumbotron />
                <Carousel />
                <About />
                <InstagramFeed />
                <Services />
            </div>
        );
    }
}

