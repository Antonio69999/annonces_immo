const express = require("express");
const app = express();
const connectToDB = require("./config/database");
const PORT = 3000;

connectToDB();

app.use(express.json()); // Pour le support des JSON dans le corps (body) des requêtes
app.use(express.urlencoded({ extended: true }));

// app.get("/", (request, response) => {
//   response.send({ message: "Hello" });
// });

app.use("/annonces", require("./routes/annonces"));
app.use("/categories", require("./routes/categories"));
app.use("/post", require("./routes/post"));
app.use("/postCategories", require("./routes/postCategories"));
app.use("/put", require("./routes/put"));
app.use("/delete", require("./routes/delete"));

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
