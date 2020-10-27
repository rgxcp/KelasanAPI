'use strict'

const Schema = use('Schema')

class NoteAttachmentSchema extends Schema {
  up() {
    this.create('note_attachments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('note_attachments')
  }
}

module.exports = NoteAttachmentSchema
