'use strict'

const Schema = use('Schema')

class AssignmentAttachmentSchema extends Schema {
  up() {
    this.create('assignment_attachments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('assignment_attachments')
  }
}

module.exports = AssignmentAttachmentSchema
