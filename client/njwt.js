var jwt = require('jsonwebtoken');
var nJwt = require('njwt');
var axios = require('axios');


//console.log(x)

axios.get('https://kratos7.auth0.com/.well-known/jwks.json')
    .then(function (response) {
     var key = response.data.keys[0].x5c[0];
     var alg = response.data.keys[0].alg;
     //console.log(alg);
 let certificate = [
  '-----BEGIN CERTIFICATE-----',
   key,
   '-----END CERTIFICATE-----'
 ].join('\n')
     token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EUTVOREl6TTBFeFJqSXhPVEJCUlVNME4wTTVPRUU1TkVKRE9FRTRRakZFTXpVMFEwUTJNZyJ9.eyJodHRwczovL2V4YW1wbGUuY29tL3JvbGVzIjpbInVzZXIiXSwiZ2l2ZW5fbmFtZSI6IkphbWVzIiwiZmFtaWx5X25hbWUiOiJEZWFuIiwibmlja25hbWUiOiJrcmF0b3MudGhlbWFzdGVyIiwibmFtZSI6IkphbWVzIERlYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy0zXzZ4R0dlUHFmNC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQW5uWTdvd1JwUWh2QlRIT25DYUVxVDNzT1dkbFo1VEV3L21vL3Bob3RvLmpwZyIsImxvY2FsZSI6ImZyIiwidXBkYXRlZF9hdCI6IjIwMTgtMDgtMTZUMDE6MTE6NTYuODIxWiIsImVtYWlsIjoia3JhdG9zLnRoZW1hc3RlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9rcmF0b3M3LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwOTU4ODkyNzk2MjcyMjc4NTkxOSIsImF1ZCI6Ik1IYUlwUkVkN0daMVVENHFud2dKRU5EbkNyYVdXc0w3IiwiaWF0IjoxNTM0MzgxOTE3LCJleHAiOjE1MzQ0MTc5MTcsImF0X2hhc2giOiJSdy0tcEZKRjI2aElJRTc2a3c0ZFRRIiwibm9uY2UiOiJHSDBmWUFZemdibW93UklOb1JFWW5SYmVpMEZCdUZKNiJ9.oXTfono4hYrVAGO18B-6PiuVPe-hLGV9Mdr1fw8IEI5StHr4flj5iXVov3szGdf5Qurt9bbS0Cv6eibiy34eqME-G41CVUVs55UzgQ8hXgvsIfN3MEIUY8R2iANIZcmiBwoooExtC6IjgBxHBsKA8t1ucv32_AscBQs7rcn7m-DImeQSR9SsLYE5ud8iayyIpLdhgdspXUntbVaXiLn8oriZh5euveZrShRW9shSFbXkBubnRmQGJCmIgMoK4pq64pTkjiW_hb96LNZqoASXcj6AY4G88eQQufjak1qlRKrs3htJuU2e7DDQL9d8t2MwyU0wGiK-fI4M4xlxlO0FSA";
     //var decoded = jwt.decode(token);
     //console.log(decoded)
     nJwt.verify(token, certificate, alg,function(err,verifiedJwt){
        if(err){

          if (err.message === 'Jwt is expired') {
          console.log(err)
         }
          else {
           console.log(err)
         }
           // add .given_name if u want to see the given name 
        }else{
          console.log(verifiedJwt.body); // Will contain the header and body
        }

       

       });
   
  

})
    .catch(function (error) {
      console.log(error);
    });   


