const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// socket.io connection
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    console.log("A new user Message", message);
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

server.listen(9000, () => {
  console.log(`Server started at port 9000`);
});
