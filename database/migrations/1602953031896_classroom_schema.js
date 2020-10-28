'use strict'

const Schema = use('Schema')

class ClassroomSchema extends Schema {
  up() {
    this.create('classrooms', (table) => {
      table.increments('id')
      table.string('name', 20).notNullable().collate('utf8mb4_unicode_ci')
      table
        .string('invitation_code', 11)
        .unique()
        .index()
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('classrooms')
  }
}

module.exports = ClassroomSchema
