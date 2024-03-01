import express from "express";
import logger from "morgan";
import { router } from "./routes/index.js";
import http from "http";
import cors from "cors";

const port = 4000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  console.log(
    "Activate interlock! Dynotherms connected! Infracells up! Mega thrusters are go!"
  );
  console.log(`listening on: http://localhost:${server.address().port}`);
});
