const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "David", age: 22 },
];

app.get("/all-users", (req, res) => {
  return res.status(200).json({ mesage: "User fetch succesfully", users });
});

app.post("/add-user", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  return res.status(201).json({ messsage: "User added successfully", newUser });
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((userId) => userId.id === id);
  return res.status(200).json({ message: "User data fetched", user });
});

app.patch("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((userId) => userId.id === id);
  user.name = req.body.name;
  return res.status(201).json({ user });
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((userId) => userId.id !== id);
  return res.status(201).json({ message: "user deleted", users});
});

app.listen(5000, () => {
  console.log("Server is working");
});
