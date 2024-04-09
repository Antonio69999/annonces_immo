const express = require("express");
const app = express();
const connectToDB = require("./config/database");
const PORT = 3000;

connectToDB();

app.get("/", (request, response) => {
  response.send({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
