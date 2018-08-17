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
    // console.log(this.props)
    return (

      <div>
        {
          !isAuthenticated() && (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark nav-content">
              <div className="container">
                <a className="navbar-brand" href="/">QAALBI EVENTS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <a className="nav-link js-scroll-trigger" href="home">Home</a>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#events">Events</a>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#todolist">To Do List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#expensecalculator">Expense Calculator</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#bookappointment">Book Appointment</a>
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
            <nav className="navbar navbar-expand-md bg-dark navbar-dark nav-content">
              <div className="container">
                <a className="navbar-brand" href="/">QAALBI EVENTS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li>
                      <a className="nav-link js-scroll-trigger" href="home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="addevent">Events</a>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#todolist">To Do List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#bookappointment">Book Appointment</a>
                    </li>
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
    <footer className="pt-4 main-page-footer">
      Copyright &copy; 2018
      </footer>
  )
}

