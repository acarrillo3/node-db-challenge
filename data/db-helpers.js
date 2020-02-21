const db = require("./db_config");

module.exports = {
  getResources,
  getProjects,
  getTasks,
  insertProject,
  insertResource,
  insertTask
};

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projects");
}

function getTasks() {
  return db("tasks");
}

function insertProject(data) {
  return db("projects").insert(data, "id");
}

function insertResource(data) {
  return db("resources").insert(data, "id");
}

function insertTask(data) {
  return db("tasks").insert(data, "id");
}
