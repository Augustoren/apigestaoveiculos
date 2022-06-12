import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("vehicles", table => {
    table.uuid("id").defaultTo(knex.raw("(UUID())"));
    table.string("brand").notNullable();
    table.string("model").notNullable();
    table.string("color").notNullable();
    table.string("year").notNullable();
    table.string("license_plate").notNullable();
    table.string("chassis_number").notNullable();
    table.string("type").notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("vehicles");
}

