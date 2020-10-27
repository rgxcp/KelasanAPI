'use strict'

const Schema = use('Schema')

class AssignmentTimelineSchema extends Schema {
  up() {
    this.create('assignment_timelines', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('assignment_timelines')
  }
}

module.exports = AssignmentTimelineSchema
