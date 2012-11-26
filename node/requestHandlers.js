var querystring = require("querystring");
    fs = require('fs'),
    sessions = require("../node_modules/sessions/lib/sessions"),
    handler = new sessions();

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

exports.login = login;