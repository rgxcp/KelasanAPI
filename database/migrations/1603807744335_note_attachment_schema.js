'use strict'

const Schema = use('Schema')

class NoteAttachmentSchema extends Schema {
  up() {
    this.create('note_attachments', (table) => {
      table.increments('id')
      table
        .integer('note_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('notes')
      table.string('direct_link').notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('note_attachments')
  }
}

module.exports = NoteAttachmentSchema
