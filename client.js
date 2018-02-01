var http = require('http');
var options = {
   host: 'localhost',
   port: '8083',
   path: '/index.htm'  
};
var callback = function(response){
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
var req = http.request(options, callback);
req.end();