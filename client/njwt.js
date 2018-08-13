var nJwt = require('njwt');
var axios = require('axios');


//console.log(x)

axios.get('https://kratos7.auth0.com/.well-known/jwks.json')
    .then(function (response) {
     var key = response.data.keys[0].x5c[0];

     nJwt.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUTVOREl6TTBFeFJqSXhPVEJCUlVNME4wTTVPRUU1TkVKRE9FRTRRakZFTXpVMFEwUTJNZyJ9.eyJodHRwczovL2V4YW1wbGUuY29tL3JvbGVzIjpbInVzZXIiXSwiZ2l2ZW5fbmFtZSI6IkRhdmlkIiwiZmFtaWx5X25hbWUiOiJqb2huIiwibmlja25hbWUiOiJva2tvaGgiLCJuYW1lIjoiRGF2aWQgam9obiIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLXBUZ29YRy14ZTFjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FBbm5ZN3BzOE9aVndDeDQ3Q1BaREY2WlNlanFOV2xpcHcvbW8vcGhvdG8uanBnIiwiZ2VuZGVyIjoibWFsZSIsImxvY2FsZSI6ImZyIiwidXBkYXRlZF9hdCI6IjIwMTgtMDgtMTJUMjE6Mjg6MjUuODYxWiIsImlzcyI6Imh0dHBzOi8va3JhdG9zNy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDc0NDQ4MTEyNjY2MTA0NzI0MDQiLCJhdWQiOiJNSGFJcFJFZDdHWjFVRDRxbndnSkVORG5DcmFXV3NMNyIsImlhdCI6MTUzNDEwOTMwOCwiZXhwIjoxNTM0MTQ1MzA4LCJhdF9oYXNoIjoiejVkdVRYdWVTYmZjZGUyQnAtajJuZyIsIm5vbmNlIjoic3pVN0l5cERiNF9aajV0RDFEMzlnQUl2eV9Yd0NyLVEifQ.QrcWTFeM9fIYw1bs0BWdcfDCBwiKxAK0HSSI-TBZ85oF_KaTyCP4HCa4aRP1_WpbqlqU42rW4CpO-QcKoPYg1Fls_-g2An-zRibWMeULX1bQUaOaV0L1JNhYrjoWmyhFqQvfmF_BegegpqnazM10kJLGtPvzI7Ll2mIVrTHtTpfn0HbMHczi-4rrxzxHPHKS_ppdaGv6p2_LgnV_csYUX7uigdjBUi9V4IWwzvz51YInoNJsFyad_3UXwq8wh5ei2QjrYJz7u83rI5qG0JpYCYxkmmipXI6zTfJ8sW3D9K9-ngBPGRah18pkUBYqnxvab12G89dIlu1t3LXx7MOHgQ",key,function(err,verifiedJwt){
        if(err){
          console.log(err); // <==== Here to see my error message !!
          console.log(err.parsedBody) // add .given_name if u want to see the given name
        }else{
          console.log(verifiedJwt); // Will contain the header and body
        }
      });
   
   //console.log(x.parsedBody.JwtBody)

})
    .catch(function (error) {
      console.log(error);
    });   


