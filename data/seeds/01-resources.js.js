
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "Computer", description: "Something new coming today" },
        { id: 2, name: "Internet", description: "" },
        { id: 3, name: "Car", description: "Got some work to do" },
        { id: 4, name: "Ladder", description: "" },
        { id: 5, name: "Hammer", description: "" }
      ]);
    });
};
