import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Auth from './Auth/Auth';
import history from './history';
import Callback from './pages/Callback/Callback';
import Chart from "./components/Chart"
import ApptForm from "./components/ApptForm";



const auth = new Auth();

const handleAuthentication = ({
  location
}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends React.Component {
    render() {
        return ( <
          ApptForm / >
        );
        ( <
          div >
          <
          ApptForm / > { < Router history = {
              history
            } >
            <
            Switch >
            <
            Route exact path = "/"
            render = {
              (props) => < Home auth = {
                auth
              } { ...props
              }
              />} / >
              <
              Route exact path = "/home"
              render = {
                (props) => < Home auth = {
                  auth
                } { ...props
                }
                />} / >
                <
                Route exact path = "/login"
                component = {
                  Login
                }
                /> <
                Route exact path = "/addevent"
                component = {
                  AddEvent
                }
                /> <
                Route exact path = "/welcome"
                component = {
                  Welcome
                }
                /> <
                Route exact path = "/chart"
                component = {
                  Chart
                }
                /> <
                Route exact path = "/dashboard"
                render = {
                  (props) => < Dashboard auth = {
                    auth
                  } { ...props
                  }
                  />} / >
                  <
                  Route path = "/callback"
                  render = {
                    (props) => {
                      handleAuthentication(props);
                      return <Callback { ...props
                      }
                      />
                    }
                  }
                  /> <
                  /Switch> <
                  /Router> */
                } <
                /div>
              )
            }
          }
          export default App;
          export const App = () => {

              return ( <
                  div >
                  <
                  ApptForm / > { < Router history = {
                      history
                    } >
                    <
                    Switch >
                    <
                    Route exact path = "/"
                    render = {
                      (props) => < Home auth = {
                        auth
                      } { ...props
                      }
                      />} / >
                      <
                      Route exact path = "/home"
                      render = {
                        (props) => < Home auth = {
                          auth
                        } { ...props
                        }
                        />} / >
                        <
                        Route exact path = "/login"
                        component = {
                          Login
                        }
                        /> <
                        Route exact path = "/addevent"
                        component = {
                          AddEvent
                        }
                        /> <
                        Route exact path = "/welcome"
                        component = {
                          Welcome
                        }
                        /> <
                        Route exact path = "/chart"
                        component = {
                          Chart
                        }
                        /> <
                        Route exact path = "/dashboard"
                        render = {
                          (props) => < Dashboard auth = {
                            auth
                          } { ...props
                          }
                          />} / >
                          <
                          Route path = "/callback"
                          render = {
                            (props) => {
                              handleAuthentication(props);
                              return <Callback { ...props
                              }
                              />
                            }
                          }
                          /> <
                          /Switch> <
                          /Router> */
                        } <
                        /div>
                      );
                    }