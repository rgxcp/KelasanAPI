'use strict'

const Schema = use('Schema')

class AssignmentTimelineSchema extends Schema {
  up() {
    this.create('assignment_timelines', (table) => {
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
      table
        .enu('type', ['CREATED', 'UPDATED'])
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('assignment_timelines')
  }
}

module.exports = AssignmentTimelineSchema
