exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.string("description", 255);

      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.string("description", 255);
    })
    .createTable("projects_resources", tbl => {
      tbl.primary(["project_id", "resource_id"]);

      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id");

      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resources.id");
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id");

      tbl.string("description", 255).notNullable();

      tbl.string("notes", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
