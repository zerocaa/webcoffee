const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const db = require("./config/db");
//connect db
db.connectDB();
const port = 3000;

const route = require("./routes");

route(app);

// import bodyParser from "body-parser";//for typscript code only, use require for js
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//http logger
app.use(express.static(path.join(__dirname, '/public')));
// app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));


//template
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
