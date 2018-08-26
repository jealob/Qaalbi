import React, { Component } from "react";
import "./Nav.css";

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (

      <div>
        {
          !isAuthenticated() && (
            <nav id="id" className="navbar navbar-expand nav-content">
              <div className="container">
                <a className="navbar-brand" href="/">  <img id="logoImg" className='mr-5' src={require("../../images/logo.jpg")} width="150" height="50" alt="logonav" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <a className="nav-link js-scroll-trigger" href="/home">Home</a>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/addevent">Events</a>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#expensecalculator">Expense Calculator</a>
                    </li>
                    <button id="qsLoginBtn" className="primary" className="btn-margin" onClick={this.login.bind(this)}>
                      Log In
                      </button>
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
        {
          isAuthenticated() && (
            <nav id="id" className="navbar navbar-expand nav-content">
              <div className="container">
                <a className="navbar-brand" href="/" >
                  <img src={require("../../images/logo.jpg")} className='mr-5' id="logoImg" width="150" height="50" alt="logonav" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li>
                      <a className="nav-link js-scroll-trigger" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/dashboard">Dashboard</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/addevent">Events</a>
                      <span className="sr-only">(current)</span>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#todolist">To Do List</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#bookappointment">Book Appointment</a>
                    </li> */}
                    <button id="qsLogoutBtn" className="primary" className="btn-margin" onClick={this.logout.bind(this)}>
                      Log Out
                  </button>
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
      </div>
    );
  }
}

export const Footer = () => {
  return (
    <footer className="main-page-footer">
      <div className="row">
        <div className="col  text-center">
          {/* <h4 className=" pt-3 col text-center"> Follow Us: </h4> */}
          <a href="https://www.twitter.com/" target="_blank"><img className="m-2 " src={require("../../images/tweet.png")} alt="twitter" /></a>
          <a href="https://www.instagram.com/" target="_blank"><img className="m-2 " src={require("../../images/instagram.png")} alt="instagram" /></a>
          <a href="https://www.facebook.com/" target="_blank"><img className="m-2 " src={require("../../images/facebook.png")} alt="facebook" /></a>
          <a href="https://www.googleplus.com/" target="_blank"><img className="m-2" src={require("../../images/googleplus.png")} alt="googleplus" /></a>
        </div>
      </div >
      <div className="row">
        <ul className="col text-center">
          <li className="items mr-3"><a href="https://www.theknot.com/" target="_blank">Wedding Invintation </a></li>
          <li className="items mr-3"><a href="https://www.theknot.com/" target="_blank">Wedding Cakes </a></li>
          <li className="items mr-3"><a href="https://www.theknot.com/" target="_blank">Wedding Photos </a></li>
        </ul>
        <br />
      </div>
      <div className="row">
        <p className="col text-center"> Copyright &copy; 2018</p>
      </div>
    </footer >
  )
}

