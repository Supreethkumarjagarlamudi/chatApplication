const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const registerRoute = require("./routes/Authentication/Register/Register.js");
const loginRoute = require("./routes/Authentication/Login/login.js");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.set('views', path.join(__dirname,"/views"));

const port = 9000;

app.get("/", (req, res) => {
    res.redirect("/login");
});

app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})