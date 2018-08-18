import API from '../utils/API'
import nJwt from 'njwt';


const loginData = (token) => 
     {
   
      API.getUserMetadata()
      .then(function (response) {
          console.log("get userMetadata.then");
       let key = response.data.keys[0].x5c[0];
       let certificate = [
          '-----BEGIN CERTIFICATE-----',
           key,
           '-----END CERTIFICATE-----'
         ].join('\n')
       let alg = response.data.keys[0].alg;
       //console.log(token,key,alg)
       nJwt.verify(token,certificate,alg,function(err,verifiedJwt){
  
        let user = {};
          if(err){
           
            if (err.message === 'Jwt is expired') {
              //console.log(err.message.parsedBody)
            user.firstName = verifiedJwt.parsedBody.given_name;
            user.lastName = verifiedJwt.parsedBody.family_name;
            user.picture =verifiedJwt.parsedBody.picture;
            user.email = verifiedJwt.parsedBody.email;
            console.log(user);
            API.saveUser(user);
             }
              else {
               console.log(err)
             }
          
          }else{
            //console.log(verifiedJwt.parsedBody); // Will contain the header and body
            
            user.firstName = verifiedJwt.body.given_name;
            user.lastName = verifiedJwt.body.family_name;
            user.picture =verifiedJwt.body.picture;
            user.email = verifiedJwt.body.email;
            user.online = true;
            console.log(user);
            API.saveUser(user);
          }
        });
  
  })
      .catch(function (error) {
        console.log(error);
      });   

}

     

export default loginData;
