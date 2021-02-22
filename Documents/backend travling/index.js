const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/Database");
const app = express();
const routes = require("./routes/routes");

const port = process.env.PORT || 3000;

db.authenticate().then(() =>
  console.log("Connection with database are success")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.get("/", (req, res, next) => {
  res.send("Deploy Success!");
});
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
