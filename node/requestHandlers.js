var querystring = require("querystring");
    fs = require('fs'),
    path = require("path"),
    sessions = require("../node_modules/sessions/lib/sessions"),
    handler = new sessions();

function index(response, postData) {
  redirectTo(response, "index.html");
}

function login(response, postData) {

  if(postData.method === "POST") {
    var data = "";

    postData.on("data", function(chunk) {
        data += chunk;
    });

    postData.on("end", function() {
      var json = querystring.parse(data);

      if(json["email"] === "f.thiene@gmail.com")  {

        handler.httpRequest(postData, response, function (err, session) {
          if (err) {
            return response.end("session error");
          }

          console.log("[%s] > %s", session.uid(), postData.url);
          response.end();
        });
      } else {
        response.writeHeader(500, {"Content-Type": "text/html"});
        response.end();
      }
    });
  }
}

function logout(response, postData) {
  request.session.data.user = "Guest";
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve been logged out');
  response.end();
  return;
}

function principal(response, postData) {
  regExp = new RegExp("uid=(.*) ?");

  // get cookie id from the request
  uid = regExp.exec(postData.headers.cookie)[1];

  // check if this cookie exists
  handler.get(uid, function(err, utils, sessions) {
    if(utils && utils.uid() === uid) {
       redirectTo(response, "principal.html");
    } else {
      redirectTo(response, "index.html");
    }
  });
}

function redirectTo(response, page) {
  var filename = path.join(__dirname, "/public/" + page);
  fs.readFile(filename, function(err, html) {
    if(err) {
      response.writeHeader(500, {"Content-Type": "text/html"});
      response.end(err + "\n");
      return;
    }

    response.writeHeader(200, {"Content-Type": "text/html"});
    response.end(html);
  });
}

exports.index = index;
exports.login = login;
exports.principal = principal;
