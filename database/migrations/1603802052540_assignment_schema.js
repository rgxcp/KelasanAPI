'use strict'

const Schema = use('Schema')

class AssignmentSchema extends Schema {
  up() {
    this.create('assignments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('assignments')
  }
}

module.exports = AssignmentSchema
