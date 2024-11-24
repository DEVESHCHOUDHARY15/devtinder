var express = require("express");
var app = express();

app.use((req, res) => {
  res.send("Hello, world!");
});
app.use("/test", (req, res) => {
  res.send("Welcome to node");
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Server is running on port 3000  when the server starts.  // 3000 is the port number where the server will be running.  // When the server starts, it will log "Server is running on port 3000".  // This message will be displayed in the terminal.  // Note: This code will not run in this environment. It should be run in a local Node.js environment.  // You can run it in your local environment by executing the command "node server.js" in your terminal.  // Once you run the server, you can access it by opening a web browser and navigating to http://localhost:3000.  // The server will respond with "Welcome to node" when you visit http://localhost:3000.  // This is a simple Express.js server that responds with
});
