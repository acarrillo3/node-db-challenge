
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Project 1', description: 'Some description for this project', completed: false},
        {id: 2, name: 'Awesome Project', description: 'Went above and beyond for this project', completed: true},
        {id: 3, name: 'Project of a lifetime', description: 'Definetely getting a job with this project', completed: false},
      ]);
    });
};