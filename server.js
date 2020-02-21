const express = require("express");

const db = require("./data/db-helpers.js");

const server = express();

server.use(express.json());

server.get("/projects", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error: "problems retrieving projects" });
    });
});

server.post("/projects", (req, res) => {
  const newProject = req.body;

  if (newProject.name) {
    db.insertProject(newProject)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(error => {
        res.status(500).json({ error: "problems adding project" });
      });
  } else {
    res.status(400).json({ error: "please enter project name" });
  }
});

server.get("/resources", (req, res) => {
  db.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({ error: "problems retrieving resources" });
    });
});

server.post("/resources", (req, res) => {
  const newResource = req.body;

  if (newResource.name) {
    db.insertResource(newResource)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(error => {
        res.status(500).json({ error: "problems adding resource" });
      });
  } else {
    res.status(400).json({ error: "please enter resource name" });
  }
});

server.get("/tasks", (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({ error: "problems retrieving tasks" });
    });
});

server.post("/tasks", (req, res) => {
  const newTask = req.body;

  if (newTask.name && newTask.description && newTask.project_id) {
    db.insertTask(newTask)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(error => {
        res.status(500).json({ error: "problems adding task" });
      });
  } else {
    res
      .status(400)
      .json({ error: "Please enter task name, description, and project id" });
  }
});

module.exports = server;
