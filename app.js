import express from "express";
import logger from "morgan";
import { router } from "./routes/index.js";
import http from "http";
import cors from "cors";

const port = 3000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", onListening);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

  console.log(bind);
}
