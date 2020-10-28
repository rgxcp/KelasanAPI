'use strict'

const Schema = use('Schema')

class AssignmentSchema extends Schema {
  up() {
    this.create('assignments', (table) => {
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
        .integer('subject_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('subjects')
      table.string('detail').notNullable().collate('utf8mb4_unicode_ci')
      table.string('where_to_collect', 20).collate('utf8mb4_unicode_ci')
      table.string('collector').collate('utf8mb4_unicode_ci')
      table
        .enu('type', ['INDIVIDUAL', 'GROUP'])
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.datetime('deadline')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('assignments')
  }
}

module.exports = AssignmentSchema
