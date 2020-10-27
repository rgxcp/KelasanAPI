'use strict'

const Schema = use('Schema')

class CompletedAssignmentSchema extends Schema {
  up() {
    this.create('completed_assignments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('completed_assignments')
  }
}

module.exports = CompletedAssignmentSchema
