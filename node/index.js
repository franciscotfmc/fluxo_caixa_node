var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/login"] = requestHandlers.login;
handle["/principal.html"] = requestHandlers.principal;

server.start(router.route, handle);
