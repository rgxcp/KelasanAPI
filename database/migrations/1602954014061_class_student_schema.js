'use strict'

const Schema = use('Schema')

class ClassStudentSchema extends Schema {
  up() {
    this.create('class_students', (table) => {
      table.increments('id')
      table
        .integer('classroom_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classrooms')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table
        .enu('role', ['LEADER', 'STUDENT'])
        .notNullable()
        .defaultTo('STUDENT')
        .collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('class_students')
  }
}

module.exports = ClassStudentSchema
