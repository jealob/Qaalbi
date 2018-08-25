import API from '../utils/API'
import nJwt from 'njwt';


const loginData = (token,callback) => 
     {
   
      API.getUserMetadata()
      .then(function (response) {
     
       let key = response.data.keys[0].x5c[0];
       let certificate = [
          '-----BEGIN CERTIFICATE-----',
           key,
           '-----END CERTIFICATE-----'
         ].join('\n')
       let alg = response.data.keys[0].alg;
      
       nJwt.verify(token,certificate,alg,function(err,verifiedJwt){
  
        let user = {};
          if(err){
           
            if (err.message === 'Jwt is expired') {
           
            user.firstName = err.parsedBody.given_name;
            user.lastName = err.parsedBody.family_name;
            user.picture =err.parsedBody.picture;
            user.email = err.parsedBody.email;
            
            callback(user);
             }
              else {
               console.log(err)
             }
          
          }else{
            //console.log(verifiedJwt.parsedBody); // Will contain the header and body
            // console.log(token)
            user.token = token.toString();
            user.firstName = verifiedJwt.body.given_name;
            user.lastName = verifiedJwt.body.family_name;
            user.picture =verifiedJwt.body.picture;
            user.email = verifiedJwt.body.email;
            user.online = true;
          
            callback(user);(user);
          }
        });
  
  })
      .catch(function (error) {
        console.log(error);
      });   

}

     

export default loginData;
