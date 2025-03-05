const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request body

// Dummy users array
let users = [{ id: 1, name: "John Doe" }];

// GET /users - Return all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
} 
);