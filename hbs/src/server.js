const express = require("express");
const { engine } = require("express-handlebars");

const usurarios = [
  {
    nombre: "nombre",
    edad: 30,
  },
  {
    nombre: "nombre",
    edad: 32,
  },
  {
    nombre: "nombre",
    edad: 33,
  },
];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("views", "./src/views");
app.set("view engine", "hbs");

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "index.hbs", //ubicacion de archivo principal,
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "/views/partials",
  })
);

app.get("/", (req, res) => {
  res.render("main", {
    usurarios,
  });
});

app.engine;

const PORT = 8080;
const server = app.listen(PORT, (req, res) => {
  console.log(`server started on http://localhost:${PORT}`);
});
server.on("error", (err) => console.log(err));
