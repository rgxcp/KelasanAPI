'use strict'

const Schema = use('Schema')

class SubjectSchema extends Schema {
  up() {
    this.create('subjects', (table) => {
      table.increments('id')
      table
        .integer('classroom_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classrooms')
      table.string('name', 50).notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('subjects')
  }
}

module.exports = SubjectSchema
