
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Resource', description: "Something new coming today"},
        {id: 2, name: 'Second Resources', description: ""},
        {id: 3, name: 'Resource 3', description: "Got some work to do"},
      ]);
    });
};
