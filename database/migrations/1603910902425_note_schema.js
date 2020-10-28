'use strict'

const Schema = use('Schema')

class NoteSchema extends Schema {
  up() {
    this.create('notes', (table) => {
      table.increments('id')
      table
        .integer('classroom_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classrooms')
      table
        .integer('folder_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('folders')
      table
        .text('detail', 'longtext')
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('notes')
  }
}

module.exports = NoteSchema
