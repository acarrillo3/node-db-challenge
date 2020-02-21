const db = require("./db_config");

module.exports = {
  getResources,
  getProjects,
  getTasks,
  getProjectById,
  getResourcesByProjectId,
  getTasksByProject,
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

function getTasksByProject(id) {
  // SELECT p.name, p.description, p.completed, t.description, t.notes, t.completed
  // FROM projects as p
  // JOIN tasks as t on p.id = t.project_id
  // WHERE p.id = 1;

  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .where({ "p.id": id });
}

function getResourcesByProjectId(id) {
  // SELECT *
  // FROM projects as p
  // JOIN projects_resources as pr on p.id = pr.project_id
  // JOIN resources as r on pr.resource_id = r.id
  // WHERE p.id = 1;

  return db("projects as p")
    .join("projects_resources as pr", "p.id", "pr.project_id")
    .join("resources as r", "pr.resource_id", "r.id")
    .where({ "p.id": id });
}
 
function getProjectById(id) {
  const project = db("projects")
    .where({ id: id })
    .first();
  const tasks = getTasksByProject(id);
  const resources = getResourcesByProjectId(id);

  const promises = [project, tasks, resources];

  return Promise.all(promises).then(results => {
    // destructer promises
    const [project, tasks, resources] = results;

    // add tasks and resources property
    project.tasks = tasks;
    project.resources = resources;

    return project;
  });
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
