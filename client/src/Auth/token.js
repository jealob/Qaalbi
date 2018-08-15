import Auth from './Auth';
import API from '../utils/API'
const auth = new Auth();

auth.retrieveToken(function(token){

    API.getUserMetadata()
    .then(function (response) {
     let key = response.data.keys[0].x5c[0];
     let alg = response.data.keys[0].alg;
     nJwt.verify(token,key,alg,function(err,verifiedJwt){
        if(err){
         
          if (err.message === 'Jwt is expired') {
            //console.log(err.message.parsedBody)
            user.firstName = verifiedJwt.parsedBody.given_name;
          user.lastName = verifiedJwt.parsedBody.family_name;
          user.picture =verifiedJwt.parsedBody.picture;
          user.email = verifiedJwt.parsedBody.email;
          user.online = true;
          return user;
           }
            else {
             console.log(err)
           }
        
        }else{
          //console.log(verifiedJwt.parsedBody); // Will contain the header and body
          let user = {};
          user.firstName = verifiedJwt.parsedBody.given_name;
          user.lastName = verifiedJwt.parsedBody.family_name;
          user.picture =verifiedJwt.parsedBody.picture;
          user.email = verifiedJwt.parsedBody.email;
          user.online = true;
          return user;
        }
      });

})
    .catch(function (error) {
      console.log(error);
    });   




})
