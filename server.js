const express = require("express");
const app = express();
const connectToDB = require("./config/database");
const mustacheExpress = require("mustache-express");
const PORT = 3000;

connectToDB();

app.use(express.static("public"));
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

// app.use(express.json()); // Pour le support des JSON dans le corps (body) des requêtes
// app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send({ message: "Hello" });
});

app.use("/annonces", require("./routes/annonces"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


