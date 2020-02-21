
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Task is priority', notes: "", completed: true, project_id: 2},
        {id: 2, description: 'Have some time for this', notes: "", completed: false, project_id: 2},
        {id: 3, description: 'Need to get done by wednesday', notes: "", completed: false, project_id: 1},
        {id: 4, description: 'Do this then that', notes: "", completed: true, project_id: 3},
        {id: 5, description: 'Get it done', notes: "", completed: false, project_id: 1},
      ]);
    });
};