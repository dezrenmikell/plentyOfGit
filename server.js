const express = require("express");
const logger = require("morgan");
const app = express();
const userController = require("./controllers/userController");

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));
app.use("/api/users", userController);
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("App is up and running on port" + PORT);
});
