import React, { Component } from "react";
import { Nav, Footer } from "../../components/Nav";
// import { FindEvent } from "";
import { List, ListItem } from "../../components/List";
// import { Carousel, About, Services, InstagramFeed, Header } from "../../components/WelcomePage";
// import API from "../../utils/API"

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

    getQuery = () => {
        var urlParams;
        window.onpopstate = function () {

            var match,
                pl = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query = window.location.search.substring(1);

            urlParams = {};
            while (match === search.exec(query))
                urlParams[decode(match[1])] = decode(match[2]);
        };
    }
    render() {
        this.getQuery();
        return (
            <div>
                <Nav auth={this.props.auth} />
                {
                    <div className="container py-4">
                        <List>
                            <div className="card">
                                <div className="card-header text-center">
                                    Results
                                </div>
                                <div className="my-2">{this.state.events.length ? (
                                    <div>
                                        {this.state.searchedArticles.map((article) =>
                                            <ListItem
                                                key={article.id}
                                                id={article.id}
                                                url={article.url}
                                                headline={article.headline}
                                                snippet={article.snippet}
                                                type="btn btn-success mx-2"
                                                operate={this.handleSaveArticle} />
                                        )
                                        }
                                    </div>
                                ) : (<h5 className="text-center">There are no event that matches your search at this time</h5>)}
                                </div>
                            </div>
                        </List>
                    </div>}
                <Footer />
            </div>

        );
    }
}

export default EventSearch;
