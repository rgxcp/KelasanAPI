'use strict'

const Schema = use('Schema')

class FolderSchema extends Schema {
  up() {
    this.create('folders', (table) => {
      table.increments('id')
      table
        .integer('classroom_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classrooms')
      table.string('name', 20).notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('folders')
  }
}

module.exports = FolderSchema
