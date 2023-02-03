const express = require("express");
const { isObjectIdOrHexString, set } = require("mongoose");
const app = express();
const port = process.env.port || 8080;
const path = require("path");
const server = app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname, "public")));

let socketconnected = new Set();

io.on("connection", onconnected);
function onconnected(socket) {
  console.log(socket.id);
  socketconnected.add(socket.id);
  console.log(socketconnected);

  io.emit("client-total", socketconnected.size);

  socket.on("diconnect", (socket) => {
    console.log("socket disconnected", socket.id);
    socketconnected.delete(socket.id);
    io.emit("client-total", socketconnected.size);
  });
}
