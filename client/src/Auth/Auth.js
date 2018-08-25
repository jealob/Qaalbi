import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import nJwt from 'njwt';
import axios from 'axios';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/dashboard');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    //console.log(authResult.expiresIn)
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // https://kratos7.auth0.com/.well-known/jwks.json
    //console.log(expiresAt)
    // navigate to the home route
    history.replace('/dashboard');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}




//console.log(x)

axios.get('https://kratos7.auth0.com/.well-known/jwks.json')
    .then(function (response) {
     var key = response.data.keys[0].x5c[0];
     let idToken = JSON.parse(localStorage.getItem('id_token'));
     console.log(idToken)
     nJwt.verify(idToken,key,function(err,verifiedJwt){
        if(err){
          //console.log(err); // <==== Here to see my error message !!
          console.log(err.parsedBody) // add .given_name if u want to see the given name
          localStorage.setItem('userData', err.parsedBody);
        }else{
          console.log(verifiedJwt); // Will contain the header and body
        }
      });
   
   //console.log(x.parsedBody.JwtBody)

})
    .catch(function (error) {
      console.log(error);
    });   



