const express = require("express");

const server = express();

server.use(express.json());

const users = ["Junior", "José", "Wilson"];
// Query params = ?teste=1
// Route params = /users/1
// Request body = {"nome": "Junior", "email": "junior.ze.jw@gmail.com"}
// CRUD = Create, Read, Update, Delete

server.get("/teste", (req, res) => {
  const name = req.query.name;
  // const email = req.query.email;
  return res.json({ message: `Hello '${name}'` });
});
server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/user/:id", (req, res) => {
  const id = req.params.id;
  // const { id } = req.params;
  return res.json({ message: `Buscando o usuário de id = ${id}` });
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.json(users);
});

server.listen(3000);
