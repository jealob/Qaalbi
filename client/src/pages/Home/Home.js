import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
// import { FindEvent } from "";
import { Input, FormBtn, MonthMenu, YearMenu } from "../../components/Form";
import { Carousel, About, Services, InstagramFeed, Header } from "../../components/WelcomePage";
import API from "../../utils/API"

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            eventMonth: "",
            eventYear: ""
        }
    }

    login() {
        this.props.auth.login();
    }

    handleSearchInputChange = event => {
        // Getting the value and name of the input which triggered the change
        console.log(event.target)
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });

    };

    handleEventSearch = event => {
        event.preventDefault();
        console.log(this.state);
        API.getEvent({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            eventMonth: this.state.eventMonth,
            eventYear: this.state.eventYear
        }).then(console.log("returned"))
    };

    render() {
        return (
            <div>
                <Nav auth={this.props.auth} />
                {
                    <div>
                        <Header />
                        <div className="card ">
                            <div className="card-header text-center">
                                <h4>Find an event place and time</h4>
                                <p>Going to an event? Search name of event owner</p>
                            </div>
                            <form className="my-2 text-center">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleSearchInputChange}
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleSearchInputChange}
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
                                    <MonthMenu
                                        value={this.state.eventMonth}
                                        onChange={this.handleSearchInputChange}
                                        name="eventMonth"
                                        type="text" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
                                    <YearMenu
                                        value={this.state.eventYear}
                                        onChange={this.handleSearchInputChange}
                                        name="eventYear"
                                        type="text" />
                                </div>
                                <FormBtn className="text-center d-inline-block" onClick={this.handleEventSearch}>Search</FormBtn>
                            </form>
                        </div>
                        {/* <FindEvent
                            handleSearchInputChange={this.handleSearchInputChange}
                            handleEventSearch={this.handleEventSearch}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            eventMonth={this.state.eventMonth}
                            eventYear={this.state.eventYear} /> */}
                        <Carousel />
                        <About />
                        <Services />
                        <InstagramFeed />
                    </div>

                }
                <Footer />
            </div>

        );
    }
}

export default Home;
