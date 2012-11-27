var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    util = require('util'),
    path = require("path"),
    fs = require("fs"),
    mime = require("mime");

function route(handle, pathname, response, request) {
  util.log("About to route a request for " + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(__dirname + "/public/", uri);

    fs.exists(filename, function(exists) {

        if(!exists) {
            util.log("File " + pathname + " not found");
	        response.writeHeader(404, {"Content-Type": "text/html"});
	        response.end("404 Not Found\n");
            return;
	    }

        fs.readFile(filename, function(err, html) {

            if(err) {
                response.writeHeader(500, {"Content-Type": "text/html"});
                response.end(err + "\n");
                return;
            }

            response.writeHeader(200, {"Content-Type": mime.lookup(filename)});
            response.end(html);
        });
    });
  }
}

exports.route = route;
