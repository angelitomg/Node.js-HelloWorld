
/**
 * Node.js Hello World
 *
 * Angelito M. Goulart
 *
 * www.angelitomg.com
 *
 */

// Require http module
var http = require('http');

// Create the http server
http.createServer(function (req, res){

	// Header of response
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	// Write the message in the response
	res.write('Hello World!\n');
	
	// End connection
	res.end();
	
// Server will run on 127.0.0.1 on port 1334
}).listen('1334', '127.0.0.1');

// Print message in the console
console.log('Hello World running on 127.0.0.1:1334');