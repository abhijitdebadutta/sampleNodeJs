var http = require('http'),
 csv = require('fast-csv');
var fs = require('fs');
var urlResource = require('url');
var portNumber = process.env.PORT || 5000,
    jsforce = require('jsforce');
console.log(portNumber);


http.createServer(function(req,resp){			   	
			resp.writeHead(200, {'Content-Type': 'text/plain'});
   		   
		   resp.end('Hello World\n');

}).listen(portNumber)
   .on('listening', function(){
      console.log('I am listening!');
   }).
   on('connection', function(){
               console.log('Hi a new connection received!');
   })
   .on('end', function(){
     console.log('I am stupid!');
   });
