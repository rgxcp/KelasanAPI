'use strict'

const Schema = use('Schema')

class NoteTimelineSchema extends Schema {
  up() {
    this.create('note_timelines', (table) => {
      table.increments('id')
      table
        .integer('note_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('notes')
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
    this.drop('note_timelines')
  }
}

module.exports = NoteTimelineSchema
