var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = "index.html";
handle["/login"] = requestHandlers.login

server.start(router.route, handle);