import React, { Component } from "react";
// import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         events:[]
    //     }
    // }

    login() {
        this.props.auth.login();
      }

    // componentDidMount() {
    //     axios.get('/api/events')
    //         .then((response) => {
    //             this.setState({ events: response.data });      
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });           
    // }

  


    render() {
        const {isAuthenticated}  = this.props.auth;
        return (
            <div className="container">
            {
                isAuthenticated() && (
                    <h4>
                      You are logged in!
                    </h4>
                  )
              }
              {
                !isAuthenticated() && (
                    <h4>
                      You are not logged in! Please{' '}
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

