'use strict'

const Schema = use('Schema')

class CompletedAssignmentSchema extends Schema {
  up() {
    this.create('completed_assignments', (table) => {
      table.increments('id')
      table
        .integer('assignment_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('assignments')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('completed_assignments')
  }
}

module.exports = CompletedAssignmentSchema
