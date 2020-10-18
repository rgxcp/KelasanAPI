'use strict'

const Schema = use('Schema')

class ClassSchema extends Schema {
  up() {
    this.create('classes', (table) => {
      table.increments('id')
      table
        .integer('leader')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table
        .string('name', 20)
        .unique()
        .index()
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.string('password', 60).notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('classes')
  }
}

module.exports = ClassSchema
