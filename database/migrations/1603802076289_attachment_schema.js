'use strict'

const Schema = use('Schema')

class AttachmentSchema extends Schema {
  up() {
    this.create('attachments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('attachments')
  }
}

module.exports = AttachmentSchema
