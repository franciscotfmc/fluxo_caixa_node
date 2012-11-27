var http = require("http"),
    url = require("url"),
    util = require('util');


function start(route, handle) {
  function onRequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      util.log("Request for " + pathname + " received.");
      route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8000);
  util.log("Server has started.");
}

exports.start = start;
