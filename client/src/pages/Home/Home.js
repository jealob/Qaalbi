import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
<<<<<<< HEAD
// import { FindEvent } from "";
import { Input, FormBtn, MonthMenu, YearMenu } from "../../components/Form";
import { ListItem } from "../../components/List";
=======
import Jumbotron from "../../components/Jumbotron";

// import ExpenseCalculator from "../../components/ExpenseCalculator";
// import { Input, FormBtn } from "../../components/Form";

>>>>>>> 5b471cce6da5312c83868ef6fee94d3bb0726466
import { Carousel, About, Services, InstagramFeed, Header } from "../../components/WelcomePage";
import API from "../../utils/API";
// const moment = require('moment');



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            eventMonth: "",
            eventYear: "",
            eventSearch: "",
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
        }).then(res => {
            this.setState({ eventSearch: res.data });
            console.log(this.state.eventSearch);
        })
    };
    componentDidMount() {
        console.log(this.state.eventSearch.length);
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
                            {typeof this.state.eventSearch === "object" && (
                                <div className="card">
                                    <div className="card-header text-center">
                                        We found {this.state.eventSearch.length} matches for "<strong>{this.state.firstName} {this.state.lastName}</strong>"
                                </div>
                                    <div className="my-2">{this.state.eventSearch.length ? (
                                        <div>
                                            {this.state.eventSearch.map((event) =>
                                                <ListItem key={event._id}
                                                    name={event.name}
                                                    // date={moment(event.eventDate).format('MM-DD-YYYY')}
                                                // operate={this.handleSaveArticle}
                                                />
                                            )
                                            }
                                        </div>
                                    ) : (<h5 className="text-center">There are no event that matches your search at this time</h5>)}
                                    </div>
                                </div>
                            )}
                        </div>
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
