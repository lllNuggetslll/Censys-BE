var express = require("express");
var path = require("path");
var logger = require("morgan");
var port = 3000;
var indexRouter = require("./routes/index");

var http = require("http");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/*", indexRouter);

app.set("port", port);

var server = http.createServer(app);

server.listen(port);
server.on("listening", onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log(bind);
}

module.exports = app;
