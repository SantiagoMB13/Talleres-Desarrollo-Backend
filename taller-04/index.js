const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//Para usar los datos del archivo.json en los puntos 1-4
const datos = require('./23-taller-04-datos.json');

// Punto 1 (USO QUERIES EN EL ENDPOINT)
app.get('/users/hobby', (req, res) => {
  const { hobby } = req.query;
  if (!hobby) {
    return res.status(400).json({ error: 'Debe proporcionar un hobby' });
  }
  const usersWithHobby = datos.filter(user => user.hobbies.includes(hobby));
  res.json(usersWithHobby);
});

// Punto 2 (USO PARAMS EN EL ENDPOINT)
app.get('/users/exists/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Debe proporcionar un ID' });
      }
    const userExists = datos.some(user => user.id === parseInt(id));
    res.json({ 'Existe': userExists });
});

// Punto 3 (USO QUERIES EN EL ENDPOINT)
app.get('/users/team-experience', (req, res) => {
  const { team } = req.query;
  if (!team) {
    return res.status(400).json({ error: 'Debe proporcionar un equipo' });
  }
  const totalExperience = datos.filter(user => user.team === team).reduce((sum, user) => sum + user.years, 0);
  res.json({ 'Experiencia total': totalExperience });
});

// Punto 4 (USO PARAMS EN EL ENDPOINT)
app.get('/users/by-faction/:faction', (req, res) => {
  const { faction } = req.params;
  if (!faction) {
    return res.status(400).json({ error: 'Debe proporcionar una facción' });
  }
  const usersInFaction = datos.filter(user => user.faction === faction);
  res.json(usersInFaction);
});

// Punto 5
// DATOS PARA EL PUNTO 5
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];
app.post('/users', (req, res) => {
  const { id, name, carrera } = req.body;
  if (!name || !carrera) {
    return res.status(400).json({ error: 'Debe proporcionar nombre y carrera' });
  }
  const newUser = {
    id: id? id : users.length + 1,
    name,
    carrera
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});