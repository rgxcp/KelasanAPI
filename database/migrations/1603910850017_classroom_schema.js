'use strict'

const Schema = use('Schema')

class ClassroomSchema extends Schema {
  up() {
    this.create('classrooms', (table) => {
      table.increments('id')
      table.string('name', 20).notNullable().collate('utf8mb4_unicode_ci')
      table
        .string('invitation_code', 12)
        .unique()
        .index()
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('classrooms')
  }
}

module.exports = ClassroomSchema
