import React, { Component } from "react";
// import { Input, FormBtn } from "../../components/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events:[]
        }
    }

    login() {
        this.props.auth.login();
      }

    componentDidMount() {
        axios.get('/api/dashboard')
            .then((response) => {
                this.setState({ events: response.data });
                
            })
            .catch((error) => {
                console.log(error);
            });
            
    }
    render() {
        const  { isAuthenticated } = this.props.auth;
        console.log(isAuthenticated);
        console.log(this.state.events);
        return (
            <div>
                <div className="container text-center">
                  {
          isAuthenticated() && (
            
              <h4>
               Welcome to Dash board !
               {this.state.events.hello}
            {/* <p><Link to="/About"> About</Link></p> */}
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                404 Error {' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
                    

                </div>
            </div>
        )
    }
}




